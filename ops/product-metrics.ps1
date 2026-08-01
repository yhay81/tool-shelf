[CmdletBinding()]
param(
    [switch]$Local
)

$ErrorActionPreference = "Stop"
$RepoRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$SqlPath = Join-Path $PSScriptRoot "product-metrics.sql"
$ToolSqlPath = Join-Path $PSScriptRoot "product-tool-metrics.sql"
$PagesPath = Join-Path $RepoRoot "src\ui\pages.tsx"
$Wrangler = Join-Path $RepoRoot "node_modules\.bin\wrangler.cmd"
$Target = if ($Local) { "--local" } else { "--remote" }
$Sql = (Get-Content $SqlPath) -join " "
$ToolSql = (Get-Content $ToolSqlPath) -join " "

$SummaryOutput = & $Wrangler d1 execute tool-shelf $Target --json --command $Sql
if ($LASTEXITCODE -ne 0) {
    throw "D1 summary query failed with exit code $LASTEXITCODE"
}
$ToolOutput = & $Wrangler d1 execute tool-shelf $Target --json --command $ToolSql
if ($LASTEXITCODE -ne 0) {
    throw "D1 tool metrics query failed with exit code $LASTEXITCODE"
}

$SummaryPayload = ($SummaryOutput -join [Environment]::NewLine) | ConvertFrom-Json
$ToolPayload = ($ToolOutput -join [Environment]::NewLine) | ConvertFrom-Json
$Row = $SummaryPayload[0].results[0]
if (-not $Row) {
    throw "D1 metrics query returned no summary"
}

$ToolRows = @($ToolPayload[0].results)
$PublishedSource = Get-Content -Raw -LiteralPath $PagesPath
$PublishedSlugs = [regex]::Matches($PublishedSource, 'slug: "([a-z0-9-]+)"') | ForEach-Object { $_.Groups[1].Value }
$Tools = [ordered]@{}
foreach ($Slug in $PublishedSlugs) {
    $MetricName = $Slug.Replace("-", "_")
    $ToolRow = $ToolRows | Where-Object { $_.tool -eq $Slug } | Select-Object -First 1
    $Tools[$MetricName] = if ($ToolRow) { [int]$ToolRow.users } else { 0 }
}

function Get-Percent {
    param(
        [int]$Numerator,
        [int]$Denominator
    )

    if ($Denominator -eq 0) { return 0.0 }
    return [Math]::Round(($Numerator / $Denominator) * 100, 1)
}

$Users = [int]$Row.users
$OutboundUsers = [int]$Row.outbound_users

[ordered]@{
    generated_at = (Get-Date).ToUniversalTime().ToString("o")
    service = "tool-shelf"
    environment = if ($Local) { "local" } else { "production" }
    funnel = [ordered]@{
        users = $Users
        outbound_users = $OutboundUsers
        outbound_choices = [int]$Row.outbound_choices
        returned = [int]$Row.returned
        users_7d = [int]$Row.users_7d
        outbound_users_7d = [int]$Row.outbound_users_7d
    }
    tools = $Tools
    rates = [ordered]@{
        outbound_percent = Get-Percent $OutboundUsers $Users
        return_percent = Get-Percent ([int]$Row.returned) $Users
    }
} | ConvertTo-Json -Depth 4

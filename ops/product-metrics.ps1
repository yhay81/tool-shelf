[CmdletBinding()]
param(
    [switch]$Local
)

$ErrorActionPreference = "Stop"
$RepoRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$SqlPath = Join-Path $PSScriptRoot "product-metrics.sql"
$Wrangler = Join-Path $RepoRoot "node_modules\.bin\wrangler.cmd"
$Target = if ($Local) { "--local" } else { "--remote" }
$Sql = (Get-Content $SqlPath) -join " "

$Output = & $Wrangler d1 execute tool-shelf $Target --json --command $Sql
if ($LASTEXITCODE -ne 0) {
    throw "D1 metrics query failed with exit code $LASTEXITCODE"
}

$Payload = ($Output -join [Environment]::NewLine) | ConvertFrom-Json
$Row = $Payload[0].results[0]
if (-not $Row) {
    throw "D1 metrics query returned no result"
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
    tools = [ordered]@{
        album_relay = [int]$Row.album_relay
        creator_inbox = [int]$Row.creator_inbox
        profile_palette = [int]$Row.profile_palette
        tag_loom = [int]$Row.tag_loom
        date_quilt = [int]$Row.date_quilt
        mimi_deck = [int]$Row.mimi_deck
        fedi_route = [int]$Row.fedi_route
        peta_sheet = [int]$Row.peta_sheet
        kuru_list = [int]$Row.kuru_list
        kata_prompt = [int]$Row.kata_prompt
        hataraku_tile = [int]$Row.hataraku_tile
        algo_lane = [int]$Row.algo_lane
        mingle_frame = [int]$Row.mingle_frame
        sky_dial = [int]$Row.sky_dial
        tango_orbit = [int]$Row.tango_orbit
        ava_rack = [int]$Row.ava_rack
        chair_call = [int]$Row.chair_call
        dice_seat = [int]$Row.dice_seat
        yose_bloom = [int]$Row.yose_bloom
        heart_board = [int]$Row.heart_board
        yoru_mado = [int]$Row.yoru_mado
        kasane_fuda = [int]$Row.kasane_fuda
        maigo_poster = [int]$Row.maigo_poster
        yomiato = [int]$Row.yomiato
        uchigraph = [int]$Row.uchigraph
        tsumi_erabi = [int]$Row.tsumi_erabi
        ipass_map = [int]$Row.ipass_map
        takufuda = [int]$Row.takufuda
        tabidan = [int]$Row.tabidan
        yorishiru = [int]$Row.yorishiru
        mcp_erabi = [int]$Row.mcp_erabi
        tegotae = [int]$Row.tegotae
        otayori_maku = [int]$Row.otayori_maku
        noriai_hyo = [int]$Row.noriai_hyo
        kairan_to = [int]$Row.kairan_to
        site_hodoki = [int]$Row.site_hodoki
        pon_hakushu = [int]$Row.pon_hakushu
        ano_hon_fuda = [int]$Row.ano_hon_fuda
        post_gura = [int]$Row.post_gura
        suketto_court = [int]$Row.suketto_court
        round_fuda = [int]$Row.round_fuda
        tejun_dai = [int]$Row.tejun_dai
        aikagi_ban = [int]$Row.aikagi_ban
        seibi_to = [int]$Row.seibi_to
    }
    rates = [ordered]@{
        outbound_percent = Get-Percent $OutboundUsers $Users
        return_percent = Get-Percent ([int]$Row.returned) $Users
    }
} | ConvertTo-Json -Depth 4

# Security Policy

## Reporting

脆弱性はGitHubのPrivate vulnerability reportingから非公開で報告してください。公開Issueへ秘密情報や攻撃手順を投稿しないでください。

## Controls

- CSPでスクリプト、接続先、画像元を限定
- イベント名、サービス名、UUID、Content-Type、body size、Fetch Metadataを検証
- Hono JSXの既定エスケープを使用し、ユーザー生成HTMLを描画しない
- 検索語を送信せず、匿名イベントを35日で削除
- 依存とCloudflare互換日付を固定

認証、投稿、ファイルアップロード、決済機能はありません。

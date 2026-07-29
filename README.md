# Tool Shelf

用途と実画面から、公開中の日本語Webツールを選べる道具棚です。

<https://tools.yhay81.com>

## What it does

- 「共有する」「作る」「探す」「調整する」で絞り込む
- 名前、用途、特徴を端末内で検索する
- 実際の画面を見て各サービスを開く
- 匿名の訪問・再訪・送客だけを35日間集計する

検索語はサーバーへ送信しません。Better Auth、広告、外部解析SDKは使いません。

## Development

```powershell
vp env off
npm ci
npm run check
npm test
npm run build
```

ローカルD1へmigrationを適用して起動します。

```powershell
npx wrangler d1 migrations apply tool-shelf --local
npm run dev
```

## Release

本番の正規URLは`https://tools.yhay81.com`です。旧`workers.dev` URLへのアクセスは、同じpathとqueryを保って正規URLへ恒久転送します。

```powershell
npm run release:check
npm run deploy
npm run indexnow
npm run metrics
```

公開前後に、モバイル幅、キーボード操作、画像読込、絞り込み、検索、送客イベントを確認します。

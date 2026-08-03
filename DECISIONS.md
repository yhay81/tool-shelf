# Decisions

## 2026-07-26 — 用途と実画面から選ぶ

- 文章中心のサービス紹介一覧ではなく、実際の画面を主役にしたカード棚にする
- Tool Shelfは置換サービス100本へ数えず、共通の発見・送客面として扱う

## 2026-08-03: 価値の薄い10サービスを棚から外す

- 公開一覧を100本から90本へ絞る
- 実登録0の`album-relay`、`creator-inbox`を外す
- 訪問後の検索・選択・比較がなく、既存の求人統計ツールと重複する`seishain-kyujin`、`shokugyo-joken`、`shokugyo-shushoku`、`shinki-bairitsu`、`shokugyo-jusoku`、`chiiki-bairitsu`、`chiiki-shinki-bairitsu`、`chiiki-shushoku`を外す
- 復元可能性を残すためGitHubソースとD1は削除せず、公開Worker、サブドメイン、Tool Shelfの掲載だけを停止する
- 許可イベントと画像CSPは公開中の一覧から導出し、停止済みサービスを送客・読込対象に戻さない
- 検索語と絞り込みは端末内だけで処理する
- Better Authは所有者アカウントが不要なため採用しない
- 外部解析SDKを使わず、匿名の訪問・再訪・送客だけをD1へ35日保存する

## 2026-07-26 — Kata Promptを10作目として追加

- 型、入力、完成文の三面UIをカード画像に使い、文章を読まなくても用途が分かる状態を保つ
- プロンプト本文は端末内だけで扱い、Tool Shelfでは外向きリンクの匿名イベントだけを記録する

## 2026-07-29 — yhay81.comを公開面にする

- 正規URLを`https://tools.yhay81.com`とし、WranglerのCustom Domain設定を配信構成の正本にする
- 今後の各サービスは原則`https://<product-slug>.yhay81.com`から配信し、Tool Shelfだけ短い`tools`名を使う
- 旧`tool-shelf.yusuke8h.workers.dev`はpathとqueryを保った308転送にし、検索・OG・サイトマップ・IndexNowは正規URLだけを使う
- 認証を導入する場合もcookieは各ホスト限定とし、全サービスで共有する親ドメインcookieを使わない

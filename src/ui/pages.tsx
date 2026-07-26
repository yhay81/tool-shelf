import { product } from "../config/product";
import { Layout } from "./layout";

const tools = [
  {
    categories: "share",
    description: "撮影会や小さなイベントの写真を、QRと合い言葉でまとめて渡す。",
    facts: ["写真をZIPで受取", "管理者のみ登録"],
    image: "https://album-relay.yusuke8h.workers.dev/og.jpg",
    imageAlt: "Album Relayで写真アルバムを受け取る画面",
    name: "Album Relay",
    slug: "album-relay",
    tag: "写真を渡す",
    url: "https://album-relay.yusuke8h.workers.dev",
  },
  {
    categories: "share",
    description: "匿名の絵文字、感想、お題、質問を、ひとつの受信箱で受け取る。",
    facts: ["送る人は登録不要", "管理者のみ登録"],
    image: "https://creator-inbox.yusuke8h.workers.dev/og.jpg",
    imageAlt: "Creator Inboxに絵文字や感想が並ぶ受信箱",
    name: "Creator Inbox",
    slug: "creator-inbox",
    tag: "声を受け取る",
    url: "https://creator-inbox.yusuke8h.workers.dev",
  },
  {
    categories: "create share",
    description: "選んだ色と文字を見ながら、プロフィール画像をその場で仕上げる。",
    facts: ["登録不要", "画像を書き出し"],
    image: "https://profile-palette.yusuke8h.workers.dev/og.png",
    imageAlt: "Profile Paletteでプロフィール画像を編集する画面",
    name: "Profile Palette",
    slug: "profile-palette",
    tag: "アイコンを作る",
    url: "https://profile-palette.yusuke8h.workers.dev",
  },
  {
    categories: "find organize",
    description: "AND、OR、完全一致、除外を組み合わせてInstagram向け検索式を作る。",
    facts: ["登録不要", "条件を端末へ保存"],
    image: "https://tag-loom.yusuke8h.workers.dev/og.png",
    imageAlt: "Tag Loomで複数の検索条件を組み立てる画面",
    name: "Tag Loom",
    slug: "tag-loom",
    tag: "投稿を探す",
    url: "https://tag-loom.yusuke8h.workers.dev",
  },
  {
    categories: "find organize",
    description: "気になるテーマから日本語ポッドキャストの回を探し、今度聴くカードを残す。",
    facts: ["登録不要", "カードを端末へ保存"],
    image: "https://mimi-deck.yusuke8h.workers.dev/og.png",
    imageAlt: "Mimi Deckでテーマ検索したエピソードと今度聴くカード",
    name: "Mimi Deck",
    slug: "mimi-deck",
    tag: "聴く回を探す",
    url: "https://mimi-deck.yusuke8h.workers.dev",
  },
  {
    categories: "plan share",
    description: "候補日時を並べ、みんなの○△×を集めて、ひとつの日程に決める。",
    facts: ["登録不要", "確定日時をカレンダーへ"],
    image: "https://date-quilt.yusuke8h.workers.dev/og.png",
    imageAlt: "Date Quiltで候補日時への回答を一覧する画面",
    name: "Date Quilt",
    slug: "date-quilt",
    tag: "日程を決める",
    url: "https://date-quilt.yusuke8h.workers.dev",
  },
] as const;

export function HomePage() {
  return (
    <Layout>
      <section class="shelf-shell" id="tools">
        <header class="shelf-heading">
          <p class="eyebrow">6 TOOLS</p>
          <div class="shelf-title">
            <h1>何をしますか？</h1>
            <p>画面と用途を見比べて、そのまま使えます。</p>
          </div>
        </header>

        <div class="shelf-controls">
          <label class="search-control">
            <span class="search-icon" aria-hidden="true">
              ⌕
            </span>
            <span class="visually-hidden">道具を検索</span>
            <input
              autocomplete="off"
              id="tool-search"
              placeholder="写真、検索、日程…"
              type="search"
            />
          </label>
          <div class="filter-row" aria-label="用途で絞り込む">
            <button aria-pressed="true" data-filter="all" type="button">
              すべて
            </button>
            <button aria-pressed="false" data-filter="share" type="button">
              共有する
            </button>
            <button aria-pressed="false" data-filter="create" type="button">
              作る
            </button>
            <button aria-pressed="false" data-filter="find" type="button">
              探す
            </button>
            <button aria-pressed="false" data-filter="plan" type="button">
              調整する
            </button>
          </div>
          <output aria-live="polite" id="tool-count">
            6件
          </output>
        </div>

        <div class="tool-grid" id="tool-grid">
          {tools.map((tool, index) => (
            <article
              class="tool-card"
              data-categories={tool.categories}
              data-search={`${tool.name} ${tool.tag} ${tool.description} ${tool.facts.join(" ")}`}
            >
              <a data-tool={tool.slug} href={tool.url}>
                <figure>
                  <img
                    alt={tool.imageAlt}
                    fetchpriority={index === 0 ? "high" : "auto"}
                    height="630"
                    loading={index < 2 ? "eager" : "lazy"}
                    src={tool.image}
                    width="1200"
                  />
                  <figcaption>{tool.tag}</figcaption>
                </figure>
                <div class="card-body">
                  <div class="card-title">
                    <h2>{tool.name}</h2>
                    <span aria-hidden="true">↗</span>
                  </div>
                  <p>{tool.description}</p>
                  <ul aria-label="特徴">
                    {tool.facts.map((fact) => (
                      <li>{fact}</li>
                    ))}
                  </ul>
                </div>
              </a>
            </article>
          ))}
        </div>
        <p class="empty-result" hidden id="empty-result">
          該当する道具はまだありません。
        </p>
      </section>
    </Layout>
  );
}

export function PrivacyPage() {
  return (
    <Layout title={`プライバシー | ${product.name}`}>
      <article class="prose">
        <p class="eyebrow">PRIVACY</p>
        <h1>保存するのは、匿名の利用記録だけです。</h1>
        <p>
          この端末で生成した匿名セッションID、訪問・再訪・道具を開いたという操作、道具の識別名、日付を保存します。
          氏名、メールアドレス、IPアドレス、検索欄に入力した言葉は保存しません。
        </p>
        <h2>端末とサーバーの境界</h2>
        <p>
          検索欄の内容と選択中の絞り込みはブラウザ内だけで処理し、サーバーへ送信しません。
          匿名セッションIDはブラウザのlocalStorageへ保存します。
        </p>
        <h2>保持と削除</h2>
        <p>
          サーバーの匿名利用記録は35日後に削除します。localStorageのIDはブラウザのサイトデータを消すと削除できます。
          各リンク先のサービスでは、それぞれのプライバシー方針が適用されます。
        </p>
      </article>
    </Layout>
  );
}

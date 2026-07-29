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
    categories: "create organize",
    description: "ExcelやCSVの行を、A4ラベル用紙へ実寸で並べて印刷する。",
    facts: ["登録不要", "文字は端末内だけに保存"],
    image: "https://peta-sheet.yusuke8h.workers.dev/og.png",
    imageAlt: "Peta SheetでA4ラベル用紙へ文字を配置する画面",
    name: "Peta Sheet",
    slug: "peta-sheet",
    tag: "ラベルを印刷",
    url: "https://peta-sheet.yusuke8h.workers.dev",
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
    categories: "find organize",
    description: "目的、ソフトウェア、現在の登録可否から日本語圏のFediverseサーバーを比べる。",
    facts: ["登録不要", "最大3件を端末で比較"],
    image: "https://fedi-route.yusuke8h.workers.dev/og.png",
    imageAlt: "Fedi Routeで目的と登録状況からサーバーを比較する画面",
    name: "Fedi Route",
    slug: "fedi-route",
    tag: "居場所を比べる",
    url: "https://fedi-route.yusuke8h.workers.dev",
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
  {
    categories: "plan share organize",
    description: "決まったイベントを告知し、○△×の参加表明を集めて、当日の名簿にする。",
    facts: ["登録不要", "名簿を印刷・CSV"],
    image: "https://kuru-list.yusuke8h.workers.dev/og.png",
    imageAlt: "Kuru Listでイベントの参加状況と名簿を管理する画面",
    name: "Kuru List",
    slug: "kuru-list",
    tag: "参加を集める",
    url: "https://kuru-list.yusuke8h.workers.dev",
  },
  {
    categories: "create organize",
    description: "用途に合う型へ材料を入れ、AIへ渡せる日本語の完成文を組み立てる。",
    facts: ["登録不要", "本文は端末内だけ"],
    image: "https://kata-prompt.yusuke8h.workers.dev/og.png",
    imageAlt: "Kata Promptで型、入力欄、完成したプロンプトを並べる画面",
    name: "Kata Prompt",
    slug: "kata-prompt",
    tag: "プロンプトを作る",
    url: "https://kata-prompt.yusuke8h.workers.dev",
  },
  {
    categories: "plan organize",
    description: "勤務先を色分けし、シフトと勤務時間、給与の見込みを月間カレンダーでまとめる。",
    facts: ["登録不要", "予定と金額は端末内だけ"],
    image: "https://hataraku-tile.yusuke8h.workers.dev/og.png",
    imageAlt: "Hataraku Tileで勤務先、月間カレンダー、シフト入力を並べる画面",
    name: "Hataraku Tile",
    slug: "hataraku-tile",
    tag: "シフトを見積もる",
    url: "https://hataraku-tile.yusuke8h.workers.dev",
  },
  {
    categories: "find organize",
    description: "難易度と分野から、次に解くAtCoderの5問を一本の練習レーンへ並べる。",
    facts: ["登録不要", "進捗は端末内だけ"],
    image: "https://algo-lane.yusuke8h.workers.dev/og.png",
    imageAlt: "Algo Laneで難易度色の5問を一本の練習レーンへ並べる画面",
    name: "Algo Lane",
    slug: "algo-lane",
    tag: "次の5問を選ぶ",
    url: "https://algo-lane.yusuke8h.workers.dev",
  },
  {
    categories: "create share",
    description: "画像、好きなこと、活動時間、関わり方を、一枚の自己紹介カードへ整える。",
    facts: ["登録不要", "画像は端末内だけ"],
    image: "https://mingle-frame.yusuke8h.workers.dev/og.png",
    imageAlt: "Mingle Frameで写真、タグ、活動時間を一枚の自己紹介カードへ整える画面",
    name: "Mingle Frame",
    slug: "mingle-frame",
    tag: "自己紹介を一枚へ",
    url: "https://mingle-frame.yusuke8h.workers.dev",
  },
  {
    categories: "find organize",
    description: "目的と検索語から、日本語のBlueskyカスタムフィードを3件へ絞る。",
    facts: ["登録不要", "検索語は保存しない"],
    image: "https://sky-dial.yusuke8h.workers.dev/og.png",
    imageAlt: "Sky Dialのダイヤルから3件のフィード候補と保存トレイへつながる画面",
    name: "Sky Dial",
    slug: "sky-dial",
    tag: "フィードを3つへ",
    url: "https://sky-dial.yusuke8h.workers.dev",
  },
  {
    categories: "find organize",
    description: "日本語・英語を端末内で検索し、関連語をたどって保存・復習する。",
    facts: ["登録不要", "検索語・単語帳は端末内"],
    image: "https://tango-orbit.yusuke8h.workers.dev/og.png",
    imageAlt: "Tango Orbitの検索候補、関連語の軌道、保存した単語が並ぶ画面",
    name: "Tango Orbit",
    slug: "tango-orbit",
    tag: "単語を引いて残す",
    url: "https://tango-orbit.yusuke8h.workers.dev",
  },
  {
    categories: "find organize",
    description: "所持アバター名から、衣装・髪型・小物のBOOTH検索経路を組み立てる。",
    facts: ["登録不要", "アバター名は端末内"],
    image: "https://ava-rack.yusuke8h.workers.dev/og.png",
    imageAlt: "Ava Rackのアバターラック、着せ替え棚、検索チケットが並ぶ画面",
    name: "Ava Rack",
    slug: "ava-rack",
    tag: "対応アイテムを探す",
    url: "https://ava-rack.yusuke8h.workers.dev",
  },
  {
    categories: "plan share",
    description: "施術条件と候補日時を一枚の美容モデル募集カードにし、応募文から外部連絡へつなぐ。",
    facts: ["応募者情報は保存しない", "募集は14日で終了"],
    image: "https://chair-call.yusuke8h.workers.dev/og.png",
    imageAlt: "Chair Callのサロン椅子、施術道具、候補日時つき募集カードが並ぶ画面",
    name: "Chair Call",
    slug: "chair-call",
    tag: "練習モデルを募る",
    url: "https://chair-call.yusuke8h.workers.dev",
  },
  {
    categories: "find plan share",
    description:
      "オンラインTRPGの条件、空席、候補日時を一枚の卓札にし、応募文から外部連絡へつなぐ。",
    facts: ["参加者情報は保存しない", "募集は14日で終了"],
    image: "https://dice-seat.yusuke8h.workers.dev/og.png",
    imageAlt: "Dice Seatの円卓、ダイス、空席、候補日時の卓札が並ぶ画面",
    name: "Dice Seat",
    slug: "dice-seat",
    tag: "オンライン卓を募る",
    url: "https://dice-seat.yusuke8h.workers.dev",
  },
  {
    categories: "create share",
    description: "みんなの短いメッセージを一輪ずつ集め、非公開の花束として本人へ贈る。",
    facts: ["参加者は登録不要", "花束は35日で削除"],
    image: "https://yose-bloom.yhay81.com/og.png",
    imageAlt: "Yose Bloomで色とりどりのメッセージの花を一つの花束へ集める画面",
    name: "Yose Bloom",
    slug: "yose-bloom",
    tag: "ことばを花束へ",
    url: "https://yose-bloom.yhay81.com",
  },
  {
    categories: "find share",
    description: "大人向けの手動ハート交換オープンチャットを、ノルマや時間帯から見比べる。",
    facts: ["個人連絡先は掲載不可", "募集は14日で終了"],
    image: "https://heart-board.yhay81.com/og.png",
    imageAlt: "Heart Boardのコルク掲示板にハート数、時間、年齢、参加条件の募集カードが並ぶ",
    name: "Heart Board",
    slug: "heart-board",
    tag: "交換グループを探す",
    url: "https://heart-board.yhay81.com",
  },
  {
    categories: "find plan share",
    description:
      "VRChat、cluster、Resoniteの未来イベントを、時間・端末・ジャンルで探して予定に入れる。",
    facts: ["登録不要", "カレンダー追加・共有"],
    image: "https://yoru-mado.yhay81.com/og.png",
    imageAlt: "よる窓の夜の時間割に、三つの仮想空間イベント窓が灯る画面",
    name: "よる窓",
    slug: "yoru-mado",
    tag: "今夜の会場を探す",
    url: "https://yoru-mado.yhay81.com",
  },
  {
    categories: "organize share",
    description: "ダブりとほしいものを二つの箱に並べ、相手のリストと重ねて交換候補を見つける。",
    facts: ["登録不要", "比較リストは端末内だけ"],
    image: "https://kasane-fuda.yhay81.com/og.png",
    imageAlt: "かさね札の赤と青の交換箱で、13と21のシールが重なって光る",
    name: "かさね札",
    slug: "kasane-fuda",
    tag: "交換候補を重ねる",
    url: "https://kasane-fuda.yhay81.com",
  },
  {
    categories: "create plan share",
    description: "写真から、迷子ペットの捜索ページ、QRポスター、匿名の目撃フォームをまとめて作る。",
    facts: ["登録不要", "目撃情報は作成者だけ"],
    image: "https://maigo-poster.yhay81.com/og.png",
    imageAlt: "まいごポスターで写真からQRポスターと目撃場所の入口がつながる",
    name: "まいごポスター",
    slug: "maigo-poster",
    tag: "迷子の捜索を始める",
    url: "https://maigo-poster.yhay81.com",
  },
  {
    categories: "create share",
    description: "原稿を限定共有し、読者の段落別リアクションと非公開の読後メモを作者だけへ集める。",
    facts: ["登録不要", "原稿・感想は一覧に出さない"],
    image: "https://yomiato.yhay81.com/og.png",
    imageAlt: "読み跡で原稿の段落から色の反応が作者の地図へつながる",
    name: "読み跡",
    slug: "yomiato",
    tag: "原稿の反応を見る",
    url: "https://yomiato.yhay81.com",
  },
] as const;

export function HomePage() {
  return (
    <Layout>
      <section class="shelf-shell" id="tools">
        <header class="shelf-heading">
          <p class="eyebrow">{tools.length} TOOLS</p>
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
            {tools.length}件
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

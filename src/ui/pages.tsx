import { product } from "../config/product";
import { Layout } from "./layout";

export const tools = [
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
  {
    categories: "create organize",
    description: "任意の課題文を共有し、入力の速さ、正確さ、つまずいた文字位置をグラフで見比べる。",
    facts: ["登録不要", "課題・結果は一覧に出さない"],
    image: "https://uchigraph.yhay81.com/og.png",
    imageAlt: "打ちグラフで課題文のつまずきが上達グラフへ変わる",
    name: "打ちグラフ",
    slug: "uchigraph",
    tag: "入力の跡を見る",
    url: "https://uchigraph.yhay81.com",
  },
  {
    categories: "find plan",
    description:
      "Steamの候補URLを2〜6本置き、現在価格、日本語レビュー、日本語対応、環境を横並びにする。",
    facts: ["登録不要", "候補履歴を保存しない"],
    image: "https://tsumi-erabi.yhay81.com/og.png",
    imageAlt: "つみえらびで三枚のゲーム候補から黄色く照らされた一枚を選ぶ",
    name: "つみえらび",
    slug: "tsumi-erabi",
    tag: "今夜の一本を選ぶ",
    url: "https://tsumi-erabi.yhay81.com",
  },
  {
    categories: "find plan",
    description: "ITパスポートの独自問題を12問解き、3領域・9テーマの苦手を地図にする。",
    facts: ["登録不要", "履歴は端末内だけ"],
    image: "https://ipass-map.yhay81.com/og.png",
    imageAlt: "ITパスポートの解答用紙が三色九マスの弱点マップへ変わる",
    name: "ITパスポート弱点マップ",
    slug: "ipass-map",
    tag: "苦手を見つける",
    url: "https://ipass-map.yhay81.com",
  },
  {
    categories: "create organize share",
    description:
      "公開キャラシのURLから能力値と技能を移し、見やすい探索者の札として保存・共有する。",
    facts: ["登録不要", "編集鍵つき共有"],
    image: "https://takufuda.yhay81.com/og.svg",
    imageAlt: "卓札の探索者カード、能力値レーダー、技能とセッション出力が並ぶ画面",
    name: "卓札",
    slug: "takufuda",
    tag: "探索者を移して共有",
    url: "https://takufuda.yhay81.com",
  },
  {
    categories: "plan organize share",
    description: "旅程、持ち物、費用を一枚のしおりにまとめ、閲覧URLと編集URLで同行者へ共有する。",
    facts: ["登録不要", "印刷・JSON・カレンダー"],
    image: "https://tabidan.yhay81.com/og.svg",
    imageAlt: "たび段の旅行日程、持ち物、費用をまとめた共有しおり",
    name: "たび段",
    slug: "tabidan",
    tag: "旅のしおりを作る",
    url: "https://tabidan.yhay81.com",
  },
  {
    categories: "create organize share",
    description: "自己紹介、活動リンク、確認事項、読んだ印を、一枚の公開カードにまとめる。",
    facts: ["登録不要", "閲覧URLと編集鍵を分離"],
    image: "https://yorishiru.yhay81.com/og.svg",
    imageAlt: "よりしるのプロフィールカードに自己紹介、活動リンク、確認事項が並ぶ画面",
    name: "よりしる",
    slug: "yorishiru",
    tag: "プロフィールを一枚へ",
    url: "https://yorishiru.yhay81.com",
  },
  {
    categories: "find organize",
    description:
      "MCPサーバーを用途で探し、外部接続・手元実行・秘密情報・コード確認先を並べて比べる。",
    facts: ["登録不要", "Registry公開データ同期"],
    image: "https://mcp-erabi.yhay81.com/og.svg",
    imageAlt: "MCPえらびの検索条件と二つのMCPサーバーの接続条件を並べた比較画面",
    name: "MCPえらび",
    slug: "mcp-erabi",
    tag: "MCPの接続条件を比較",
    url: "https://mcp-erabi.yhay81.com",
  },
  {
    categories: "organize",
    description: "タグを1行置き、今日と7日間の閲覧数、読まれたページ、流入元を一画面で見る。",
    facts: ["Cookie・広告なし", "個別ログを保存しない"],
    image: "https://tegotae.yhay81.com/og.svg",
    imageAlt: "手ごたえの今日と7日間のページビュー、折れ線グラフが並ぶアクセス解析画面",
    name: "手ごたえ",
    slug: "tegotae",
    tag: "サイトの反応を見る",
    url: "https://tegotae.yhay81.com",
  },
  {
    categories: "create organize share",
    description: "配信のおたよりを登録なしで集め、選んだ一通だけをOBSのブラウザソースへ映す。",
    facts: ["視聴者は登録不要", "受付・管理・OBS鍵を分離"],
    image: "https://otayori-maku.yhay81.com/og.svg",
    imageAlt: "おたより幕の受信トレイから選んだ一通がOBSの配信画面へ移る操作画面",
    name: "おたより幕",
    slug: "otayori-maku",
    tag: "おたよりを配信へ",
    url: "https://otayori-maku.yhay81.com",
  },
  {
    categories: "plan organize share",
    description: "スポーツの次の一予定について、出欠、車の空席、乗車希望人数を一枚に集める。",
    facts: ["登録不要", "個別回答は幹事だけ"],
    image: "https://noriai-hyo.yhay81.com/og.svg",
    imageAlt: "のりあい表の競技ボードと送迎の空席・希望人数が並ぶ画面",
    name: "のりあい表",
    slug: "noriai-hyo",
    tag: "出欠と送迎を一枚へ",
    url: "https://noriai-hyo.yhay81.com",
  },
  {
    categories: "organize share",
    description: "次の回覧一件を登録なしで共有し、読んだ世帯と行事の出欠を灯りで確かめる。",
    facts: ["登録不要", "個別回答は役員だけ"],
    image: "https://kairan-to.yhay81.com/og.svg",
    imageAlt: "中央の回覧を囲む家に読了の灯りが順に点き、残り世帯を示す回覧灯の画面",
    name: "回覧灯",
    slug: "kairan-to",
    tag: "回覧を灯りでひと回り",
    url: "https://kairan-to.yhay81.com",
  },
  {
    categories: "create organize",
    description:
      "Ameba Owndの公開トップページを読み解き、構成図と静的HTMLの下書きを端末へ持ち出す。",
    facts: ["登録不要", "入力URL・結果を保存しない"],
    image: "https://site-hodoki.yhay81.com/og.svg",
    imageAlt: "古いWebページから糸をほどき、持ち出せるページ設計へ並べ直すサイトほどきの画面",
    name: "サイトほどき",
    slug: "site-hodoki",
    tag: "サイトの骨組みを持ち出す",
    url: "https://site-hodoki.yhay81.com",
  },
  {
    categories: "create share",
    description:
      "個人サイトの一ページにリンクを一つ置き、四種類の定型拍手を受け取り、作者だけの集計で確かめる。",
    facts: ["登録不要", "読者名・自由文なし"],
    image: "https://pon-hakushu.yhay81.com/og.svg",
    imageAlt: "個人サイトのページから四つの拍手が飛び、作者だけの集計トレイへ届くぽん拍手",
    name: "ぽん拍手",
    slug: "pon-hakushu",
    tag: "そのページへ、ひとつ拍手",
    url: "https://pon-hakushu.yhay81.com",
  },
  {
    categories: "organize share",
    description:
      "題名を思い出せない本の記憶を時期、場所、装丁、場面の札に整理し、共有相手から確認できる候補を受け取る。",
    facts: ["登録不要", "公開一覧・画像投稿なし"],
    image: "https://ano-hon-fuda.yhay81.com/og.svg",
    imageAlt: "四枚の記憶札が虫眼鏡を通り、確認中と正解の候補が並ぶ本棚へつながるあの本札",
    name: "あの本札",
    slug: "ano-hon-fuda",
    tag: "思い出の断片を、あの一冊へ",
    url: "https://ano-hon-fuda.yhay81.com",
  },
  {
    categories: "find organize",
    description:
      "Xの公式アーカイブZIPを端末内だけで開き、過去の投稿を語句、日付、種類から探して書き出す。",
    facts: ["登録不要", "アーカイブを送信しない"],
    image: "https://post-gura.yhay81.com/og.svg",
    imageAlt: "封をしたアーカイブ箱から年別の引き出しを通り、検索結果の札が現れるポスト蔵",
    name: "ポスト蔵",
    slug: "post-gura",
    tag: "しまった投稿を、端末の中で探す",
    url: "https://post-gura.yhay81.com",
  },
  {
    categories: "find plan share",
    description:
      "未来の一開催について、日時・場所・レベル・参加費・FP/GK残枠からフットサルの助っ人を募る。",
    facts: ["登録・連絡先不要", "採用者だけに参加案内"],
    image: "https://suketto-court.yhay81.com/og.svg",
    imageAlt: "フットサルコートのFPとGK残枠へ二人の助っ人が入る助っ人コート",
    name: "助っ人コート",
    slug: "suketto-court",
    tag: "空いたポジションに入る",
    url: "https://suketto-court.yhay81.com",
  },
  {
    categories: "organize plan share",
    description:
      "小中規模TCG大会の受付、スイスドロー、卓番号、双方の結果確認、勝点とOMW%による順位を一つの開催札で進める。",
    facts: ["登録・連絡先不要", "両者一致で結果確定"],
    image: "https://round-fuda.yhay81.com/og.svg",
    imageAlt: "暗い大会卓の上に、三つの卓番号と対戦者が並ぶ紙の組合せ札を置いたラウンド札",
    name: "ラウンド札",
    slug: "round-fuda",
    tag: "卓番号から結果まで",
    url: "https://round-fuda.yhay81.com",
  },
  {
    categories: "create organize",
    description:
      "写真、番号、注意札を一つの作業台で組み、最大12手順をA4・PDFと編集用ファイルへ整える。写真と本文は端末外へ送らない。",
    facts: ["登録・アップロード不要", "写真・本文は端末内"],
    image: "https://tejun-dai.yhay81.com/og.svg",
    imageAlt: "濃紺の作業台に、写真枠と番号と注意札を並べたA4作業手順書を置いた手順台",
    name: "手順台",
    slug: "tejun-dai",
    tag: "写真を置いて、番号で渡す",
    url: "https://tejun-dai.yhay81.com",
  },
  {
    categories: "organize share",
    description: "合い鍵URLを渡した小さな団体だけで、投稿、返信、確認印、写真を30日共有する。",
    facts: ["参加者登録不要", "板・写真は30日で削除"],
    image: "https://aikagi-ban.yhay81.com/og.svg",
    imageAlt: "深緑の背景に合い鍵と、投稿・確認印・返信が並ぶコルクの連絡板を置いた合鍵板",
    name: "合鍵板",
    slug: "aikagi-ban",
    tag: "合い鍵を渡す、30日の板",
    url: "https://aikagi-ban.yhay81.com",
  },
  {
    categories: "organize create",
    description: "愛車の整備日、走行距離、費用、次回期限、写真を、端末内の車庫計器盤へ残す。",
    facts: ["登録・内容送信なし", "PDF・CSV・編集用保存"],
    image: "https://seibi-to.yhay81.com/og.svg",
    imageAlt: "暗い車庫の計器盤に、車、走行距離、次回整備の灯り、整備履歴を並べた整備灯",
    name: "整備灯",
    slug: "seibi-to",
    tag: "整備の履歴と、次の灯り",
    url: "https://seibi-to.yhay81.com",
  },
  {
    categories: "organize create",
    description: "釣行、魚種、サイズ、仕掛け、写真を、釣り場の位置を送らず端末内の水辺へ残す。",
    facts: ["登録・GPS要求なし", "位置なし共有札・編集用保存"],
    image: "https://choka-to.yhay81.com/og.svg",
    imageAlt: "朝焼けの水面と浮きのそばに、魚種、サイズ、仕掛けを記した釣果札を並べた釣果灯",
    name: "釣果灯",
    slug: "choka-to",
    tag: "釣り場を出さず、釣果を残す",
    url: "https://choka-to.yhay81.com",
  },
  {
    categories: "plan organize",
    description: "教材別タイマー、週の目安、12週間の積み重ねを、SNSや広告なしで端末内の机へ残す。",
    facts: ["登録・公開なし", "CSV・編集用保存"],
    image: "https://tsukue-no-hi.yhay81.com/og.svg",
    imageAlt: "夜の机にランプ、本、25分タイマー、学習の印をつけたノートを並べた机の灯",
    name: "机の灯",
    slug: "tsukue-no-hi",
    tag: "学んだ時間が、机に灯る",
    url: "https://tsukue-no-hi.yhay81.com",
  },
  {
    categories: "organize create",
    description: "読みたい本、読んでいる頁、読了日、私的な感想を、公開せず端末内の棚へ残す。",
    facts: ["登録・公開なし", "CSV・編集用保存"],
    image: "https://shiori-dana.yhay81.com/og.svg",
    imageAlt: "木の棚に本としおりが並び、開いた本に読んだ頁を残す栞棚",
    name: "栞棚",
    slug: "shiori-dana",
    tag: "読んだ頁を、棚に残す",
    url: "https://shiori-dana.yhay81.com",
  },
  {
    categories: "create organize",
    description: "手元のコード譜を貼り、移調、カポ、メトロノーム、自動スクロールで演奏する。",
    facts: ["登録・譜面送信なし", "曲順・印刷・編集用保存"],
    image: "https://chord-dai.yhay81.com/og.svg",
    imageAlt: "照明のついた譜面台にコード譜が開き、ギター、カポ、メトロノームが並ぶコード台",
    name: "コード台",
    slug: "chord-dai",
    tag: "手元の一曲を、弾ける譜面へ",
    url: "https://chord-dai.yhay81.com",
  },
  {
    categories: "plan organize",
    description:
      "ライブやイベントの申込、当落、入金、発券、費用、参加履歴、感想を端末内の一枚へまとめる。",
    facts: ["登録・公開なし", "ICS・編集用保存"],
    image: "https://genba-cho.yhay81.com/og.svg",
    imageAlt:
      "暗い会場の照明の下に、ライブチケット、リストバンド、抽選から終演までの予定が並ぶ現場帖",
    name: "現場帖",
    slug: "genba-cho",
    tag: "申し込みから余韻まで、一枚ずつ",
    url: "https://genba-cho.yhay81.com",
  },
  {
    categories: "share create",
    description: "作品、通販、SNS、配信、仕事の相談先を、画像や外部APIなしの一枚から案内する。",
    facts: ["登録・広告なし", "編集鍵・報告保護"],
    image: "https://iriguchi-cho.yhay81.com/og.svg",
    imageAlt:
      "制作机のプロフィールカードから、作品、通販、配信、連絡先の小さな入口へ線が伸びる入口帖",
    name: "入口帖",
    slug: "iriguchi-cho",
    tag: "活動の入口を、一枚に",
    url: "https://iriguchi-cho.yhay81.com",
  },
  {
    categories: "share organize",
    description:
      "仲間で日付を予約し、記事ができたら外部リンクを結ぶ。空き・予約・公開が見渡せる記事リレー暦。",
    facts: ["登録・広告なし", "参加鍵・枠編集鍵"],
    image: "https://relay-goyomi.yhay81.com/og.png",
    imageAlt:
      "和紙の日付札を木苺色のリボンが順につなぎ、空き、予約、公開の記事リレーを示すリレー暦",
    name: "リレー暦",
    slug: "relay-goyomi",
    tag: "一日ずつ、次の書き手へ",
    url: "https://relay-goyomi.yhay81.com",
  },
  {
    categories: "find share",
    description:
      "ゲーム名だけでなく、機種、活動時間、VC、遊び方、初心者歓迎から、公開中の仲間募集を探す。",
    facts: ["登録・広告なし", "編集鍵・報告保護"],
    image: "https://nakama-fuda.yhay81.com/og.png",
    imageAlt: "21時の活動時計と遊び方の条件札を囲み、三つの着席と一つの空席を示す仲間札の募集卓",
    name: "仲間札",
    slug: "nakama-fuda",
    tag: "遊び方の合う席へ",
    url: "https://nakama-fuda.yhay81.com",
  },
] as const;

export function HomePage() {
  const canonicalUrl = `${product.url}/`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: tools.map((tool, index) => ({
      "@type": "ListItem",
      item: {
        "@type": "WebApplication",
        applicationCategory: product.applicationCategory,
        description: tool.description,
        image: tool.image,
        isAccessibleForFree: true,
        name: tool.name,
        operatingSystem: "Any",
        url: `${product.url}/tools/${tool.slug}`,
      },
      position: index + 1,
    })),
    name: `${product.name}の日本語Webツール一覧`,
    numberOfItems: tools.length,
    url: canonicalUrl,
  };

  return (
    <Layout canonicalUrl={canonicalUrl} jsonLd={jsonLd}>
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

export type Tool = (typeof tools)[number];

function relatedTools(tool: Tool) {
  const categories = new Set(tool.categories.split(" "));
  return tools
    .filter((candidate) => candidate.slug !== tool.slug)
    .map((candidate) => ({
      candidate,
      overlap: candidate.categories.split(" ").filter((category) => categories.has(category))
        .length,
    }))
    .filter(({ overlap }) => overlap > 0)
    .sort((left, right) => right.overlap - left.overlap)
    .slice(0, 3)
    .map(({ candidate }) => candidate);
}

export function ToolPage({ tool }: { tool: Tool }) {
  const canonicalUrl = `${product.url}/tools/${tool.slug}`;
  const title = `${tool.tag} | ${tool.name} | ${product.name}`;
  const recommendations = relatedTools(tool);
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      applicationCategory: product.applicationCategory,
      description: tool.description,
      image: tool.image,
      isAccessibleForFree: true,
      name: tool.name,
      operatingSystem: "Any",
      potentialAction: {
        "@type": "UseAction",
        target: tool.url,
      },
      url: tool.url,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          item: `${product.url}/`,
          name: product.name,
          position: 1,
        },
        {
          "@type": "ListItem",
          item: canonicalUrl,
          name: tool.name,
          position: 2,
        },
      ],
    },
  ];

  return (
    <Layout
      canonicalUrl={canonicalUrl}
      description={tool.description}
      imageAlt={tool.imageAlt}
      imageUrl={tool.image}
      jsonLd={jsonLd}
      title={title}
    >
      <article class="detail-shell">
        <a class="back-link" href="/#tools">
          <span aria-hidden="true">←</span> 道具棚へ
        </a>
        <div class="detail-stage">
          <figure class="detail-preview">
            <img alt={tool.imageAlt} height="630" src={tool.image} width="1200" />
            <figcaption>{tool.tag}</figcaption>
          </figure>
          <section class="detail-panel">
            <p class="eyebrow">WEB TOOL</p>
            <h1>{tool.name}</h1>
            <p class="detail-description">{tool.description}</p>
            <ul aria-label="特徴" class="detail-facts">
              {tool.facts.map((fact) => (
                <li>
                  <span aria-hidden="true">✓</span>
                  {fact}
                </li>
              ))}
            </ul>
            <a class="launch-link" data-tool={tool.slug} href={tool.url}>
              <span>{tool.tag}</span>
              <span aria-hidden="true">↗</span>
            </a>
          </section>
        </div>

        <section class="related-tools" aria-labelledby="related-heading">
          <header>
            <p class="eyebrow">NEXT TO IT</p>
            <h2 id="related-heading">近くの道具</h2>
          </header>
          <div>
            {recommendations.map((candidate) => (
              <a data-tool={candidate.slug} href={candidate.url}>
                <img alt="" height="96" loading="lazy" src={candidate.image} width="160" />
                <span>
                  <strong>{candidate.name}</strong>
                  <small>{candidate.tag}</small>
                </span>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </section>
      </article>
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

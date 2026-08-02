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
  {
    categories: "find plan",
    description:
      "学芸員・文化財・ミュージアム求人を、地域、館種、雇用、資格、専門業務、締切から探す。",
    facts: ["登録・広告なし", "編集鍵・報告保護"],
    image: "https://kan-shigoto.yhay81.com/og.png",
    imageAlt: "博物館の展示壁に地域、専門、締切の求人札が並び、深緑の扉が次の展示室へ開く館しごと",
    name: "館しごと",
    slug: "kan-shigoto",
    tag: "締切から、次の展示室へ。",
    url: "https://kan-shigoto.yhay81.com",
  },
  {
    categories: "find plan",
    description:
      "マルシェ、ハンドメイド、フリマ、キッチンカー等の出店募集を、地域、内容、会場、料金、選考、締切から探す。",
    facts: ["登録・広告なし", "編集鍵・報告保護"],
    image: "https://shutten-fuda.yhay81.com/og.png",
    imageAlt:
      "あたたかな市場広場に締切札の付いた出店テントが並び、応募要項への門まで道筋が続く出店札",
    name: "出店札",
    slug: "shutten-fuda",
    tag: "次の売り場を、締切から。",
    url: "https://shutten-fuda.yhay81.com",
  },
  {
    categories: "find plan",
    description: "東京都心の授乳室・おむつ交換スペースを、駅、館内位置、設備、公式確認日から探す。",
    facts: ["登録・広告なし", "現在地・住所不要"],
    image: "https://oyako-madori.yhay81.com/og.png",
    imageAlt:
      "ベビーカーで通れる間取りに授乳室、おむつ交換台、手洗い、調乳用お湯と確認日が描かれたおやこ間取り",
    name: "おやこ間取り",
    slug: "oyako-madori",
    tag: "授乳も、おむつ替えも、行く前に。",
    url: "https://oyako-madori.yhay81.com",
  },
  {
    categories: "create share",
    description: "カード画像なしで、自分のデッキ表と回し方を公開・保全し、三種類の反応を受け取る。",
    facts: ["登録・広告なし", "管理鍵で編集・削除"],
    image: "https://deck-watashi.yhay81.com/og.png",
    imageAlt: "三つのデッキ束と回し方の紙が真鍮の受け渡しレールで保管棚につながるデッキ渡し",
    name: "デッキ渡し",
    slug: "deck-watashi",
    tag: "レシピを、次の卓へ。",
    url: "https://deck-watashi.yhay81.com",
  },
  {
    categories: "create find",
    description:
      "実際に使う日本語文を、自己配信する6つのOFL書体で並べ、用途と公式ライセンスを確認する。",
    facts: ["入力文を送信しない", "6書体・OFL原文付き"],
    image: "https://ji-kurabe.yhay81.com/og.png",
    imageAlt:
      "組版机の六つの見本札を入力棒から通し、比較トレーとライセンス引き出しで確かめる字くらべ",
    name: "字くらべ",
    slug: "ji-kurabe",
    tag: "つくる文で、見くらべる。",
    url: "https://ji-kurabe.yhay81.com",
  },
  {
    categories: "create organize",
    description:
      "Excel数式を端末内だけでほどき、関数の入れ子、引数、セル参照、確認候補を見える形にする。",
    facts: ["数式・ブックを送信しない", "10関数・7エラーの公式札"],
    image: "https://sushiki-hodoki.yhay81.com/og.png",
    imageAlt:
      "紙テープの数式が解析機を通り、入れ子トレー、セル参照地図、確認札へ分かれる数式ほどき",
    name: "数式ほどき",
    slug: "sushiki-hodoki",
    tag: "数式を、見える手順に。",
    url: "https://sushiki-hodoki.yhay81.com",
  },
  {
    categories: "play organize",
    description:
      "一日リーグをチーム名だけで受付し、全試合の日程、双方確認した得点、順位を一つの会場盤で進める。",
    facts: ["選手名・連絡先を集めない", "双方一致で得点確定"],
    image: "https://shiai-ban.yhay81.com/og.svg",
    imageAlt: "緑のピッチ、次の二試合、得点盤、順位表が一つの会場盤につながる試合盤",
    name: "試合盤",
    slug: "shiai-ban",
    tag: "次の笛まで、ひと目で。",
    url: "https://shiai-ban.yhay81.com",
  },
  {
    categories: "create organize",
    description:
      "制作物で使う音源の配布元、確認日、利用条件、クレジットを案件ごとに端末内で整理・書き出す。",
    facts: ["入力内容を送信しない", "クレジット・CSV・JSON出力"],
    image: "https://ongen-hikae.yhay81.com/og.png",
    imageAlt: "案件、音源、利用条件、クレジットの四つの機器が色分けしたケーブルでつながる音源控え",
    name: "音源控え",
    slug: "ongen-hikae",
    tag: "使った音に、根拠を添える。",
    url: "https://ongen-hikae.yhay81.com",
  },
  {
    categories: "create organize",
    description:
      "小さなイベントの参加・興味あり・不参加を名前と人数だけで受け付け、定員と名簿をまとめる。",
    facts: ["登録・連絡先なし", "定員超過は自動で待機"],
    image: "https://atsumari-guchi.yhay81.com/og.svg",
    imageAlt: "定員表示、色分けした参加札、会場入口、当日の名簿が一つの受付動線につながる集まり口",
    name: "集まり口",
    slug: "atsumari-guchi",
    tag: "参加まで、迷わせない。",
    url: "https://atsumari-guchi.yhay81.com",
  },
  {
    categories: "plan organize share",
    description:
      "Google Playのクローズドテスト参加と、テスターごとの14日間の自己申告、気づきを一枚で進める。",
    facts: ["メール・登録なし", "12人・14日の進行灯"],
    image: "https://shisou-to.yhay81.com/og.svg",
    imageAlt: "12台の端末ラックと14個の進行灯でクローズドテストの現在地を示す試走灯",
    name: "試走灯",
    slug: "shisou-to",
    tag: "12台の端末。14日の試走。",
    url: "https://shisou-to.yhay81.com",
  },
  {
    categories: "play organize share",
    description: "協力ライブの5桁、残り席、固定条件を12分だけ公開し、集まったら消す短期募集盤。",
    facts: ["名前・連絡先・チャットなし", "12分で自動消灯"],
    image: "https://heya-to.yhay81.com/og.svg",
    imageAlt: "5桁のルーム番号、5席、12分の時間レールで短期募集を示す部屋灯",
    name: "部屋灯",
    slug: "heya-to",
    tag: "5桁を置く。5人が灯る。",
    url: "https://heya-to.yhay81.com",
  },
  {
    categories: "play organize share",
    description:
      "9桁のトレーナーIDと、継ぎたい因子・サポート条件だけを7日間公開して探せる非公式の募集札。",
    facts: ["連絡先・ゲーム連携なし", "距離・脚質・因子で検索"],
    image: "https://inshi-fuda.yhay81.com/og.svg",
    imageAlt: "9桁のトレーナーIDと青・赤・固有・白の因子ノードがつながる因子札",
    name: "因子札",
    slug: "inshi-fuda",
    tag: "9桁と、継ぎたい因子だけ。",
    url: "https://inshi-fuda.yhay81.com",
  },
  {
    categories: "organize share",
    description:
      "ライブと小さなイベントの取り置き予約を一つのURLに集め、出演者別の集計と当日受付名簿へつなぐ。",
    facts: ["予約者アカウント・決済なし", "代理登録・来場チェック・CSV"],
    image: "https://uketsuke-fuda.yhay81.com/og.svg",
    imageAlt: "取り置き半券が、予約名と枚数を並べた当日受付名簿へつながる受付札",
    name: "受付札",
    slug: "uketsuke-fuda",
    tag: "予約は一枚、当日は名簿。",
    url: "https://uketsuke-fuda.yhay81.com",
  },
  {
    categories: "find organize",
    description: "日本語・英語を広告なしですぐ引き、見つけた語をこの端末だけの単語札へ残す。",
    facts: ["21万語超・語形／読み／英語全文検索", "検索語を保存しない・登録なし"],
    image: "https://shunji.yhay81.com/og.svg",
    imageAlt: "開いた辞書から余白の辞書カードが現れ、単語札が重なる瞬辞",
    name: "瞬辞",
    slug: "shunji",
    tag: "打つ。ひらく。残す。",
    url: "https://shunji.yhay81.com",
  },
  {
    categories: "find organize",
    description:
      "裁判所が公開する2025年以降の裁判例1,457件を、事件番号・事件名・裁判所・分類から探して公式原文へ進む。",
    facts: ["1,457件・2025年以降", "端末内の調べる棚・登録なし"],
    image: "https://hanrei-dana.yhay81.com/og.svg",
    imageAlt: "判例の記録札と原文札が濃緑の書類棚に収まる判例棚",
    name: "判例棚",
    slug: "hanrei-dana",
    tag: "事件番号から、原文へ。",
    url: "https://hanrei-dana.yhay81.com",
  },
  {
    categories: "find organize",
    description:
      "全国12万超の郵便番号を、番号・漢字住所・カナのどちらからでも引き、宛名書き用にコピーする。",
    facts: ["120,682郵便番号・47都道府県", "検索語を保存しない・登録なし"],
    image: "https://yubin-hiki.yhay81.com/og.svg",
    imageAlt: "赤い郵便番号枠と切手のある封筒から、郵便番号と住所の宛名票が現れる郵便引き",
    name: "郵便引き",
    slug: "yubin-hiki",
    tag: "番号と住所を、どちらからでも。",
    url: "https://yubin-hiki.yhay81.com",
  },
  {
    categories: "find organize",
    description:
      "国会会議録をことば・発言者・院・期間から探し、短い該当箇所と出典をふせんのように残す。",
    facts: ["1947年以降・国会会議録", "最大320文字の発言札・登録なし"],
    image: "https://giji-hiroi.yhay81.com/og.svg",
    imageAlt: "半円形の議場と演壇の前に、発言の短い記録札が並ぶ議事ひろい",
    name: "議事ひろい",
    slug: "giji-hiroi",
    tag: "ことばから、発言へ。",
    url: "https://giji-hiroi.yhay81.com",
  },
  {
    categories: "find organize",
    description:
      "e-Govの現行法令を法令名・略称・読み・本文のことばから探し、改正情報と公式原文へ進む。",
    facts: ["現行約9千法令・公式API", "本文の該当箇所・登録なし"],
    image: "https://hourei-hiki.yhay81.com/og.svg",
    imageAlt: "法令の本棚と開いた原文に、現行の索引札が差し込まれた法令引き",
    name: "法令引き",
    slug: "hourei-hiki",
    tag: "名前でも、条文のことばでも。",
    url: "https://hourei-hiki.yhay81.com",
  },
  {
    categories: "find organize",
    description:
      "タイトル・著者・ISBNから国立国会図書館の完成書誌を探し、版を見分けて公式記録と引用用の書誌情報へ進む。",
    facts: ["国立国会図書館作成書誌・図書", "書誌コピー・端末内カード箱"],
    image: "https://shoshi-hiki.yhay81.com/og.svg",
    imageAlt: "本の背表紙と木製カード目録から、書誌カードが引き出される書誌引き",
    name: "書誌引き",
    slug: "shoshi-hiki",
    tag: "本を、確かな一枚へ。",
    url: "https://shoshi-hiki.yhay81.com",
  },
  {
    categories: "plan organize",
    description:
      "内閣府の2026年・2027年の祝日と週末を見ながら、1〜5日の休暇でつくれる連休候補を比べて予定へ持ち出す。",
    facts: ["内閣府公式祝日・2026／2027年", "休暇は端末内保存・ICS出力"],
    image: "https://yasumi-kumi.yhay81.com/og.svg",
    imageAlt: "年次テープ、祝日入りカレンダー、休暇札をつないで連休を組む休み組み",
    name: "休み組み",
    slug: "yasumi-kumi",
    tag: "休む日を置く。連休がつながる。",
    url: "https://yasumi-kumi.yhay81.com",
  },
  {
    categories: "find organize",
    description:
      "文部科学省の2,538食品から14成分を探し、100g値と実際の量を最大4食品まで同じ台で比べる。",
    facts: ["文部科学省公式成分表・2,538食品", "検索語は送信しない・比較は端末内"],
    image: "https://seibun-narabe.yhay81.com/og.svg",
    imageAlt: "食品を秤のトレイへ置き、栄養成分の棒を同じ目盛りで比べる成分ならべ",
    name: "成分ならべ",
    slug: "seibun-narabe",
    tag: "食品を置く。成分の違いが見える。",
    url: "https://seibun-narabe.yhay81.com",
  },
  {
    categories: "find organize",
    description:
      "内閣府の行政入力情報から、都道府県と20の活動分野、法人名、目的、市区町村でNPO法人を探して公式記録へ進む。",
    facts: ["内閣府行政入力情報・49,062法人", "都道府県別読込・検索語は送信しない"],
    image: "https://machi-npo.yhay81.com/og.svg",
    imageAlt: "日本地図のピンと活動分野別の法人カード箱から探すまちのNPO",
    name: "まちのNPO",
    slug: "machi-npo",
    tag: "地域から、活動する法人を見つける。",
    url: "https://machi-npo.yhay81.com",
  },
  {
    categories: "find plan",
    description:
      "国土地理院の全国データから、指定緊急避難場所と指定避難所を分け、地域・災害種別・現在地で探す。",
    facts: ["国土地理院公式データ・198,595件", "現在地は送信・保存しない"],
    image: "https://hinan-saki.yhay81.com/og.svg",
    imageAlt: "道路と現在地の印、指定緊急避難場所と指定避難所の二つの案内標識が並ぶ避難先さがし",
    name: "避難先さがし",
    slug: "hinan-saki",
    tag: "目的を選ぶ。近い避難先が見える。",
    url: "https://hinan-saki.yhay81.com",
  },
  {
    categories: "find organize",
    description:
      "Crossrefの公開メタデータから、テーマ・題名・著者・発表年で論文を探し、DOIと引用用の書誌へ進む。",
    facts: ["Crossref公開メタデータ・論文検索", "抄録は収録しない・検索条件は保存しない"],
    image: "https://ronbun-hiki.yhay81.com/og.svg",
    imageAlt: "雑誌の背表紙と論文用紙、DOIの印、引用票を並べた論文引き",
    name: "論文引き",
    slug: "ronbun-hiki",
    tag: "題名から、読むべき一本へ。",
    url: "https://ronbun-hiki.yhay81.com",
  },
  {
    categories: "find organize",
    description:
      "文部科学省の学校コード60,285件を、都道府県、学校種、設置区分、学校名、所在地から探し、複数校まとめてコピーする。",
    facts: ["文部科学省公式一覧・60,285校", "現役・廃止・移行先コードを分離"],
    image: "https://gakko-code.yhay81.com/og.svg",
    imageAlt: "学校種の異なる校舎と13桁の学校コード札を並べた学校コード引き",
    name: "学校コード引き",
    slug: "gakko-code",
    tag: "学校を選ぶ。コード札がそろう。",
    url: "https://gakko-code.yhay81.com",
  },
  {
    categories: "find organize",
    description:
      "日本標準産業分類2,128コードを、事業内容・分類名・コードから探し、大・中・小・細分類の道筋を確かめてまとめてコピーする。",
    facts: ["e-Stat公式分類・2,128コード", "大・中・小・細分類を一続きで表示"],
    image: "https://sangyo-code.yhay81.com/og.svg",
    imageAlt: "農地、工場、店舗、通信塔、医療施設から細分類コードへつながる産業の街",
    name: "産業分類引き",
    slug: "sangyo-code",
    tag: "仕事をたどる。分類コードが決まる。",
    url: "https://sangyo-code.yhay81.com",
  },
  {
    categories: "find organize",
    description:
      "総務省の全国地方公共団体コード1,965件を、自治体名・カナ・5桁・6桁コードから探し、都道府県と団体種別で絞ってまとめてコピーする。",
    facts: ["総務省公式一覧・1,965コード", "5桁本体と末尾の検査数字を分離"],
    image: "https://jichitai-code.yhay81.com/og.svg",
    imageAlt: "日本の地域ブロックと、5桁本体・検査数字を分けた6桁の自治体コード札",
    name: "自治体コード引き",
    slug: "jichitai-code",
    tag: "地域を選ぶ。6桁がそろう。",
    url: "https://jichitai-code.yhay81.com",
  },
  {
    categories: "find compare",
    description:
      "日本標準職業分類415コードを、仕事内容・分類名・コードから探し、大・中・小分類の道筋と公式説明を最大4候補で比べる。",
    facts: ["e-Stat公式分類・415コード", "説明と三段階を4候補まで比較"],
    image: "https://shokugyo-code.yhay81.com/og.svg",
    imageAlt:
      "研究・事務・生産・輸送の働く人と、B・05・051の三段階の職業分類票を並べた職業分類引き",
    name: "職業分類引き",
    slug: "shokugyo-code",
    tag: "することを探す。3桁へたどる。",
    url: "https://shokugyo-code.yhay81.com",
  },
  {
    categories: "find compare",
    description:
      "2026年地価公示25,565標準地を、都道府県・住所・駅・用途から探し、1㎡価格、前年比、土地の条件を最大4地点で比べる。",
    facts: ["国土交通省公式データ・25,565地点", "2026年1月1日時点・4地点まで比較"],
    image: "https://chika-kohji.yhay81.com/og.svg",
    imageAlt: "道路で区切られた住宅地と商業地、駅、1平方メートル価格の比較札を並べた地価公示くらべ",
    name: "地価公示くらべ",
    slug: "chika-kohji",
    tag: "場所を選ぶ。価格の根拠を並べる。",
    url: "https://chika-kohji.yhay81.com",
  },
  {
    categories: "find compare",
    description:
      "国土交通省の2024年度駅別乗降客数7,739公表単位を、駅名・事業者・路線から探し、2011〜2024年度の推移を最大4件で比べる。",
    facts: ["国土交通省公式データ・7,739公表単位", "2011〜2024年度・4件まで比較"],
    image: "https://eki-joko.yhay81.com/og.svg",
    imageAlt: "駅のホーム、列車、改札と、14年分の乗降客数を並べた駅乗降くらべ",
    name: "駅乗降くらべ",
    slug: "eki-joko",
    tag: "駅を探す。14年を同じホームで比べる。",
    url: "https://eki-joko.yhay81.com",
  },
  {
    categories: "find organize",
    description:
      "国土交通省の全国1,231道の駅を、駅名・所在地・都道府県・登録年代から探し、気になる最大6駅を旅の停車札へまとめる。",
    facts: ["国土交通省公式一覧・1,231駅", "2025年12月19日現在・停車札6駅"],
    image: "https://michi-no-eki.yhay81.com/og.svg",
    imageAlt:
      "山あいの車道に道の駅標識と北海道・岐阜・長野の案内板、旅の停車札を並べた道の駅さがし",
    name: "道の駅さがし",
    slug: "michi-no-eki",
    tag: "行き先を探す。旅の停車札を並べる。",
    url: "https://michi-no-eki.yhay81.com",
  },
  {
    categories: "find compare",
    description:
      "環境省の日本の35国立公園を、公園名・関係都道府県から探し、陸域面積と5つの地種区分を最大4公園で比べる。",
    facts: ["環境省公式表・35国立公園", "2026年4月10日現在・5区分を4公園比較"],
    image: "https://kokuritsu-koen.yhay81.com/og.svg",
    imageAlt: "山の地層と、特別保護地区から普通地域まで5つの地種区分帯を並べた国立公園くらべ",
    name: "国立公園くらべ",
    slug: "kokuritsu-koen",
    tag: "公園を選ぶ。守られ方を重ねる。",
    url: "https://kokuritsu-koen.yhay81.com",
  },
  {
    categories: "find compare",
    description:
      "厚生労働省の2025年度地域別最低賃金を、都道府県名・地域から探し、時間額、上げ幅、発効日と月間時間の参考額を最大4地域で比べる。",
    facts: ["厚生労働省公式表・47都道府県", "2025年度版・時間額と発効日を4地域比較"],
    image: "https://saitei-chingin.yhay81.com/og.svg",
    imageAlt: "時計、タイムカード、時給目盛りを並べた最低賃金くらべ",
    name: "最低賃金くらべ",
    slug: "saitei-chingin",
    tag: "地域を選ぶ。時給と発効日を並べる。",
    url: "https://saitei-chingin.yhay81.com",
  },
  {
    categories: "find compare",
    description:
      "厚生労働省の2025年度平均求人賃金を、全国・47労働局、19産業、雇用区分、受理地・就業地から探し、最大4地域で比べる。",
    facts: ["厚生労働省公式統計・912組", "2024・2025年度、4表を地域比較"],
    image: "https://kyujin-chingin.yhay81.com/og.svg",
    imageAlt: "求人掲示板、産業タブ、2024年と2025年の賃金目盛りを並べた求人賃金くらべ",
    name: "求人賃金くらべ",
    slug: "kyujin-chingin",
    tag: "地域と産業を選ぶ。求人票の平均を比べる。",
    url: "https://kyujin-chingin.yhay81.com",
  },
  {
    categories: "find compare",
    description:
      "厚生労働省の職業安定業務統計から、完全週休二日制、賞与、通勤手当の割合を19産業・2020〜2025年度で探し、最大4産業で比べる。",
    facts: ["厚生労働省公式統計・3表19産業", "2020〜2025年度・3条件を個別比較"],
    image: "https://kyujin-joken.yhay81.com/og.svg",
    imageAlt: "求人掲示板に週休二日制・賞与・通勤手当の3枚の確認票を並べた求人条件くらべ",
    name: "求人条件くらべ",
    slug: "kyujin-joken",
    tag: "産業を選ぶ。条件の割合を並べる。",
    url: "https://kyujin-joken.yhay81.com",
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

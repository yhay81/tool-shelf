import { beforeEach, describe, expect, it, vi } from "vitest";

import { app, type Bindings } from "../src/worker";

const bind = vi.fn(() => ({}) as D1PreparedStatement);
const prepare = vi.fn(() => ({ bind }) as unknown as D1PreparedStatement);
const batch = vi.fn(() => Promise.resolve([]));
const bindings = {
  ASSETS: {
    fetch: () => Promise.resolve(new Response("not used")),
  },
  DB: {
    batch,
    prepare,
  },
} as unknown as Bindings;

const eventPayload = {
  name: "opened",
  sessionId: "7c0dbe70-8c47-4fc0-aa62-52427133c612",
  tool: "date-quilt",
};

describe("worker", () => {
  beforeEach(() => {
    bind.mockClear();
    prepare.mockClear();
    batch.mockClear();
  });

  it("renders the actual Japanese tool shelf", async () => {
    const response = await app.request("/", undefined, bindings);
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(response.headers.get("cache-control")).toBe("no-store");
    expect(response.headers.get("content-security-policy")).toContain("default-src 'self'");
    expect(html).toContain('lang="ja"');
    expect(html).toContain('itemtype="https://schema.org/WebApplication"');
    expect(html).toContain('id="tool-search"');
    expect(html).toContain('id="tool-grid"');
    expect(html).toContain('id="handpicked-title"');
    expect(html).toContain('data-shelf-pick="album-relay"');
    expect(html).toContain('data-shelf-pick="chiiki-shushoku"');
    expect(html.match(/data-shelf-pick=/g)).toHaveLength(11);
    expect(html).toContain('data-tool="album-relay"');
    expect(html).toContain('data-tool="date-quilt"');
    expect(html).toContain('data-tool="mimi-deck"');
    expect(html).toContain('data-tool="fedi-route"');
    expect(html).toContain('data-tool="peta-sheet"');
    expect(html).toContain('data-tool="kuru-list"');
    expect(html).toContain('data-tool="kata-prompt"');
    expect(html).toContain('data-tool="hataraku-tile"');
    expect(html).toContain('data-tool="algo-lane"');
    expect(html).toContain('data-tool="mingle-frame"');
    expect(html).toContain('data-tool="sky-dial"');
    expect(html).toContain('data-tool="tango-orbit"');
    expect(html).toContain('data-tool="ava-rack"');
    expect(html).toContain('data-tool="chair-call"');
    expect(html).toContain('data-tool="dice-seat"');
    expect(html).toContain('data-tool="yose-bloom"');
    expect(html).toContain('data-tool="heart-board"');
    expect(html).toContain('data-tool="yoru-mado"');
    expect(html).toContain('data-tool="kasane-fuda"');
    expect(html).toContain('data-tool="maigo-poster"');
    expect(html).toContain('data-tool="yomiato"');
    expect(html).toContain('data-tool="uchigraph"');
    expect(html).toContain('data-tool="tsumi-erabi"');
    expect(html).toContain('data-tool="ipass-map"');
    expect(html).toContain('data-tool="takufuda"');
    expect(html).toContain('data-tool="tabidan"');
    expect(html).toContain('data-tool="yorishiru"');
    expect(html).toContain('data-tool="mcp-erabi"');
    expect(html).toContain('data-tool="tegotae"');
    expect(html).toContain('data-tool="otayori-maku"');
    expect(html).toContain('data-tool="noriai-hyo"');
    expect(html).toContain('data-tool="kairan-to"');
    expect(html).toContain('data-tool="site-hodoki"');
    expect(html).toContain('data-tool="pon-hakushu"');
    expect(html).toContain('data-tool="ano-hon-fuda"');
    expect(html).toContain('data-tool="post-gura"');
    expect(html).toContain('data-tool="suketto-court"');
    expect(html).toContain('data-tool="round-fuda"');
    expect(html).toContain('data-tool="tejun-dai"');
    expect(html).toContain('data-tool="aikagi-ban"');
    expect(html).toContain('data-tool="seibi-to"');
    expect(html).toContain('data-tool="choka-to"');
    expect(html).toContain('data-tool="tsukue-no-hi"');
    expect(html).toContain('data-tool="shiori-dana"');
    expect(html).toContain('data-tool="chord-dai"');
    expect(html).toContain('data-tool="genba-cho"');
    expect(html).toContain('data-tool="iriguchi-cho"');
    expect(html).toContain('data-tool="relay-goyomi"');
    expect(html).toContain('data-tool="nakama-fuda"');
    expect(html).toContain('data-tool="kan-shigoto"');
    expect(html).toContain('data-tool="shutten-fuda"');
    expect(html).toContain('data-tool="oyako-madori"');
    expect(html).toContain('data-tool="deck-watashi"');
    expect(html).toContain('data-tool="ji-kurabe"');
    expect(html).toContain('data-tool="sushiki-hodoki"');
    expect(html).toContain('data-tool="shiai-ban"');
    expect(html).toContain('data-tool="ongen-hikae"');
    expect(html).toContain('data-tool="atsumari-guchi"');
    expect(html).toContain('data-tool="shisou-to"');
    expect(html).toContain('data-tool="heya-to"');
    expect(html).toContain('data-tool="inshi-fuda"');
    expect(html).toContain('data-tool="uketsuke-fuda"');
    expect(html).toContain('data-tool="shunji"');
    expect(html).toContain('data-tool="hanrei-dana"');
    expect(html).toContain('data-tool="yubin-hiki"');
    expect(html).toContain('data-tool="giji-hiroi"');
    expect(html).toContain('data-tool="hourei-hiki"');
    expect(html).toContain('data-tool="shoshi-hiki"');
    expect(html).toContain('data-tool="yasumi-kumi"');
    expect(html).toContain('data-tool="seibun-narabe"');
    expect(html).toContain('data-tool="machi-npo"');
    expect(html).toContain('data-tool="hinan-saki"');
    expect(html).toContain('data-tool="ronbun-hiki"');
    expect(html).toContain('data-tool="gakko-code"');
    expect(html).toContain('data-tool="sangyo-code"');
    expect(html).toContain('data-tool="jichitai-code"');
    expect(html).toContain('data-tool="shokugyo-code"');
    expect(html).toContain('data-tool="chika-kohji"');
    expect(html).toContain('data-tool="eki-joko"');
    expect(html).toContain('data-tool="michi-no-eki"');
    expect(html).toContain('data-tool="kokuritsu-koen"');
    expect(html).toContain('data-tool="saitei-chingin"');
    expect(html).toContain('data-tool="kyujin-chingin"');
    expect(html).toContain('data-tool="kyujin-joken"');
    expect(html).toContain('data-tool="seishain-kyujin"');
    expect(html).toContain('data-tool="kyushoku-nenrei"');
    expect(html).toContain('data-tool="shokugyo-chingin"');
    expect(html).toContain('data-tool="shokugyo-bairitsu"');
    expect(html).toContain('data-tool="shokugyo-joken"');
    expect(html).toContain('data-tool="shokugyo-shushoku"');
    expect(html).toContain('data-tool="kibo-joken"');
    expect(html).toContain('data-tool="shinki-bairitsu"');
    expect(html).toContain('data-tool="shokugyo-jusoku"');
    expect(html).toContain('data-tool="sangyo-joken"');
    expect(html).toContain('data-tool="chiiki-bairitsu"');
    expect(html).toContain('data-tool="chiiki-shinki-bairitsu"');
    expect(html).toContain('data-tool="chiiki-shushoku"');
    expect(html).toContain("100 TOOLS");
    expect(html).toContain("100件");
    expect(html).toContain("Profile Palette");
    expect(html).toContain("Mingle Frame");
    expect(html).toContain("Sky Dial");
    expect(html).toContain("Tango Orbit");
    expect(html).toContain("Ava Rack");
    expect(html).toContain("Chair Call");
    expect(html).toContain("Dice Seat");
    expect(html).toContain("Yose Bloom");
    expect(html).toContain("Heart Board");
    expect(html).toContain("よる窓");
    expect(html).toContain("かさね札");
    expect(html).toContain("まいごポスター");
    expect(html).toContain("読み跡");
    expect(html).toContain("打ちグラフ");
    expect(html).toContain("つみえらび");
    expect(html).toContain("ITパスポート弱点マップ");
    expect(html).toContain("たび段");
    expect(html).toContain("よりしる");
    expect(html).toContain("MCPえらび");
    expect(html).toContain("手ごたえ");
    expect(html).toContain("おたより幕");
    expect(html).toContain("のりあい表");
    expect(html).toContain("回覧灯");
    expect(html).toContain("サイトほどき");
    expect(html).toContain("ぽん拍手");
    expect(html).toContain("あの本札");
    expect(html).toContain("ポスト蔵");
    expect(html).toContain("助っ人コート");
    expect(html).toContain("ラウンド札");
    expect(html).toContain("手順台");
    expect(html).toContain("合鍵板");
    expect(html).toContain("整備灯");
    expect(html).toContain("釣果灯");
    expect(html).toContain("机の灯");
    expect(html).toContain("栞棚");
    expect(html).toContain("コード台");
    expect(html).toContain("現場帖");
    expect(html).toContain("入口帖");
    expect(html).toContain("リレー暦");
    expect(html).toContain("仲間札");
    expect(html).toContain("館しごと");
    expect(html).toContain("出店札");
    expect(html).toContain("おやこ間取り");
    expect(html).toContain("デッキ渡し");
    expect(html).toContain("字くらべ");
    expect(html).toContain("数式ほどき");
    expect(html).toContain("試合盤");
    expect(html).toContain("音源控え");
    expect(html).toContain("部屋灯");
    expect(html).toContain("因子札");
    expect(html).toContain("受付札");
    expect(html).toContain("判例棚");
    expect(html).toContain("郵便引き");
    expect(html).toContain("議事ひろい");
    expect(html).toContain("法令引き");
    expect(html).toContain('"@type":"ItemList"');
    expect(html).toContain('"numberOfItems":100');
    expect(html).toContain("https://tools.yhay81.com/tools/tegotae");
    expect(html).toContain("https://tools.yhay81.com/tools/otayori-maku");
    expect(html).toContain("https://tools.yhay81.com/tools/noriai-hyo");
    expect(html).toContain("https://tools.yhay81.com/tools/kairan-to");
    expect(html).toContain("https://tools.yhay81.com/tools/site-hodoki");
    expect(html).toContain("https://tools.yhay81.com/tools/pon-hakushu");
    expect(html).toContain("https://tools.yhay81.com/tools/ano-hon-fuda");
    expect(html).toContain("https://tools.yhay81.com/tools/post-gura");
    expect(html).toContain("https://tools.yhay81.com/tools/suketto-court");
    expect(html).toContain("https://tools.yhay81.com/tools/round-fuda");
    expect(html).toContain("https://tools.yhay81.com/tools/tejun-dai");
    expect(html).toContain("https://tools.yhay81.com/tools/aikagi-ban");
    expect(html).toContain("https://tools.yhay81.com/tools/seibi-to");
    expect(html).toContain("https://tools.yhay81.com/tools/choka-to");
    expect(html).toContain("https://tools.yhay81.com/tools/tsukue-no-hi");
    expect(html).toContain("https://tools.yhay81.com/tools/shiori-dana");
    expect(html).toContain("https://tools.yhay81.com/tools/chord-dai");
    expect(html).toContain("https://tools.yhay81.com/tools/genba-cho");
    expect(html).toContain("https://tools.yhay81.com/tools/iriguchi-cho");
    expect(html).toContain("https://tools.yhay81.com/tools/relay-goyomi");
    expect(html).toContain("https://tools.yhay81.com/tools/nakama-fuda");
    expect(html).toContain("https://tools.yhay81.com/tools/kan-shigoto");
    expect(html).toContain("https://tools.yhay81.com/tools/shutten-fuda");
    expect(html).toContain("https://tools.yhay81.com/tools/oyako-madori");
    expect(html).toContain("https://tools.yhay81.com/tools/deck-watashi");
    expect(html).toContain("https://tools.yhay81.com/tools/ji-kurabe");
    expect(html).toContain("https://tools.yhay81.com/tools/sushiki-hodoki");
    expect(html).toContain("https://tools.yhay81.com/tools/shiai-ban");
    expect(html).toContain("https://tools.yhay81.com/tools/ongen-hikae");
    expect(html).toContain("https://tools.yhay81.com/tools/atsumari-guchi");
    expect(html).toContain("https://tools.yhay81.com/tools/shisou-to");
    expect(html).toContain("https://tools.yhay81.com/tools/heya-to");
    expect(html).toContain("https://tools.yhay81.com/tools/inshi-fuda");
    expect(html).toContain("https://tools.yhay81.com/tools/uketsuke-fuda");
    expect(response.headers.get("content-security-policy")).toContain(
      "https://mingle-frame.yusuke8h.workers.dev",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://sky-dial.yusuke8h.workers.dev",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://tango-orbit.yusuke8h.workers.dev",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://ava-rack.yusuke8h.workers.dev",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://chair-call.yusuke8h.workers.dev",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://dice-seat.yusuke8h.workers.dev",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://yose-bloom.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://chord-dai.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://genba-cho.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://iriguchi-cho.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://relay-goyomi.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://nakama-fuda.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://kan-shigoto.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://shutten-fuda.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://oyako-madori.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://deck-watashi.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://ji-kurabe.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://sushiki-hodoki.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://shiai-ban.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://ongen-hikae.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://atsumari-guchi.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://shisou-to.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain("https://heya-to.yhay81.com");
    expect(response.headers.get("content-security-policy")).toContain(
      "https://inshi-fuda.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://uketsuke-fuda.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain("https://shunji.yhay81.com");
    expect(response.headers.get("content-security-policy")).toContain(
      "https://hanrei-dana.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://yubin-hiki.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://heart-board.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://yoru-mado.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://kasane-fuda.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://maigo-poster.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain("https://yomiato.yhay81.com");
    expect(response.headers.get("content-security-policy")).toContain(
      "https://uchigraph.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://tsumi-erabi.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://ipass-map.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://takufuda.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain("https://tabidan.yhay81.com");
    expect(response.headers.get("content-security-policy")).toContain(
      "https://yorishiru.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://mcp-erabi.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain("https://tegotae.yhay81.com");
    expect(response.headers.get("content-security-policy")).toContain(
      "https://otayori-maku.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://noriai-hyo.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://kairan-to.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://site-hodoki.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://pon-hakushu.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://ano-hon-fuda.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://post-gura.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://suketto-court.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://round-fuda.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://tejun-dai.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://aikagi-ban.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://seibi-to.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://choka-to.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://tsukue-no-hi.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://seibun-narabe.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://machi-npo.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://hinan-saki.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://eki-joko.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://michi-no-eki.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://kokuritsu-koen.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://saitei-chingin.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://kyujin-chingin.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://kyujin-joken.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://seishain-kyujin.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://kyushoku-nenrei.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://shokugyo-chingin.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://shokugyo-bairitsu.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://shokugyo-joken.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://shokugyo-shushoku.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://kibo-joken.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://shinki-bairitsu.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://shokugyo-jusoku.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://sangyo-joken.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://chiiki-bairitsu.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://chiiki-shinki-bairitsu.yhay81.com",
    );
    expect(response.headers.get("content-security-policy")).toContain(
      "https://chiiki-shushoku.yhay81.com",
    );
    expect(html).not.toContain("data-template-surface");
    expect(html).not.toContain('class="hero"');
    expect(html).not.toContain("実験");
    expect(html).not.toContain("成功条件");
  });

  it("renders a focused and indexable page for every tool", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/tegotae",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(response.headers.get("cache-control")).toBe("public, max-age=300, s-maxage=86400");
    expect(html).toContain("<title>サイトの反応を見る | 手ごたえ | Tool Shelf</title>");
    expect(html).toContain('<link href="https://tools.yhay81.com/tools/tegotae" rel="canonical"/>');
    expect(html).toContain(
      '<meta content="https://tegotae.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('"@type":"WebApplication"');
    expect(html).toContain('"@type":"BreadcrumbList"');
    expect(html).toContain('class="detail-preview"');
    expect(html).toContain('data-tool="tegotae"');
    expect(html).toContain('href="https://tegotae.yhay81.com"');
    expect(html).toContain("Cookie・広告なし");
    expect(html).toContain("近くの道具");
    expect(html).not.toContain("実験");
    expect(html).not.toContain("成功条件");
  });

  it("publishes the サイトほどき detail page with its visual and direct destination", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/site-hodoki",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain("<title>サイトの骨組みを持ち出す | サイトほどき | Tool Shelf</title>");
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/site-hodoki" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://site-hodoki.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://site-hodoki.yhay81.com"');
    expect(html).toContain("入力URL・結果を保存しない");
  });

  it("publishes the ぽん拍手 detail page with its visual and direct destination", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/pon-hakushu",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain("<title>そのページへ、ひとつ拍手 | ぽん拍手 | Tool Shelf</title>");
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/pon-hakushu" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://pon-hakushu.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://pon-hakushu.yhay81.com"');
    expect(html).toContain("読者名・自由文なし");
  });

  it("publishes the あの本札 detail page with its visual and direct destination", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/ano-hon-fuda",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain("<title>思い出の断片を、あの一冊へ | あの本札 | Tool Shelf</title>");
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/ano-hon-fuda" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://ano-hon-fuda.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://ano-hon-fuda.yhay81.com"');
    expect(html).toContain("公開一覧・画像投稿なし");
  });

  it("publishes the ポスト蔵 detail page with its visual and direct destination", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/post-gura",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain("<title>しまった投稿を、端末の中で探す | ポスト蔵 | Tool Shelf</title>");
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/post-gura" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://post-gura.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://post-gura.yhay81.com"');
    expect(html).toContain("アーカイブを送信しない");
  });

  it("publishes the 助っ人コート detail page with its visual and direct destination", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/suketto-court",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain("<title>空いたポジションに入る | 助っ人コート | Tool Shelf</title>");
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/suketto-court" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://suketto-court.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://suketto-court.yhay81.com"');
    expect(html).toContain("採用者だけに参加案内");
  });

  it("publishes the ラウンド札 detail page with its visual and direct destination", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/round-fuda",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain("<title>卓番号から結果まで | ラウンド札 | Tool Shelf</title>");
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/round-fuda" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://round-fuda.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://round-fuda.yhay81.com"');
    expect(html).toContain("両者一致で結果確定");
  });

  it("publishes the 手順台 detail page with its visual and direct destination", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/tejun-dai",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain("<title>写真を置いて、番号で渡す | 手順台 | Tool Shelf</title>");
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/tejun-dai" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://tejun-dai.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://tejun-dai.yhay81.com"');
    expect(html).toContain("写真・本文は端末内");
  });

  it("publishes the 合鍵板 detail page with its visual and direct destination", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/aikagi-ban",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain("<title>合い鍵を渡す、30日の板 | 合鍵板 | Tool Shelf</title>");
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/aikagi-ban" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://aikagi-ban.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://aikagi-ban.yhay81.com"');
    expect(html).toContain("板・写真は30日で削除");
  });

  it("publishes the 整備灯 detail page with its visual and direct destination", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/seibi-to",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain("<title>整備の履歴と、次の灯り | 整備灯 | Tool Shelf</title>");
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/seibi-to" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://seibi-to.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://seibi-to.yhay81.com"');
    expect(html).toContain("PDF・CSV・編集用保存");
  });

  it("publishes the 釣果灯 detail page with its visual and direct destination", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/choka-to",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain("<title>釣り場を出さず、釣果を残す | 釣果灯 | Tool Shelf</title>");
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/choka-to" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://choka-to.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://choka-to.yhay81.com"');
    expect(html).toContain("位置なし共有札・編集用保存");
  });

  it("publishes the 机の灯 detail page with its visual and direct destination", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/tsukue-no-hi",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain("<title>学んだ時間が、机に灯る | 机の灯 | Tool Shelf</title>");
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/tsukue-no-hi" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://tsukue-no-hi.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://tsukue-no-hi.yhay81.com"');
    expect(html).toContain("CSV・編集用保存");
  });

  it("publishes the 栞棚 detail page with its visual and direct destination", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/shiori-dana",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain("<title>読んだ頁を、棚に残す | 栞棚 | Tool Shelf</title>");
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/shiori-dana" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://shiori-dana.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://shiori-dana.yhay81.com"');
    expect(html).toContain("CSV・編集用保存");
  });

  it("publishes the コード台 detail page with its visual and direct destination", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/chord-dai",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain("<title>手元の一曲を、弾ける譜面へ | コード台 | Tool Shelf</title>");
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/chord-dai" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://chord-dai.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://chord-dai.yhay81.com"');
    expect(html).toContain("曲順・印刷・編集用保存");
  });

  it("publishes the 現場帖 detail page with its visual and direct destination", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/genba-cho",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain("<title>申し込みから余韻まで、一枚ずつ | 現場帖 | Tool Shelf</title>");
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/genba-cho" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://genba-cho.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://genba-cho.yhay81.com"');
    expect(html).toContain("ICS・編集用保存");
  });

  it("publishes the 入口帖 detail page with its visual and direct destination", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/iriguchi-cho",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain("<title>活動の入口を、一枚に | 入口帖 | Tool Shelf</title>");
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/iriguchi-cho" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://iriguchi-cho.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://iriguchi-cho.yhay81.com"');
    expect(html).toContain("編集鍵・報告保護");
  });

  it("publishes the リレー暦 detail page with its visual and direct destination", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/relay-goyomi",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain("<title>一日ずつ、次の書き手へ | リレー暦 | Tool Shelf</title>");
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/relay-goyomi" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://relay-goyomi.yhay81.com/og.png" property="og:image"/>',
    );
    expect(html).toContain('href="https://relay-goyomi.yhay81.com"');
    expect(html).toContain("参加鍵・枠編集鍵");
  });

  it("publishes the 仲間札 detail page with its visual and direct destination", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/nakama-fuda",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain("<title>遊び方の合う席へ | 仲間札 | Tool Shelf</title>");
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/nakama-fuda" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://nakama-fuda.yhay81.com/og.png" property="og:image"/>',
    );
    expect(html).toContain('href="https://nakama-fuda.yhay81.com"');
    expect(html).toContain("編集鍵・報告保護");
  });

  it("publishes the 館しごと detail page with its visual and direct destination", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/kan-shigoto",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain("<title>締切から、次の展示室へ。 | 館しごと | Tool Shelf</title>");
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/kan-shigoto" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://kan-shigoto.yhay81.com/og.png" property="og:image"/>',
    );
    expect(html).toContain('href="https://kan-shigoto.yhay81.com"');
    expect(html).toContain("編集鍵・報告保護");
  });

  it("publishes the 出店札 detail page with its visual and direct destination", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/shutten-fuda",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain("<title>次の売り場を、締切から。 | 出店札 | Tool Shelf</title>");
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/shutten-fuda" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://shutten-fuda.yhay81.com/og.png" property="og:image"/>',
    );
    expect(html).toContain('href="https://shutten-fuda.yhay81.com"');
    expect(html).toContain("編集鍵・報告保護");
  });

  it("publishes the おやこ間取り detail page with its visual and direct destination", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/oyako-madori",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain(
      "<title>授乳も、おむつ替えも、行く前に。 | おやこ間取り | Tool Shelf</title>",
    );
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/oyako-madori" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://oyako-madori.yhay81.com/og.png" property="og:image"/>',
    );
    expect(html).toContain('href="https://oyako-madori.yhay81.com"');
    expect(html).toContain("現在地・住所不要");
  });

  it("publishes the デッキ渡し detail page with its visual and direct destination", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/deck-watashi",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain("<title>レシピを、次の卓へ。 | デッキ渡し | Tool Shelf</title>");
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/deck-watashi" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://deck-watashi.yhay81.com/og.png" property="og:image"/>',
    );
    expect(html).toContain('href="https://deck-watashi.yhay81.com"');
    expect(html).toContain("管理鍵で編集・削除");
  });

  it("publishes the 字くらべ detail page with its visual and direct destination", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/ji-kurabe",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain("<title>つくる文で、見くらべる。 | 字くらべ | Tool Shelf</title>");
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/ji-kurabe" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://ji-kurabe.yhay81.com/og.png" property="og:image"/>',
    );
    expect(html).toContain('href="https://ji-kurabe.yhay81.com"');
    expect(html).toContain("6書体・OFL原文付き");
  });

  it("publishes the 数式ほどき detail page with its visual and direct destination", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/sushiki-hodoki",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain("<title>数式を、見える手順に。 | 数式ほどき | Tool Shelf</title>");
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/sushiki-hodoki" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://sushiki-hodoki.yhay81.com/og.png" property="og:image"/>',
    );
    expect(html).toContain('href="https://sushiki-hodoki.yhay81.com"');
    expect(html).toContain("10関数・7エラーの公式札");
  });

  it("publishes the 試合盤 detail page with its visual and direct destination", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/shiai-ban",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain("<title>次の笛まで、ひと目で。 | 試合盤 | Tool Shelf</title>");
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/shiai-ban" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://shiai-ban.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://shiai-ban.yhay81.com"');
    expect(html).toContain("双方一致で得点確定");
  });

  it("publishes the 音源控え detail page with its visual and direct destination", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/ongen-hikae",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain("<title>使った音に、根拠を添える。 | 音源控え | Tool Shelf</title>");
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/ongen-hikae" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://ongen-hikae.yhay81.com/og.png" property="og:image"/>',
    );
    expect(html).toContain('href="https://ongen-hikae.yhay81.com"');
    expect(html).toContain("クレジット・CSV・JSON出力");
  });

  it("publishes the 集まり口 detail page with its visual and direct destination", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/atsumari-guchi",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain("<title>参加まで、迷わせない。 | 集まり口 | Tool Shelf</title>");
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/atsumari-guchi" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://atsumari-guchi.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://atsumari-guchi.yhay81.com"');
    expect(html).toContain("定員超過は自動で待機");
  });

  it("publishes the 試走灯 detail page with its visual and direct destination", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/shisou-to",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain("<title>12台の端末。14日の試走。 | 試走灯 | Tool Shelf</title>");
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/shisou-to" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://shisou-to.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://shisou-to.yhay81.com"');
    expect(html).toContain("12人・14日の進行灯");
  });

  it("publishes the 部屋灯 detail page with its visual and direct destination", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/heya-to",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain("<title>5桁を置く。5人が灯る。 | 部屋灯 | Tool Shelf</title>");
    expect(html).toContain('<link href="https://tools.yhay81.com/tools/heya-to" rel="canonical"/>');
    expect(html).toContain(
      '<meta content="https://heya-to.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://heya-to.yhay81.com"');
    expect(html).toContain("12分で自動消灯");
  });

  it("publishes the 因子札 detail page with its visual and direct destination", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/inshi-fuda",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain("<title>9桁と、継ぎたい因子だけ。 | 因子札 | Tool Shelf</title>");
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/inshi-fuda" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://inshi-fuda.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://inshi-fuda.yhay81.com"');
    expect(html).toContain("距離・脚質・因子で検索");
  });

  it("publishes the 受付札 detail page with its ticket-to-roster visual", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/uketsuke-fuda",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain("<title>予約は一枚、当日は名簿。 | 受付札 | Tool Shelf</title>");
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/uketsuke-fuda" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://uketsuke-fuda.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://uketsuke-fuda.yhay81.com"');
    expect(html).toContain("代理登録・来場チェック・CSV");
  });

  it("publishes the 瞬辞 detail page with its dictionary-card visual", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/shunji",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain("<title>打つ。ひらく。残す。 | 瞬辞 | Tool Shelf</title>");
    expect(html).toContain('<link href="https://tools.yhay81.com/tools/shunji" rel="canonical"/>');
    expect(html).toContain(
      '<meta content="https://shunji.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://shunji.yhay81.com"');
    expect(html).toContain("21万語超・語形／読み／英語全文検索");
  });

  it("publishes the 判例棚 detail page with its docket-shelf visual", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/hanrei-dana",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain("<title>事件番号から、原文へ。 | 判例棚 | Tool Shelf</title>");
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/hanrei-dana" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://hanrei-dana.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://hanrei-dana.yhay81.com"');
    expect(html).toContain("1,457件・2025年以降");
  });

  it("publishes the 郵便引き detail page with its envelope visual", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/yubin-hiki",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain("<title>番号と住所を、どちらからでも。 | 郵便引き | Tool Shelf</title>");
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/yubin-hiki" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://yubin-hiki.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://yubin-hiki.yhay81.com"');
    expect(html).toContain("120,682郵便番号・47都道府県");
  });

  it("publishes the 議事ひろい detail page with its chamber visual", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/giji-hiroi",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain("<title>ことばから、発言へ。 | 議事ひろい | Tool Shelf</title>");
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/giji-hiroi" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://giji-hiroi.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://giji-hiroi.yhay81.com"');
    expect(html).toContain("1947年以降・国会会議録");
  });

  it("publishes the 法令引き detail page with its law-library visual", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/hourei-hiki",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain("<title>名前でも、条文のことばでも。 | 法令引き | Tool Shelf</title>");
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/hourei-hiki" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://hourei-hiki.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://hourei-hiki.yhay81.com"');
    expect(html).toContain("現行約9千法令・公式API");
  });

  it("publishes the 書誌引き detail page with its card-catalogue visual", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/shoshi-hiki",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain("<title>本を、確かな一枚へ。 | 書誌引き | Tool Shelf</title>");
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/shoshi-hiki" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://shoshi-hiki.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://shoshi-hiki.yhay81.com"');
    expect(html).toContain("国立国会図書館作成書誌・図書");
  });

  it("publishes the 休み組み detail page with its year-planner visual", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/yasumi-kumi",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain("<title>休む日を置く。連休がつながる。 | 休み組み | Tool Shelf</title>");
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/yasumi-kumi" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://yasumi-kumi.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://yasumi-kumi.yhay81.com"');
    expect(html).toContain("内閣府公式祝日・2026／2027年");
  });

  it("publishes the 成分ならべ detail page with its food-scale visual", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/seibun-narabe",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain(
      "<title>食品を置く。成分の違いが見える。 | 成分ならべ | Tool Shelf</title>",
    );
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/seibun-narabe" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://seibun-narabe.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://seibun-narabe.yhay81.com"');
    expect(html).toContain("文部科学省公式成分表・2,538食品");
  });

  it("publishes the まちのNPO detail page with its regional directory visual", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/machi-npo",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain(
      "<title>地域から、活動する法人を見つける。 | まちのNPO | Tool Shelf</title>",
    );
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/machi-npo" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://machi-npo.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://machi-npo.yhay81.com"');
    expect(html).toContain("内閣府行政入力情報・49,062法人");
  });

  it("publishes the 避難先さがし detail page with its route-sign visual", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/hinan-saki",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain(
      "<title>目的を選ぶ。近い避難先が見える。 | 避難先さがし | Tool Shelf</title>",
    );
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/hinan-saki" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://hinan-saki.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://hinan-saki.yhay81.com"');
    expect(html).toContain("国土地理院公式データ・198,595件");
  });

  it("publishes the 論文引き detail page with its paper-index visual", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/ronbun-hiki",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain("<title>題名から、読むべき一本へ。 | 論文引き | Tool Shelf</title>");
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/ronbun-hiki" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://ronbun-hiki.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://ronbun-hiki.yhay81.com"');
    expect(html).toContain("Crossref公開メタデータ・論文検索");
  });

  it("publishes the 学校コード引き detail page with its school-code visual", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/gakko-code",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain(
      "<title>学校を選ぶ。コード札がそろう。 | 学校コード引き | Tool Shelf</title>",
    );
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/gakko-code" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://gakko-code.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://gakko-code.yhay81.com"');
    expect(html).toContain("文部科学省公式一覧・60,285校");
  });

  it("publishes the 産業分類引き detail page with its industry-town visual", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/sangyo-code",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain(
      "<title>仕事をたどる。分類コードが決まる。 | 産業分類引き | Tool Shelf</title>",
    );
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/sangyo-code" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://sangyo-code.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://sangyo-code.yhay81.com"');
    expect(html).toContain("e-Stat公式分類・2,128コード");
  });

  it("publishes the 自治体コード引き detail page with its split code visual", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/jichitai-code",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain(
      "<title>地域を選ぶ。6桁がそろう。 | 自治体コード引き | Tool Shelf</title>",
    );
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/jichitai-code" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://jichitai-code.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://jichitai-code.yhay81.com"');
    expect(html).toContain("総務省公式一覧・1,965コード");
  });

  it("publishes the 職業分類引き detail page with its occupation workbench visual", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/shokugyo-code",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain(
      "<title>することを探す。3桁へたどる。 | 職業分類引き | Tool Shelf</title>",
    );
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/shokugyo-code" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://shokugyo-code.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://shokugyo-code.yhay81.com"');
    expect(html).toContain("e-Stat公式分類・415コード");
  });

  it("publishes the 地価公示くらべ detail page with its parcel comparison visual", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/chika-kohji",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain(
      "<title>場所を選ぶ。価格の根拠を並べる。 | 地価公示くらべ | Tool Shelf</title>",
    );
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/chika-kohji" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://chika-kohji.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://chika-kohji.yhay81.com"');
    expect(html).toContain("国土交通省公式データ・25,565地点");
  });

  it("publishes the 駅乗降くらべ detail page with its station comparison visual", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/eki-joko",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain(
      "<title>駅を探す。14年を同じホームで比べる。 | 駅乗降くらべ | Tool Shelf</title>",
    );
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/eki-joko" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://eki-joko.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://eki-joko.yhay81.com"');
    expect(html).toContain("国土交通省公式データ・7,739公表単位");
  });

  it("publishes the 道の駅さがし detail page with its road-trip visual", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/michi-no-eki",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain(
      "<title>行き先を探す。旅の停車札を並べる。 | 道の駅さがし | Tool Shelf</title>",
    );
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/michi-no-eki" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://michi-no-eki.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://michi-no-eki.yhay81.com"');
    expect(html).toContain("国土交通省公式一覧・1,231駅");
  });

  it("publishes the 国立公園くらべ detail page with its zoning visual", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/kokuritsu-koen",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain(
      "<title>公園を選ぶ。守られ方を重ねる。 | 国立公園くらべ | Tool Shelf</title>",
    );
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/kokuritsu-koen" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://kokuritsu-koen.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://kokuritsu-koen.yhay81.com"');
    expect(html).toContain("環境省公式表・35国立公園");
  });

  it("publishes the 最低賃金くらべ detail page with its time-card visual", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/saitei-chingin",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain(
      "<title>地域を選ぶ。時給と発効日を並べる。 | 最低賃金くらべ | Tool Shelf</title>",
    );
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/saitei-chingin" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://saitei-chingin.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://saitei-chingin.yhay81.com"');
    expect(html).toContain("厚生労働省公式表・47都道府県");
  });

  it("publishes the 求人賃金くらべ detail page with its job-board visual", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/kyujin-chingin",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain(
      "<title>地域と産業を選ぶ。求人票の平均を比べる。 | 求人賃金くらべ | Tool Shelf</title>",
    );
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/kyujin-chingin" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://kyujin-chingin.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://kyujin-chingin.yhay81.com"');
    expect(html).toContain("厚生労働省公式統計・912組");
  });

  it("publishes the 求人条件くらべ detail page with its condition-slip visual", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/kyujin-joken",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain(
      "<title>産業を選ぶ。条件の割合を並べる。 | 求人条件くらべ | Tool Shelf</title>",
    );
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/kyujin-joken" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://kyujin-joken.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://kyujin-joken.yhay81.com"');
    expect(html).toContain("厚生労働省公式統計・3表19産業");
  });

  it("publishes the 正社員求人くらべ detail page with its nested-job-file visual", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/seishain-kyujin",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain(
      "<title>地域と年度を選ぶ。正社員の割合と元件数を並べる。 | 正社員求人くらべ | Tool Shelf</title>",
    );
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/seishain-kyujin" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://seishain-kyujin.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://seishain-kyujin.yhay81.com"');
    expect(html).toContain("厚生労働省公式統計・2,160組");
  });

  it("publishes the 求職年齢くらべ detail page with its age-drawer visual", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/kyushoku-nenrei",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain(
      "<title>地域と年代を選ぶ。人数と構成比を並べる。 | 求職年齢くらべ | Tool Shelf</title>",
    );
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/kyushoku-nenrei" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://kyushoku-nenrei.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://kyushoku-nenrei.yhay81.com"');
    expect(html).toContain("厚生労働省公式統計・31,104値");
  });

  it("publishes the 職種賃金くらべ detail page with its occupation-drawer visual", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/shokugyo-chingin",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain(
      "<title>職種と地域を選ぶ。月給・時給の平均を並べる。 | 職種賃金くらべ | Tool Shelf</title>",
    );
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/shokugyo-chingin" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://shokugyo-chingin.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://shokugyo-chingin.yhay81.com"');
    expect(html).toContain("厚生労働省公式統計・42,048セル");
  });

  it("publishes the 職種求人倍率 detail page with its opening-seeker balance visual", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/shokugyo-bairitsu",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain(
      "<title>職種を選ぶ。求人と求職の釣り合いを並べる。 | 職種求人倍率 | Tool Shelf</title>",
    );
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/shokugyo-bairitsu" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://shokugyo-bairitsu.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://shokugyo-bairitsu.yhay81.com"');
    expect(html).toContain("厚生労働省公式統計・31,536組");
  });

  it("publishes the 職種求人条件 detail page with its condition-stamp visual", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/shokugyo-joken",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain(
      "<title>職種を選ぶ。賞与・通勤手当の割合を並べる。 | 職種求人条件 | Tool Shelf</title>",
    );
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/shokugyo-joken" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://shokugyo-joken.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://shokugyo-joken.yhay81.com"');
    expect(html).toContain("厚生労働省公式統計・2,400値");
  });

  it("publishes the 職種就職率 detail page with its application-to-placement visual", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/shokugyo-shushoku",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain(
      "<title>職種と地域を選ぶ。申込から就職確認までを並べる。 | 職種就職率 | Tool Shelf</title>",
    );
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/shokugyo-shushoku" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://shokugyo-shushoku.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://shokugyo-shushoku.yhay81.com"');
    expect(html).toContain("厚生労働省公式統計・31,536組");
  });

  it("publishes the 規模別求人条件 detail page with its company skyline", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/kibo-joken",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain(
      "<title>会社の大きさを選ぶ。3つの条件を並べる。 | 規模別求人条件 | Tool Shelf</title>",
    );
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/kibo-joken" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://kibo-joken.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://kibo-joken.yhay81.com"');
    expect(html).toContain("厚生労働省公式統計・3表8区分");
  });

  it("publishes the 職種新規求人倍率 detail page with its intake visual", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/shinki-bairitsu",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain(
      "<title>職種と地域を選ぶ。新規求人と新規申込を並べる。 | 職種新規求人倍率 | Tool Shelf</title>",
    );
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/shinki-bairitsu" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://shinki-bairitsu.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://shinki-bairitsu.yhay81.com"');
    expect(html).toContain("厚生労働省公式統計・31,536組");
  });

  it("publishes the 職種充足率 detail page with its vacancy rack", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/shokugyo-jusoku",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain(
      "<title>職種を選ぶ。求人枠と就職確認の割合を並べる。 | 職種充足率 | Tool Shelf</title>",
    );
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/shokugyo-jusoku" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://shokugyo-jusoku.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://shokugyo-jusoku.yhay81.com"');
    expect(html).toContain("厚生労働省公式統計・657組");
  });

  it("publishes the 産業別求人条件 detail page with its condition files", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/sangyo-joken",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain(
      "<title>産業を選ぶ。休みと手当を条件別に並べる。 | 産業別求人条件 | Tool Shelf</title>",
    );
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/sangyo-joken" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://sangyo-joken.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://sangyo-joken.yhay81.com"');
    expect(html).toContain("厚生労働省公式統計・418元値");
  });

  it("publishes the 地域求人倍率 detail page with its balance board", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/chiiki-bairitsu",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain(
      "<title>地域を選ぶ。求人と求職の釣り合いを並べる。 | 地域求人倍率 | Tool Shelf</title>",
    );
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/chiiki-bairitsu" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://chiiki-bairitsu.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://chiiki-bairitsu.yhay81.com"');
    expect(html).toContain("厚生労働省公式統計・864元値");
  });

  it("publishes the 地域新規求人倍率 detail page with its intake tickets", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/chiiki-shinki-bairitsu",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain(
      "<title>地域を選ぶ。新しく届いた求人と申込を並べる。 | 地域新規求人倍率 | Tool Shelf</title>",
    );
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/chiiki-shinki-bairitsu" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://chiiki-shinki-bairitsu.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://chiiki-shinki-bairitsu.yhay81.com"');
    expect(html).toContain("厚生労働省公式統計・864元値");
  });

  it("publishes the 地域就職率 detail page with its confirmed case file", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/tools/chiiki-shushoku",
      undefined,
      bindings,
    );
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(html).toContain(
      "<title>地域を選ぶ。申込から就職確認までを並べる。 | 地域就職率 | Tool Shelf</title>",
    );
    expect(html).toContain(
      '<link href="https://tools.yhay81.com/tools/chiiki-shushoku" rel="canonical"/>',
    );
    expect(html).toContain(
      '<meta content="https://chiiki-shushoku.yhay81.com/og.svg" property="og:image"/>',
    );
    expect(html).toContain('href="https://chiiki-shushoku.yhay81.com"');
    expect(html).toContain("厚生労働省公式統計・864元値");
  });

  it("publishes every focused tool page in the sitemap", async () => {
    const response = await app.request("https://tools.yhay81.com/sitemap.xml", undefined, bindings);
    const xml = await response.text();
    const locations = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);

    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toContain("application/xml");
    expect(response.headers.get("cache-control")).toBe("public, max-age=300, s-maxage=300");
    expect(locations).toHaveLength(102);
    expect(new Set(locations)).toHaveProperty("size", 102);
    expect(locations).toContain("https://tools.yhay81.com/");
    expect(locations).toContain("https://tools.yhay81.com/privacy");
    expect(locations).toContain("https://tools.yhay81.com/tools/tegotae");
    expect(locations).toContain("https://tools.yhay81.com/tools/mcp-erabi");
    expect(locations).toContain("https://tools.yhay81.com/tools/otayori-maku");
    expect(locations).toContain("https://tools.yhay81.com/tools/noriai-hyo");
    expect(locations).toContain("https://tools.yhay81.com/tools/kairan-to");
    expect(locations).toContain("https://tools.yhay81.com/tools/site-hodoki");
    expect(locations).toContain("https://tools.yhay81.com/tools/pon-hakushu");
    expect(locations).toContain("https://tools.yhay81.com/tools/ano-hon-fuda");
    expect(locations).toContain("https://tools.yhay81.com/tools/post-gura");
    expect(locations).toContain("https://tools.yhay81.com/tools/suketto-court");
    expect(locations).toContain("https://tools.yhay81.com/tools/round-fuda");
    expect(locations).toContain("https://tools.yhay81.com/tools/tejun-dai");
    expect(locations).toContain("https://tools.yhay81.com/tools/aikagi-ban");
    expect(locations).toContain("https://tools.yhay81.com/tools/seibi-to");
    expect(locations).toContain("https://tools.yhay81.com/tools/choka-to");
    expect(locations).toContain("https://tools.yhay81.com/tools/tsukue-no-hi");
    expect(locations).toContain("https://tools.yhay81.com/tools/shiori-dana");
    expect(locations).toContain("https://tools.yhay81.com/tools/chord-dai");
    expect(locations).toContain("https://tools.yhay81.com/tools/genba-cho");
    expect(locations).toContain("https://tools.yhay81.com/tools/iriguchi-cho");
    expect(locations).toContain("https://tools.yhay81.com/tools/relay-goyomi");
    expect(locations).toContain("https://tools.yhay81.com/tools/nakama-fuda");
    expect(locations).toContain("https://tools.yhay81.com/tools/kan-shigoto");
    expect(locations).toContain("https://tools.yhay81.com/tools/shutten-fuda");
    expect(locations).toContain("https://tools.yhay81.com/tools/oyako-madori");
    expect(locations).toContain("https://tools.yhay81.com/tools/deck-watashi");
    expect(locations).toContain("https://tools.yhay81.com/tools/ji-kurabe");
    expect(locations).toContain("https://tools.yhay81.com/tools/sushiki-hodoki");
    expect(locations).toContain("https://tools.yhay81.com/tools/shiai-ban");
    expect(locations).toContain("https://tools.yhay81.com/tools/ongen-hikae");
    expect(locations).toContain("https://tools.yhay81.com/tools/atsumari-guchi");
    expect(locations).toContain("https://tools.yhay81.com/tools/shisou-to");
    expect(locations).toContain("https://tools.yhay81.com/tools/heya-to");
    expect(locations).toContain("https://tools.yhay81.com/tools/inshi-fuda");
    expect(locations).toContain("https://tools.yhay81.com/tools/uketsuke-fuda");
    expect(locations).toContain("https://tools.yhay81.com/tools/shunji");
    expect(locations).toContain("https://tools.yhay81.com/tools/hanrei-dana");
    expect(locations).toContain("https://tools.yhay81.com/tools/yubin-hiki");
    expect(locations).toContain("https://tools.yhay81.com/tools/giji-hiroi");
    expect(locations).toContain("https://tools.yhay81.com/tools/hourei-hiki");
    expect(locations).toContain("https://tools.yhay81.com/tools/shoshi-hiki");
    expect(locations).toContain("https://tools.yhay81.com/tools/yasumi-kumi");
    expect(locations).toContain("https://tools.yhay81.com/tools/seibun-narabe");
    expect(locations).toContain("https://tools.yhay81.com/tools/machi-npo");
    expect(locations).toContain("https://tools.yhay81.com/tools/hinan-saki");
    expect(locations).toContain("https://tools.yhay81.com/tools/ronbun-hiki");
    expect(locations).toContain("https://tools.yhay81.com/tools/gakko-code");
    expect(locations).toContain("https://tools.yhay81.com/tools/sangyo-code");
    expect(locations).toContain("https://tools.yhay81.com/tools/jichitai-code");
    expect(locations).toContain("https://tools.yhay81.com/tools/shokugyo-code");
    expect(locations).toContain("https://tools.yhay81.com/tools/chika-kohji");
    expect(locations).toContain("https://tools.yhay81.com/tools/eki-joko");
    expect(locations).toContain("https://tools.yhay81.com/tools/michi-no-eki");
    expect(locations).toContain("https://tools.yhay81.com/tools/kokuritsu-koen");
    expect(locations).toContain("https://tools.yhay81.com/tools/saitei-chingin");
    expect(locations).toContain("https://tools.yhay81.com/tools/kyujin-chingin");
    expect(locations).toContain("https://tools.yhay81.com/tools/kyujin-joken");
    expect(locations).toContain("https://tools.yhay81.com/tools/seishain-kyujin");
    expect(locations).toContain("https://tools.yhay81.com/tools/kyushoku-nenrei");
    expect(locations).toContain("https://tools.yhay81.com/tools/shokugyo-chingin");
    expect(locations).toContain("https://tools.yhay81.com/tools/shokugyo-bairitsu");
    expect(locations).toContain("https://tools.yhay81.com/tools/shokugyo-joken");
    expect(locations).toContain("https://tools.yhay81.com/tools/shokugyo-shushoku");
    expect(locations).toContain("https://tools.yhay81.com/tools/kibo-joken");
    expect(locations).toContain("https://tools.yhay81.com/tools/shinki-bairitsu");
    expect(locations).toContain("https://tools.yhay81.com/tools/shokugyo-jusoku");
    expect(locations).toContain("https://tools.yhay81.com/tools/sangyo-joken");
    expect(locations).toContain("https://tools.yhay81.com/tools/chiiki-bairitsu");
    expect(locations).toContain("https://tools.yhay81.com/tools/chiiki-shinki-bairitsu");
    expect(locations).toContain("https://tools.yhay81.com/tools/chiiki-shushoku");
  });

  it("does not turn an unknown tool slug into an indexable page", async () => {
    const response = await app.request("/tools/not-a-tool", undefined, bindings);
    const body = await response.json<{ error: string }>();

    expect(response.status).toBe(404);
    expect(body.error).toBe("not_found");
  });

  it("redirects the legacy shelf URL to the canonical custom domain", async () => {
    const response = await app.request(
      "https://tool-shelf.yusuke8h.workers.dev/privacy?from=legacy",
    );

    expect(response.status).toBe(308);
    expect(response.headers.get("location")).toBe("https://tools.yhay81.com/privacy?from=legacy");
  });

  it("explains the actual data boundary", async () => {
    const response = await app.request("/privacy", undefined, bindings);
    const html = await response.text();

    expect(response.status).toBe(200);
    expect(response.headers.get("cache-control")).toBe("no-store");
    expect(html).toContain("匿名セッションID");
    expect(html).toContain("検索欄に入力した言葉は保存しません");
    expect(html).toContain("35日後");
  });

  it("stores a validated anonymous outbound event", async () => {
    const response = await app.request(
      "/api/events",
      {
        body: JSON.stringify(eventPayload),
        headers: {
          "content-type": "application/json",
          "sec-fetch-site": "same-origin",
        },
        method: "POST",
      },
      bindings,
    );

    expect(response.status).toBe(204);
    expect(prepare).toHaveBeenCalledTimes(2);
    expect(bind).toHaveBeenCalledWith(
      eventPayload.sessionId,
      eventPayload.name,
      eventPayload.tool,
      expect.stringMatching(/^\d{4}-\d{2}-\d{2}$/),
    );
    expect(batch).toHaveBeenCalledOnce();
  });

  it("discards explicit QA events sent by a cached client", async () => {
    const response = await app.request(
      "https://tools.yhay81.com/api/events",
      {
        body: JSON.stringify(eventPayload),
        headers: {
          "content-type": "application/json",
          referer: "https://tools.yhay81.com/?qa=1",
          "sec-fetch-site": "same-origin",
        },
        method: "POST",
      },
      bindings,
    );

    expect(response.status).toBe(204);
    expect(prepare).not.toHaveBeenCalled();
    expect(batch).not.toHaveBeenCalled();
  });

  it("accepts Mingle Frame as an allowlisted tool", async () => {
    const response = await app.request(
      "/api/events",
      {
        body: JSON.stringify({ ...eventPayload, tool: "mingle-frame" }),
        headers: {
          "content-type": "application/json",
          "sec-fetch-site": "same-origin",
        },
        method: "POST",
      },
      bindings,
    );

    expect(response.status).toBe(204);
    expect(bind).toHaveBeenCalledWith(
      eventPayload.sessionId,
      eventPayload.name,
      "mingle-frame",
      expect.stringMatching(/^\d{4}-\d{2}-\d{2}$/),
    );
  });

  it("accepts Sky Dial as an allowlisted tool", async () => {
    const response = await app.request(
      "/api/events",
      {
        body: JSON.stringify({ ...eventPayload, tool: "sky-dial" }),
        headers: {
          "content-type": "application/json",
          "sec-fetch-site": "same-origin",
        },
        method: "POST",
      },
      bindings,
    );

    expect(response.status).toBe(204);
    expect(bind).toHaveBeenCalledWith(
      eventPayload.sessionId,
      eventPayload.name,
      "sky-dial",
      expect.stringMatching(/^\d{4}-\d{2}-\d{2}$/),
    );
  });

  it("accepts Tango Orbit as an allowlisted tool", async () => {
    const response = await app.request(
      "/api/events",
      {
        body: JSON.stringify({ ...eventPayload, tool: "tango-orbit" }),
        headers: {
          "content-type": "application/json",
          "sec-fetch-site": "same-origin",
        },
        method: "POST",
      },
      bindings,
    );

    expect(response.status).toBe(204);
    expect(bind).toHaveBeenCalledWith(
      eventPayload.sessionId,
      eventPayload.name,
      "tango-orbit",
      expect.stringMatching(/^\d{4}-\d{2}-\d{2}$/),
    );
  });

  it("accepts Ava Rack as an allowlisted tool", async () => {
    const response = await app.request(
      "/api/events",
      {
        body: JSON.stringify({ ...eventPayload, tool: "ava-rack" }),
        headers: {
          "content-type": "application/json",
          "sec-fetch-site": "same-origin",
        },
        method: "POST",
      },
      bindings,
    );

    expect(response.status).toBe(204);
    expect(bind).toHaveBeenCalledWith(
      eventPayload.sessionId,
      eventPayload.name,
      "ava-rack",
      expect.stringMatching(/^\d{4}-\d{2}-\d{2}$/),
    );
  });

  it("accepts Chair Call as an allowlisted tool", async () => {
    const response = await app.request(
      "/api/events",
      {
        body: JSON.stringify({ ...eventPayload, tool: "chair-call" }),
        headers: {
          "content-type": "application/json",
          "sec-fetch-site": "same-origin",
        },
        method: "POST",
      },
      bindings,
    );

    expect(response.status).toBe(204);
    expect(bind).toHaveBeenCalledWith(
      eventPayload.sessionId,
      eventPayload.name,
      "chair-call",
      expect.stringMatching(/^\d{4}-\d{2}-\d{2}$/),
    );
  });

  it("accepts Dice Seat as an allowlisted tool", async () => {
    const response = await app.request(
      "/api/events",
      {
        body: JSON.stringify({ ...eventPayload, tool: "dice-seat" }),
        headers: {
          "content-type": "application/json",
          "sec-fetch-site": "same-origin",
        },
        method: "POST",
      },
      bindings,
    );

    expect(response.status).toBe(204);
    expect(bind).toHaveBeenCalledWith(
      eventPayload.sessionId,
      eventPayload.name,
      "dice-seat",
      expect.stringMatching(/^\d{4}-\d{2}-\d{2}$/),
    );
  });

  it("accepts Yose Bloom as an allowlisted tool", async () => {
    const response = await app.request(
      "/api/events",
      {
        body: JSON.stringify({ ...eventPayload, tool: "yose-bloom" }),
        headers: {
          "content-type": "application/json",
          "sec-fetch-site": "same-origin",
        },
        method: "POST",
      },
      bindings,
    );

    expect(response.status).toBe(204);
    expect(bind).toHaveBeenCalledWith(
      eventPayload.sessionId,
      eventPayload.name,
      "yose-bloom",
      expect.stringMatching(/^\d{4}-\d{2}-\d{2}$/),
    );
  });

  it("accepts Heart Board as an allowlisted tool", async () => {
    const response = await app.request(
      "/api/events",
      {
        body: JSON.stringify({ ...eventPayload, tool: "heart-board" }),
        headers: {
          "content-type": "application/json",
          "sec-fetch-site": "same-origin",
        },
        method: "POST",
      },
      bindings,
    );

    expect(response.status).toBe(204);
    expect(bind).toHaveBeenCalledWith(
      eventPayload.sessionId,
      eventPayload.name,
      "heart-board",
      expect.stringMatching(/^\d{4}-\d{2}-\d{2}$/),
    );
  });

  it("accepts Yoru Mado as an allowlisted tool", async () => {
    const response = await app.request(
      "/api/events",
      {
        body: JSON.stringify({ ...eventPayload, tool: "yoru-mado" }),
        headers: {
          "content-type": "application/json",
          "sec-fetch-site": "same-origin",
        },
        method: "POST",
      },
      bindings,
    );

    expect(response.status).toBe(204);
    expect(bind).toHaveBeenCalledWith(
      eventPayload.sessionId,
      eventPayload.name,
      "yoru-mado",
      expect.stringMatching(/^\d{4}-\d{2}-\d{2}$/),
    );
  });

  it("accepts Kasane Fuda as an allowlisted tool", async () => {
    const response = await app.request(
      "/api/events",
      {
        body: JSON.stringify({ ...eventPayload, tool: "kasane-fuda" }),
        headers: {
          "content-type": "application/json",
          "sec-fetch-site": "same-origin",
        },
        method: "POST",
      },
      bindings,
    );

    expect(response.status).toBe(204);
    expect(bind).toHaveBeenCalledWith(
      eventPayload.sessionId,
      eventPayload.name,
      "kasane-fuda",
      expect.stringMatching(/^\d{4}-\d{2}-\d{2}$/),
    );
  });

  it("accepts Maigo Poster as an allowlisted tool", async () => {
    const response = await app.request(
      "/api/events",
      {
        body: JSON.stringify({ ...eventPayload, tool: "maigo-poster" }),
        headers: {
          "content-type": "application/json",
          "sec-fetch-site": "same-origin",
        },
        method: "POST",
      },
      bindings,
    );

    expect(response.status).toBe(204);
    expect(bind).toHaveBeenCalledWith(
      eventPayload.sessionId,
      eventPayload.name,
      "maigo-poster",
      expect.stringMatching(/^\d{4}-\d{2}-\d{2}$/),
    );
  });

  it("accepts Yomiato as an allowlisted tool", async () => {
    const response = await app.request(
      "/api/events",
      {
        body: JSON.stringify({ ...eventPayload, tool: "yomiato" }),
        headers: {
          "content-type": "application/json",
          "sec-fetch-site": "same-origin",
        },
        method: "POST",
      },
      bindings,
    );

    expect(response.status).toBe(204);
    expect(bind).toHaveBeenCalledWith(
      eventPayload.sessionId,
      eventPayload.name,
      "yomiato",
      expect.stringMatching(/^\d{4}-\d{2}-\d{2}$/),
    );
  });

  it("accepts Uchigraph as an allowlisted tool", async () => {
    const response = await app.request(
      "/api/events",
      {
        body: JSON.stringify({ ...eventPayload, tool: "uchigraph" }),
        headers: {
          "content-type": "application/json",
          "sec-fetch-site": "same-origin",
        },
        method: "POST",
      },
      bindings,
    );

    expect(response.status).toBe(204);
    expect(bind).toHaveBeenCalledWith(
      eventPayload.sessionId,
      eventPayload.name,
      "uchigraph",
      expect.stringMatching(/^\d{4}-\d{2}-\d{2}$/),
    );
  });

  it("accepts Tsumi Erabi as an allowlisted tool", async () => {
    const response = await app.request(
      "/api/events",
      {
        body: JSON.stringify({ ...eventPayload, tool: "tsumi-erabi" }),
        headers: {
          "content-type": "application/json",
          "sec-fetch-site": "same-origin",
        },
        method: "POST",
      },
      bindings,
    );

    expect(response.status).toBe(204);
    expect(bind).toHaveBeenCalledWith(
      eventPayload.sessionId,
      eventPayload.name,
      "tsumi-erabi",
      expect.stringMatching(/^\d{4}-\d{2}-\d{2}$/),
    );
  });

  it("accepts IT Passport Map as an allowlisted tool", async () => {
    const response = await app.request(
      "/api/events",
      {
        body: JSON.stringify({ ...eventPayload, tool: "ipass-map" }),
        headers: {
          "content-type": "application/json",
          "sec-fetch-site": "same-origin",
        },
        method: "POST",
      },
      bindings,
    );

    expect(response.status).toBe(204);
    expect(bind).toHaveBeenCalledWith(
      eventPayload.sessionId,
      eventPayload.name,
      "ipass-map",
      expect.stringMatching(/^\d{4}-\d{2}-\d{2}$/),
    );
  });

  it.each([
    {
      expected: 415,
      headers: { "content-type": "text/plain" },
      payload: JSON.stringify(eventPayload),
    },
    {
      expected: 403,
      headers: {
        "content-type": "application/json",
        "sec-fetch-site": "cross-site",
      },
      payload: JSON.stringify(eventPayload),
    },
    {
      expected: 400,
      headers: { "content-type": "application/json" },
      payload: "{",
    },
    {
      expected: 400,
      headers: { "content-type": "application/json" },
      payload: JSON.stringify({ ...eventPayload, tool: "unknown" }),
    },
    {
      expected: 400,
      headers: { "content-type": "application/json" },
      payload: JSON.stringify({ ...eventPayload, name: "visited" }),
    },
    {
      expected: 413,
      headers: { "content-type": "application/json" },
      payload: JSON.stringify({ ...eventPayload, padding: "x".repeat(1100) }),
    },
  ])("rejects invalid event requests with $expected", async ({ expected, headers, payload }) => {
    const response = await app.request(
      "/api/events",
      {
        body: payload,
        headers,
        method: "POST",
      },
      bindings,
    );

    expect(response.status).toBe(expected);
    expect(batch).not.toHaveBeenCalled();
  });

  it("exposes a machine-readable health endpoint", async () => {
    const response = await app.request("/healthz", undefined, bindings);
    const body = await response.json<{ healthy: boolean }>();

    expect(response.status).toBe(200);
    expect(body.healthy).toBe(true);
  });

  it("runs retention cleanup on the daily schedule", async () => {
    const run = vi.fn(() => Promise.resolve({}) as unknown as Promise<D1Result>);
    const scheduledPrepare = vi.fn(() => ({ run }) as unknown as D1PreparedStatement);
    const waitUntil = vi.fn();
    const module = (await import("../src/worker")).default;

    module.scheduled(
      {} as ScheduledController,
      { ...bindings, DB: { prepare: scheduledPrepare } as unknown as D1Database },
      { waitUntil } as unknown as ExecutionContext,
    );

    expect(scheduledPrepare).toHaveBeenCalledWith(
      "DELETE FROM product_events WHERE created_at < unixepoch() - (35 * 86400)",
    );
    expect(run).toHaveBeenCalledOnce();
    expect(waitUntil).toHaveBeenCalledOnce();
  });

  it("does not expose exception details", async () => {
    const response = await app.request("/missing", undefined, bindings);
    const body = await response.json<{ error: string; requestId: string }>();

    expect(response.status).toBe(404);
    expect(body.error).toBe("not_found");
    expect(body.requestId).toBeTruthy();
  });
});

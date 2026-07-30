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
    expect(html).toContain("51 TOOLS");
    expect(html).toContain("51件");
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
    expect(html).toContain('"@type":"ItemList"');
    expect(html).toContain('"numberOfItems":51');
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

  it("publishes every focused tool page in the sitemap", async () => {
    const response = await app.request("https://tools.yhay81.com/sitemap.xml", undefined, bindings);
    const xml = await response.text();
    const locations = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);

    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toContain("application/xml");
    expect(response.headers.get("cache-control")).toBe("public, max-age=3600, s-maxage=86400");
    expect(locations).toHaveLength(53);
    expect(new Set(locations)).toHaveProperty("size", 53);
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

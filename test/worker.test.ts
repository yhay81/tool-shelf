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
    expect(html).toContain("31 TOOLS");
    expect(html).toContain("31件");
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
    expect(html).not.toContain("data-template-surface");
    expect(html).not.toContain('class="hero"');
    expect(html).not.toContain("実験");
    expect(html).not.toContain("成功条件");
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

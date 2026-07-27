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
    expect(html).toContain("18 TOOLS");
    expect(html).toContain("18件");
    expect(html).toContain("Profile Palette");
    expect(html).toContain("Mingle Frame");
    expect(html).toContain("Sky Dial");
    expect(html).toContain("Tango Orbit");
    expect(html).toContain("Ava Rack");
    expect(html).toContain("Chair Call");
    expect(html).toContain("Dice Seat");
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
    expect(html).not.toContain("data-template-surface");
    expect(html).not.toContain('class="hero"');
    expect(html).not.toContain("実験");
    expect(html).not.toContain("成功条件");
  });

  it("explains the actual data boundary", async () => {
    const response = await app.request("/privacy", undefined, bindings);
    const html = await response.text();

    expect(response.status).toBe(200);
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

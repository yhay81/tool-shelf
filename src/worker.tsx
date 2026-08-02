import { Hono } from "hono";
import { requestId } from "hono/request-id";

import { product } from "./config/product";
import { securityHeaders } from "./middleware/security";
import { HomePage, PrivacyPage, ToolPage, tools } from "./ui/pages";

export type Bindings = {
  ASSETS: Fetcher;
  DB: D1Database;
};

const eventNames = new Set(["visited", "opened", "returned"]);
const toolNames = new Set([
  "album-relay",
  "creator-inbox",
  "profile-palette",
  "peta-sheet",
  "tag-loom",
  "date-quilt",
  "mimi-deck",
  "fedi-route",
  "kuru-list",
  "kata-prompt",
  "hataraku-tile",
  "algo-lane",
  "mingle-frame",
  "sky-dial",
  "tango-orbit",
  "ava-rack",
  "chair-call",
  "dice-seat",
  "yose-bloom",
  "heart-board",
  "yoru-mado",
  "kasane-fuda",
  "maigo-poster",
  "yomiato",
  "uchigraph",
  "tsumi-erabi",
  "ipass-map",
  "takufuda",
  "tabidan",
  "yorishiru",
  "mcp-erabi",
  "tegotae",
  "otayori-maku",
  "noriai-hyo",
  "kairan-to",
  "site-hodoki",
  "pon-hakushu",
  "ano-hon-fuda",
  "post-gura",
  "suketto-court",
  "round-fuda",
  "tejun-dai",
  "aikagi-ban",
  "seibi-to",
  "choka-to",
  "tsukue-no-hi",
  "shiori-dana",
  "chord-dai",
  "genba-cho",
  "iriguchi-cho",
  "relay-goyomi",
  "nakama-fuda",
  "kan-shigoto",
  "shutten-fuda",
  "oyako-madori",
  "deck-watashi",
  "ji-kurabe",
  "sushiki-hodoki",
  "shiai-ban",
  "ongen-hikae",
  "atsumari-guchi",
  "shisou-to",
  "heya-to",
  "inshi-fuda",
  "uketsuke-fuda",
  "shunji",
  "hanrei-dana",
  "yubin-hiki",
  "giji-hiroi",
  "hourei-hiki",
  "shoshi-hiki",
  "yasumi-kumi",
  "seibun-narabe",
  "machi-npo",
  "hinan-saki",
  "ronbun-hiki",
  "gakko-code",
  "sangyo-code",
  "jichitai-code",
  "shokugyo-code",
  "chika-kohji",
  "eki-joko",
  "michi-no-eki",
  "kokuritsu-koen",
  "saitei-chingin",
  "kyujin-chingin",
  "kyujin-joken",
  "seishain-kyujin",
  "kyushoku-nenrei",
  "shokugyo-chingin",
  "shokugyo-bairitsu",
  "shokugyo-joken",
  "shokugyo-shushoku",
  "kibo-joken",
  "shinki-bairitsu",
  "shokugyo-jusoku",
  "sangyo-joken",
  "chiiki-bairitsu",
]);
const sessionIdPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const canonicalHostname = "tools.yhay81.com";
const legacyHostname = "tool-shelf.yusuke8h.workers.dev";

const app = new Hono<{ Bindings: Bindings }>();

app.use("*", async (c, next) => {
  const url = new URL(c.req.url);
  if (url.hostname === legacyHostname) {
    url.hostname = canonicalHostname;
    url.port = "";
    url.protocol = "https:";
    return c.redirect(url.toString(), 308);
  }
  await next();
});
app.use("*", requestId());
app.use("*", securityHeaders);

app.get("/", (c) => {
  c.header("Cache-Control", "no-store");
  return c.html(<HomePage />);
});
app.get("/tools/:slug", (c) => {
  const tool = tools.find((candidate) => candidate.slug === c.req.param("slug"));
  if (!tool) {
    return c.json(
      {
        error: "not_found",
        requestId: c.get("requestId"),
      },
      404,
    );
  }

  c.header("Cache-Control", "public, max-age=300, s-maxage=86400");
  return c.html(<ToolPage tool={tool} />);
});
app.get("/privacy", (c) => {
  c.header("Cache-Control", "no-store");
  return c.html(<PrivacyPage />);
});
app.get("/sitemap.xml", (c) => {
  const urls = [
    `${product.url}/`,
    `${product.url}/privacy`,
    ...tools.map((tool) => `${product.url}/tools/${tool.slug}`),
  ];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${url}</loc></url>`).join("\n")}
</urlset>
`;

  c.header("Cache-Control", "public, max-age=300, s-maxage=300");
  c.header("Content-Type", "application/xml; charset=UTF-8");
  return c.body(sitemap);
});

app.post("/api/events", async (c) => {
  c.header("Cache-Control", "no-store");

  const referrer = c.req.header("referer");
  if (referrer) {
    try {
      const referrerUrl = new URL(referrer);
      const requestUrl = new URL(c.req.url);
      if (referrerUrl.origin === requestUrl.origin && referrerUrl.searchParams.get("qa") === "1") {
        return c.body(null, 204);
      }
    } catch {
      // Continue with normal validation for a malformed referrer.
    }
  }

  const contentLength = Number(c.req.header("content-length") ?? "0");
  if (contentLength > 1024) {
    return c.json({ error: "payload_too_large" }, 413);
  }

  const contentType = c.req.header("content-type") ?? "";
  if (!contentType.toLowerCase().startsWith("application/json")) {
    return c.json({ error: "unsupported_media_type" }, 415);
  }

  const fetchSite = c.req.header("sec-fetch-site");
  if (fetchSite && fetchSite !== "same-origin") {
    return c.json({ error: "cross_site_request" }, 403);
  }

  let rawPayload: string;
  try {
    rawPayload = await c.req.text();
  } catch {
    return c.json({ error: "invalid_json" }, 400);
  }

  if (new TextEncoder().encode(rawPayload).byteLength > 1024) {
    return c.json({ error: "payload_too_large" }, 413);
  }

  let payload: unknown;
  try {
    payload = JSON.parse(rawPayload);
  } catch {
    return c.json({ error: "invalid_json" }, 400);
  }

  if (!payload || typeof payload !== "object") {
    return c.json({ error: "invalid_event" }, 400);
  }

  const { name, sessionId, tool } = payload as Record<string, unknown>;
  const validTool =
    typeof tool === "string" &&
    ((name === "opened" && toolNames.has(tool)) ||
      ((name === "visited" || name === "returned") && tool === ""));
  if (
    typeof name !== "string" ||
    !eventNames.has(name) ||
    typeof sessionId !== "string" ||
    !sessionIdPattern.test(sessionId) ||
    !validTool
  ) {
    return c.json({ error: "invalid_event" }, 400);
  }

  const occurredOn = new Date().toISOString().slice(0, 10);
  await c.env.DB.batch([
    c.env.DB.prepare(
      `INSERT OR IGNORE INTO product_events
        (session_id, name, tool, occurred_on)
       VALUES (?, ?, ?, ?)`,
    ).bind(sessionId, name, tool, occurredOn),
    c.env.DB.prepare("DELETE FROM product_events WHERE created_at < unixepoch() - (35 * 86400)"),
  ]);

  return c.body(null, 204);
});

app.get("/healthz", (c) =>
  c.json({
    healthy: true,
    service: "tool-shelf",
    time: new Date().toISOString(),
  }),
);

app.notFound((c) =>
  c.json(
    {
      error: "not_found",
      requestId: c.get("requestId"),
    },
    404,
  ),
);

app.onError((error, c) => {
  console.error(
    JSON.stringify({
      event: "request_failed",
      message: error.message,
      requestId: c.get("requestId"),
    }),
  );

  return c.json(
    {
      error: "internal_error",
      requestId: c.get("requestId"),
    },
    500,
  );
});

export { app };
export default {
  fetch: app.fetch,
  scheduled(_controller: ScheduledController, env: Bindings, context: ExecutionContext) {
    context.waitUntil(
      env.DB.prepare(
        "DELETE FROM product_events WHERE created_at < unixepoch() - (35 * 86400)",
      ).run(),
    );
  },
};

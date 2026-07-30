import { createMiddleware } from "hono/factory";

const csp = [
  "default-src 'self'",
  "base-uri 'none'",
  "connect-src 'self'",
  "font-src 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "img-src 'self' data: https://album-relay.yusuke8h.workers.dev https://creator-inbox.yusuke8h.workers.dev https://profile-palette.yusuke8h.workers.dev https://peta-sheet.yusuke8h.workers.dev https://tag-loom.yusuke8h.workers.dev https://date-quilt.yusuke8h.workers.dev https://mimi-deck.yusuke8h.workers.dev https://fedi-route.yusuke8h.workers.dev https://kuru-list.yusuke8h.workers.dev https://kata-prompt.yusuke8h.workers.dev https://hataraku-tile.yusuke8h.workers.dev https://algo-lane.yusuke8h.workers.dev https://mingle-frame.yusuke8h.workers.dev https://sky-dial.yusuke8h.workers.dev https://tango-orbit.yusuke8h.workers.dev https://ava-rack.yusuke8h.workers.dev https://chair-call.yusuke8h.workers.dev https://dice-seat.yusuke8h.workers.dev https://yose-bloom.yhay81.com https://heart-board.yhay81.com https://yoru-mado.yhay81.com https://kasane-fuda.yhay81.com https://maigo-poster.yhay81.com https://yomiato.yhay81.com https://uchigraph.yhay81.com https://tsumi-erabi.yhay81.com https://ipass-map.yhay81.com https://takufuda.yhay81.com https://tabidan.yhay81.com https://yorishiru.yhay81.com https://mcp-erabi.yhay81.com https://tegotae.yhay81.com https://otayori-maku.yhay81.com https://noriai-hyo.yhay81.com https://kairan-to.yhay81.com https://site-hodoki.yhay81.com https://pon-hakushu.yhay81.com https://ano-hon-fuda.yhay81.com https://post-gura.yhay81.com https://suketto-court.yhay81.com https://round-fuda.yhay81.com https://tejun-dai.yhay81.com https://aikagi-ban.yhay81.com https://seibi-to.yhay81.com https://choka-to.yhay81.com https://tsukue-no-hi.yhay81.com https://shiori-dana.yhay81.com https://chord-dai.yhay81.com https://genba-cho.yhay81.com",
  "object-src 'none'",
  "script-src 'self'",
  "style-src 'self'",
].join("; ");

export const securityHeaders = createMiddleware(async (c, next) => {
  await next();

  c.header("Content-Security-Policy", csp);
  c.header("Cross-Origin-Opener-Policy", "same-origin");
  c.header("Cross-Origin-Resource-Policy", "same-origin");
  c.header("Permissions-Policy", "camera=(), geolocation=(), microphone=()");
  c.header("Referrer-Policy", "strict-origin-when-cross-origin");
  c.header("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  c.header("X-Content-Type-Options", "nosniff");
  c.header("X-Frame-Options", "DENY");
});

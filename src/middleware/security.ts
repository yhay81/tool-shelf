import { createMiddleware } from "hono/factory";

const csp = [
  "default-src 'self'",
  "base-uri 'none'",
  "connect-src 'self'",
  "font-src 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "img-src 'self' data: https://album-relay.yusuke8h.workers.dev https://creator-inbox.yusuke8h.workers.dev https://profile-palette.yusuke8h.workers.dev https://peta-sheet.yusuke8h.workers.dev https://tag-loom.yusuke8h.workers.dev https://date-quilt.yusuke8h.workers.dev https://mimi-deck.yusuke8h.workers.dev https://fedi-route.yusuke8h.workers.dev https://kuru-list.yusuke8h.workers.dev https://kata-prompt.yusuke8h.workers.dev https://hataraku-tile.yusuke8h.workers.dev https://algo-lane.yusuke8h.workers.dev https://mingle-frame.yusuke8h.workers.dev https://sky-dial.yusuke8h.workers.dev https://tango-orbit.yusuke8h.workers.dev https://ava-rack.yusuke8h.workers.dev https://chair-call.yusuke8h.workers.dev https://dice-seat.yusuke8h.workers.dev https://yose-bloom.yusuke8h.workers.dev",
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

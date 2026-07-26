CREATE TABLE product_events (
  session_id TEXT NOT NULL,
  name TEXT NOT NULL CHECK (name IN ('visited', 'opened', 'returned')),
  tool TEXT NOT NULL DEFAULT '',
  occurred_on TEXT NOT NULL,
  created_at INTEGER NOT NULL DEFAULT (unixepoch()),
  UNIQUE (session_id, name, tool, occurred_on)
);

CREATE INDEX product_events_date_idx
  ON product_events (occurred_on, name);

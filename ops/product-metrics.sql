SELECT
  COUNT(DISTINCT CASE WHEN name = 'visited' THEN session_id END) AS users,
  COUNT(DISTINCT CASE WHEN name = 'opened' THEN session_id END) AS outbound_users,
  COUNT(DISTINCT CASE WHEN name = 'opened' THEN session_id || ':' || tool END) AS outbound_choices,
  COUNT(DISTINCT CASE WHEN name = 'returned' THEN session_id END) AS returned,
  COUNT(DISTINCT CASE WHEN name = 'visited' AND occurred_on >= date('now', '-6 days') THEN session_id END) AS users_7d,
  COUNT(DISTINCT CASE WHEN name = 'opened' AND occurred_on >= date('now', '-6 days') THEN session_id END) AS outbound_users_7d,
  COUNT(DISTINCT CASE WHEN name = 'opened' AND tool = 'album-relay' THEN session_id END) AS album_relay,
  COUNT(DISTINCT CASE WHEN name = 'opened' AND tool = 'creator-inbox' THEN session_id END) AS creator_inbox,
  COUNT(DISTINCT CASE WHEN name = 'opened' AND tool = 'profile-palette' THEN session_id END) AS profile_palette,
  COUNT(DISTINCT CASE WHEN name = 'opened' AND tool = 'tag-loom' THEN session_id END) AS tag_loom,
  COUNT(DISTINCT CASE WHEN name = 'opened' AND tool = 'date-quilt' THEN session_id END) AS date_quilt
FROM product_events;

SELECT
  COUNT(DISTINCT CASE WHEN name = 'visited' THEN session_id END) AS users,
  COUNT(DISTINCT CASE WHEN name = 'opened' THEN session_id END) AS outbound_users,
  COUNT(DISTINCT CASE WHEN name = 'opened' THEN session_id || ':' || tool END) AS outbound_choices,
  COUNT(DISTINCT CASE WHEN name = 'returned' THEN session_id END) AS returned,
  COUNT(DISTINCT CASE WHEN name = 'visited' AND occurred_on >= date('now', '-6 days') THEN session_id END) AS users_7d,
  COUNT(DISTINCT CASE WHEN name = 'opened' AND occurred_on >= date('now', '-6 days') THEN session_id END) AS outbound_users_7d
FROM product_events;

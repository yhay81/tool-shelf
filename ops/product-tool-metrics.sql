SELECT
  tool,
  COUNT(DISTINCT session_id) AS users
FROM product_events
WHERE name = 'opened' AND tool <> ''
GROUP BY tool
ORDER BY tool;

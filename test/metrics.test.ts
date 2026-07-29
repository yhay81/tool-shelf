import { describe, expect, it } from "vitest";

import metricsScript from "../ops/product-metrics.ps1?raw";
import metricsSql from "../ops/product-metrics.sql?raw";
import pages from "../src/ui/pages.tsx?raw";

describe("tool metrics coverage", () => {
  it("keeps every published tool in outbound aggregation", () => {
    const slugs = [...pages.matchAll(/slug: "([a-z0-9-]+)"/g)].map((match) => match[1]);

    expect(slugs).toHaveLength(25);
    for (const slug of slugs) {
      const metricName = slug?.replaceAll("-", "_");
      expect(metricsSql).toContain(`tool = '${slug}'`);
      expect(metricsSql).toContain(`AS ${metricName}`);
      expect(metricsScript).toContain(`${metricName} = [int]$Row.${metricName}`);
    }
  });
});

import { describe, expect, it } from "vitest";

import metricsScript from "../ops/product-metrics.ps1?raw";
import metricsSql from "../ops/product-metrics.sql?raw";
import shelfClient from "../public/shelf.js?raw";
import layout from "../src/ui/layout.tsx?raw";
import pages from "../src/ui/pages.tsx?raw";

describe("tool metrics coverage", () => {
  it("keeps every published tool in outbound aggregation", () => {
    const slugs = [...pages.matchAll(/slug: "([a-z0-9-]+)"/g)].map((match) => match[1]);

    expect(slugs).toHaveLength(52);
    for (const slug of slugs) {
      const metricName = slug?.replaceAll("-", "_");
      expect(metricsSql).toContain(`tool = '${slug}'`);
      expect(metricsSql).toContain(`AS ${metricName}`);
      expect(metricsScript).toContain(`${metricName} = [int]$Row.${metricName}`);
    }
  });

  it("excludes explicit and webdriver QA from usage metrics", () => {
    expect(shelfClient).toContain('new URLSearchParams(window.location.search).get("qa") === "1"');
    expect(shelfClient).toContain("navigator.webdriver === true");
    expect(shelfClient).toContain("if (automatedQa)");
    expect(shelfClient).toContain('destination.searchParams.set("qa", "1")');
    expect(layout).toContain("/shelf.js?v=20260730-detail-pages");
  });
});

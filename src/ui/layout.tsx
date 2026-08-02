import type { Child } from "hono/jsx";

import { product } from "../config/product";

type LayoutProps = {
  canonicalUrl?: string;
  children: Child;
  description?: string;
  imageAlt?: string;
  imageUrl?: string;
  jsonLd?: unknown;
  title?: string;
};

export function Layout({
  canonicalUrl = product.url,
  children,
  description = product.description,
  imageAlt = product.ogImageAlt,
  imageUrl = product.ogImage,
  jsonLd,
  title = product.name,
}: LayoutProps) {
  const serializedJsonLd = jsonLd
    ? JSON.stringify(jsonLd).replaceAll("<", "\\u003c").replaceAll(">", "\\u003e")
    : null;

  return (
    <html itemscope itemtype="https://schema.org/WebApplication" lang="ja">
      <head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content={description} name="description" />
        <meta content={product.name} itemProp="name" />
        <meta content={description} itemProp="description" />
        <meta content={canonicalUrl} itemProp="url" />
        <meta content={product.applicationCategory} itemProp="applicationCategory" />
        <meta content="Any" itemProp="operatingSystem" />
        <meta content="true" itemProp="isAccessibleForFree" />
        <meta content={description} property="og:description" />
        <meta content={imageUrl} property="og:image" />
        <meta content={imageAlt} property="og:image:alt" />
        <meta content="ja_JP" property="og:locale" />
        <meta content={title} property="og:title" />
        <meta content="website" property="og:type" />
        <meta content={canonicalUrl} property="og:url" />
        <meta content="summary_large_image" name="twitter:card" />
        <link href={canonicalUrl} rel="canonical" />
        <link href="/styles.css?v=20260802-handpicked-shelf" rel="stylesheet" />
        {serializedJsonLd ? (
          <script
            dangerouslySetInnerHTML={{ __html: serializedJsonLd }}
            type="application/ld+json"
          />
        ) : null}
        <script defer src="/shelf.js?v=20260730-detail-pages"></script>
        <title>{title}</title>
      </head>
      <body>
        <a class="skip-link" href="#main">
          本文へ移動
        </a>
        <header class="site-header">
          <a class="brand" href="/">
            {product.name}
          </a>
          <nav aria-label="メイン">
            <a class="nav-cta" href="/#tools">
              選ぶ
            </a>
            <a href="/privacy">プライバシー</a>
          </nav>
        </header>
        <main id="main">{children}</main>
        <footer>
          <span>{product.name}</span>
          <nav aria-label="フッター">
            <a href="/privacy">プライバシー</a>
            <a href="/healthz">稼働状態</a>
          </nav>
        </footer>
      </body>
    </html>
  );
}

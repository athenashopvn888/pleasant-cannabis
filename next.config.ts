const SHOW_CIGARETTES = process.env.NEXT_PUBLIC_SHOW_CIGARETTES?.trim().toLowerCase() === "true";
const cigaretteRedirects = SHOW_CIGARETTES ? [] : [
  { source: "/items/cigarettes/:path*", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/cigarettes/:path*", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/cigarette/:path*", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/items/tobacco/:path*", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/tobacco/:path*", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/native-cigarettes-:slug", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/native-cigarette-:slug", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/info/native-cigarettes-:slug", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/info/native-cigarette-:slug", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/resources/native-smokes/native-cigarettes-guide", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/resources/native-smokes/backwoods-grabba-guide", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/guides/bb-cigarettes", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/guides/belmont-king-size", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/guides/canadian-cigarettes", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/guides/canadian-classics", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/guides/canadian-goose", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/guides/dks-cigarettes", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/guides/nexus-cigarettes", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/guides/playfares", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/guides/putters", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/guides/rolled-gold", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/guides/time-cigarettes", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/guides/grabba", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/guides/grabba-delivery-midtown", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/guides/bb-delivery-midtown", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/guides/bb-full-delivery-midtown", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/guides/bb-light-delivery-midtown", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/guides/belmont-delivery-midtown", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/guides/canadian-classics-delivery-midtown", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/guides/canadian-classics-original-delivery-midtown", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/guides/canadian-classics-silver-delivery-midtown", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/guides/canadian-delivery-midtown", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/guides/canadian-full-delivery-midtown", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/guides/canadian-goose-delivery-midtown", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/guides/canadian-goose-full-delivery-midtown", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/guides/canadian-goose-light-delivery-midtown", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/guides/canadian-light-delivery-midtown", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/guides/nexus-delivery-midtown", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/guides/nexus-full-delivery-midtown", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/guides/nexus-light-delivery-midtown", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/guides/playfare-delivery-midtown", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/guides/playfare-ultra-light-delivery-midtown", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/guides/putters-delivery-midtown", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/guides/rolled-gold-delivery-midtown", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/guides/rolled-gold-full-delivery-midtown", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/guides/rolled-gold-light-delivery-midtown", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/guides/time-delivery-midtown", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/guides/time-full-delivery-midtown", destination: "/items/vapes", statusCode: 302 as const },
  { source: "/guides/time-light-delivery-midtown", destination: "/items/vapes", statusCode: 302 as const },
];

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "pleasantcannabis.ca" },
      { protocol: "https", hostname: "kennedyloudcannabis.com" },
      { protocol: "https", hostname: "stclaircannabis.com" },
      { protocol: "https", hostname: "athena-cannabis-images.vercel.app", pathname: "/products/delivery/v1/**" },
      { protocol: "https", hostname: "pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev", pathname: "/products/**" },
    ],
  },
  async headers() {
    return [
      {
        source: "/banners/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" }],
      },
      {
        source: "/products/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" }],
      },
      {
        source: "/brand-logo-small.webp",
        headers: [{ key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" }],
      },
    ];
  },
  async redirects() {
    return [
      ...cigaretteRedirects,
      { source: "/exotic", destination: "/exotic-weed", permanent: true },
      { source: "/premium", destination: "/premium-weed", permanent: true },
      { source: "/aaa", destination: "/aaa-weed", permanent: true },
      { source: "/aa", destination: "/aa-weed", permanent: true },
      { source: "/budget", destination: "/budget-weed", permanent: true },
      { source: "/delivery", destination: "/weed-delivery-toronto", permanent: true },
      { source: "/resources", destination: "/weed-resources", permanent: true },
      { source: "/resources/flower-guide", destination: "/resources/weed-flower-guide", permanent: true },
      { source: "/resources/value-guide", destination: "/resources/weed-value-guide", permanent: true },
      { source: "/resources/menu-guide", destination: "/resources/weed-menu-guide", permanent: true },
      {
        source: "/info/york-weed-dispensary",
        destination: "/",
        permanent: true,
      },
      { source: "/info/mount-pleasant-weed-dispensary", destination: "/", permanent: true },
      { source: "/info/weed-store-near-midtown-toronto", destination: "/", permanent: true },
      { source: "/info/dispensary-near-me-mount-pleasant", destination: "/", permanent: true },
      {
        source: "/info/cheap-weed-york",
        destination: "/info/cheap-weed-mount-pleasant",
        permanent: true,
      },
      {
        source: "/info/native-cigarettes-york",
        destination: "/info/native-cigarettes-mount-pleasant",
        permanent: true,
      },
      {
        source: "/info/weed-store-near-toronto",
        destination: "/",
        permanent: true,
      },
      {
        source: "/info/weed-store-near-mississauga",
        destination: "/",
        permanent: true,
      },
      {
        source: "/info/dispensary-near-me-york",
        destination: "/",
        permanent: true,
      },
      { source: "/blog", destination: "/", permanent: true },
      { source: "/blog/:path*", destination: "/", permanent: true },
      {
        source: "/product-category/vape-pens",
        destination: "/items/vapes",
        permanent: true,
      },
      {
        source: "/product-category/edibles",
        destination: "/items/edibles",
        permanent: true,
      },
      { source: "/edibles", destination: "/items/edibles", permanent: true },
      { source: "/vapes", destination: "/items/vapes", permanent: true },
      {
        source: "/vape-disposables",
        destination: "/items/vape-disposables",
        permanent: true,
      },
      {
        source: "/concentrates",
        destination: "/items/concentrates",
        permanent: true,
      },
      { source: "/prerolls", destination: "/items/prerolls", permanent: true },
      { source: "/add-ons", destination: "/items/add-ons", permanent: true },
      {
        source: "/cigarettes",
        destination: "/items/cigarettes",
        permanent: true,
      },
      { source: "/magic", destination: "/items/magic", permanent: true },
    ];
  },
};

export default nextConfig;

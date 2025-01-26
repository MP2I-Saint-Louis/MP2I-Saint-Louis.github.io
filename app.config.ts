import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
    ssr: true,
    server: {
      compatibilityDate: '2025-01-21',
      prerender: {
        crawlLinks: true
      },
      baseURL: process.env.BASE_PATH,
      preset: "static",
      compressPublicAssets: false,
    }
  });
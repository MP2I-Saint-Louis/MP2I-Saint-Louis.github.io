import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
    server: {
      compatibilityDate: '2025-01-21',
      prerender: {
        crawlLinks: true
      }
    }
  });
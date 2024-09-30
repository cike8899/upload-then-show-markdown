import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: "pnpm",
  proxy: {
    "/upload": {
      target: "http://123.60.95.134:7488/",
      changeOrigin: true,
      ws: true,
      logger: console,
      // pathRewrite: { '^/v1': '/v1' },
    },
  },
});

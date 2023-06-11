import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

// import eruda from "vite-plugin-eruda";
import path from "node:path";
import basicSsl from "@vitejs/plugin-basic-ssl";

import { version } from "../package.json";
import { compilerOptions } from "./tsconfig.json";

const v = version || "0.0.0";
const dir = compilerOptions.outDir;

const regexp = /.([0-9-a-z]+)$/g;

export default defineConfig({
  publicDir: "public",
  resolve: {
    alias: [{ find: /^@vkontakte\/vkui$/, replacement: "@vkontakte/vkui/dist/cssm" }],
  },
  build: {
    outDir: path.join(dir, "web", v),
    minify: "terser",
    rollupOptions: {
      output: {
        chunkFileNames: "js/[hash].js",
        entryFileNames: "js/[hash].js",
        assetFileNames: (opt) => {
          const [[, ext]] = Array.from(opt.name.matchAll(regexp));
          return `${ext}/[hash].${ext}`;
        }
      }
    }
  },
  server: {
    port: 18300,
    host: "0.0.0.0",
    https: true
  },
  plugins: [
    tsconfigPaths(),
    svgr(),
    react(),
    // eruda(),
    basicSsl()
  ]
})

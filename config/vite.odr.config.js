import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { viteSingleFile } from "vite-plugin-singlefile";
import zipPack from "vite-plugin-zip-pack";

import eruda from "vite-plugin-eruda";
import path from "node:path";

import { version } from "../package.json";
import { compilerOptions } from "./tsconfig.json";

const v = version || "0.0.0";
const dir = compilerOptions.outDir;

const regexp = /.([0-9-a-z]+)$/g;

export default defineConfig({
  publicDir: "public",
  build: {
    outDir: path.join("..", dir, "odr", v),
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
    host: "0.0.0.0"
  },
  plugins: [
    tsconfigPaths(),
    react(),
    eruda(),
    viteSingleFile({
      useRecommendedBuildConfig: false,
      removeViteModuleLoader: true
    }),
    zipPack({
      inDir: path.join(dir, "odr", v),
      outDir: ".",
      outFileName: `${v}.zip`
    })
  ]
})

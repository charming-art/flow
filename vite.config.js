import path from "path";
import {defineConfig} from "vite";

export default defineConfig({
  root: path.resolve("./test"),
  server: {
    port: 8080,
    open: "/",
  },
  resolve: {
    alias: {
      "@charming-art/flow": path.resolve("./src/index.js"),
    },
  },
  build: {outDir: "../"},
});

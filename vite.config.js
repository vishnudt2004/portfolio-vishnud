import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import visualizer from "rollup-plugin-visualizer";
import remixiconTreeshake from "./vite-remixicon-treeshake-plugin";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      ViteImageOptimizer({
        png: { quality: 80 },
        jpeg: { quality: 80 },
        jpg: { quality: 80 },
        webp: { lossless: true },
        avif: { lossless: true },
        svg: { multipass: true },
      }),
      mode === "analyze" &&
        visualizer({
          filename: "dist/stats.html",
          template: "treemap",
          gzipSize: true,
          brotliSize: true,
          open: true,
        }),
      remixiconTreeshake(),
    ].filter(Boolean),
    resolve: { alias: { "@": "/src" } },
    optimizeDeps: { exclude: ["@remixicon/react"] }, // delegated to plugin

    // rolldownOptions: {
    //   output: {
    //     codeSplitting: {
    //       groups: [
    //         {
    //           test: /node_modules\/(react|react-dom|scheduler)/,
    //           name: "react",
    //         },
    //       ],
    //     },
    //   },
    // },

    // devtools: {
    //   enabled: true,
    // },
  };
});

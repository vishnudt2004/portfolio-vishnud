import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import visualizer from "rollup-plugin-visualizer";
import remixiconTreeshake from "./vite-remixicon-treeshake-plugin";

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      ViteImageOptimizer({
        png: { quality: 80 },
        jpeg: { quality: 80 },
        jpg: { quality: 80 },
        webp: { quality: 80 },
        avif: { quality: 80 },
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

    build: {
      rolldownOptions: {
        // prettier-ignore
        output: {
          chunkFileNames(chunkInfo) {
            const featureMatch = [...chunkInfo.moduleIds]
              .map((id) => id.replace(/\\/g, "/"))
              .map((id) => id.match(/features\/([^/]+)\//)?.[1])
              .find(Boolean);
            if (featureMatch) return `assets/${featureMatch}-[hash].js`;
            return "assets/[name]-[hash].js";
          },

          codeSplitting: {
            // minSize: 15000,
            groups: [
              { name: "vendor-react", test: /node_modules[\\/](react|react-dom|react-router)/ },
              // { name: "vendor-radix", test: /node_modules[\\/](@radix-ui|@floating-ui)/ },
              { name: "vendor", test: /node_modules/ },
            ],
          },
        },
      },
    },
  };
});

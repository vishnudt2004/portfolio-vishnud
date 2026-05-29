import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { SondaVitePlugin } from "sonda";

export default defineConfig(({ mode }) => {
  const isAnalyzeMode = mode === "analyze";
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
      isAnalyzeMode &&
        SondaVitePlugin({
          outputDir: "dist",
          filename: "stats",
          open: true,
          gzip: true,
          brotli: true,
        }),
    ].filter(Boolean),
    resolve: { alias: { "@": "/src" } },

    build: {
      sourcemap: isAnalyzeMode,
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
            groups: [
              { name: "vendor-react", test: /node_modules[\\/](react|react-dom|react-router)/ },
              { name: "vendor-radix", test: /node_modules[\\/](@radix-ui|@floating-ui)/ },
              // { name: "icons", test: /node_modules[\\/](@remixicon|@icons-pack)/ }, // enable if vendor chunk grows
              { name: "vendor", test: /node_modules/ }, // remixicon, simple-icons, tailwind-merge
            ],
          },
        },
      },
    },
  };
});

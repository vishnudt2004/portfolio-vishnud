import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@config": "/src/config",
      "@utils": "/src/utils",
      "@styles": "/src/styles",
      "@contexts": "/src/contexts",
      "@hooks": "/src/hooks",
      "@components": "/src/components", // elements, sections, layouts
      "@pages": "/src/pages",
      "@assets": "/src/assets",
    },
  },
});

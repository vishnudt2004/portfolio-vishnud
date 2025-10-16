import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  build: { sourcemap: true, target: "esnext" },
  plugins: [react(), tailwindcss()],
  resolve: { alias: { "@": "/src" } },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
//https://vite.dev/config
export default defineConfig({
  base: "/My_Portfolio/",  // MUST MATCH your repo name
  plugins: [react()],
  /*build: {
    outDir: "docs",         // GitHub Pages uses docs folder
  },
  */
});
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@style", replacement: "/src/style" },
      { find: "@components", replacement: "/src/components" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@types", replacement: "/src/types" },
      { find: "@context", replacement: "/src/context" },
      { find: "@routers", replacement: "/src/routers" },
    ],
  },
});

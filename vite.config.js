import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Listen on all interfaces so previews (including some embedded IDE browsers) can reach the dev server.
  // Prefer http://127.0.0.1:5173/ if "localhost" fails in Cursor Simple Browser.
  server: {
    host: true,
    port: 5173,
    strictPort: false,
  },
});

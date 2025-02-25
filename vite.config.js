import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  base: "/", // Ensures correct paths for assets
  server: {
    historyApiFallback: true, // Redirects unknown paths to index.html
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  base: './', // Ensures relative assets work on GitHub Pages, Vercel, and custom domains
  server: {
    port: 5174,
    open: true
  }
});

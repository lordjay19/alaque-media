import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base so the build works on any GitHub Pages URL (user site or /repo/ sub-path).
// Two pages: the studio site and the Final Pass product page at /final-pass/.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        finalPass: resolve(__dirname, 'final-pass/index.html'),
      },
    },
  },
  server: {
    port: 5275,
  },
});

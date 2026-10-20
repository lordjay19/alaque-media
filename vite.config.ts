import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base so the build works on any GitHub Pages URL (user site or /repo/ sub-path).
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    port: 5275,
  },
});

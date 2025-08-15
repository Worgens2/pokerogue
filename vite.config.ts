import { defineConfig } from 'vite';

export default defineConfig({
  base: './',  // ensures the build works on any static host
  build: {
    outDir: 'dist'
  }
});


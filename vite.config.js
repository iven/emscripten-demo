import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    emptyOutDir: true,
    outDir: 'dist',
    sourcemap: true,
    target: 'es2022'
  },
  server: {
    proxy: {
      '/debug-src/': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/debug-src/, ''),
      }
    }
  },
  preview: {
    proxy: {
      '/debug-src/': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/debug-src/, ''),
      }
    }
  }
})

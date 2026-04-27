import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/demonslayer-api': {
        target: 'https://www.demonslayer-api.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/demonslayer-api/, ''),
      },
    },
  },
})

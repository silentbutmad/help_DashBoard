import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/auth': {
        target: 'https://expense-api-gateway.onrender.com',
        changeOrigin: true,
      },
      '/support': {
        target: 'https://expense-api-gateway.onrender.com',
        changeOrigin: true,
      },
    },
  },
})
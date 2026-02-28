import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/books/gmre/',
  server: {
    host: true, // 👈 expose to network
    port: 5173, // (optional) you can set a fixed port
  },
});

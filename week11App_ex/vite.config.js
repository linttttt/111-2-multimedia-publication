import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/week11App_ex/',
  build: {
    outDir: 'docs'
  },
  plugins: [react()],
})

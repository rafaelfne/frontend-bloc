import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      strict: false,
    },
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue'],
    alias: {
      '@' : path.resolve(__dirname, 'src'),
      '!@' : path.resolve(__dirname, '../core/')
    },
  }
})

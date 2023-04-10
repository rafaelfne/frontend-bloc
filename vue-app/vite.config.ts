import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
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

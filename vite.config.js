import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import generateIndexPlugin from './vite-plugins/indexGen/vite-plugin';
import readmeMarkVersion from './vite-plugins/readmeMarkVersion/vite-plugin';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    generateIndexPlugin(),
    readmeMarkVersion(),
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    },
  },
})

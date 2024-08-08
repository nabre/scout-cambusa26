import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const getLastDirectoryName = (inputPath) => path.basename(path.normalize(inputPath));

export default defineConfig(({ mode }) => {
  const envDir = path.resolve(__dirname, '../../../')
  const env = loadEnv(mode, envDir, '')
  return {
    plugins: [react()],
    build: {
      outDir: path.resolve(__dirname, '../../../dist', getLastDirectoryName(__dirname)),
      assetsDir: 'assets',
      sourcemap: true,
    },
    server: {
      host: env.VITE_HOST || 'localhost',
      port: 2604, // porta specifica per admin
    },
    envDir,
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src'),
        '#': path.join(__dirname, '../../shared'),
      },
    },
  }
})
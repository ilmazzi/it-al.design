import react from '@vitejs/plugin-react'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig, loadEnv } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const projectId = env.VITE_SANITY_PROJECT_ID || 'kpqf0ixi'

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      proxy: {
        '/sanity-api': {
          target: `https://${projectId}.apicdn.sanity.io`,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/sanity-api/, ''),
        },
      },
    },
  }
})

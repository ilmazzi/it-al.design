import react from '@vitejs/plugin-react'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import { sendQuote } from './functions/lib/sendQuote.js'

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
      configureServer(server) {
        server.middlewares.use('/api/contact', async (req, res, next) => {
          if (req.method !== 'POST') return next()
          try {
            const chunks = []
            for await (const chunk of req) chunks.push(chunk)
            const body = JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}')
            const result = await sendQuote(body, env)
            res.statusCode = result.ok ? 200 : result.status || 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify(result.ok ? { ok: true } : { error: result.error }))
          } catch {
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: 'Invio non riuscito. Riprova tra poco.' }))
          }
        })
      },
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

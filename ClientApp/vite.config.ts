import { defineConfig } from 'vite'

// Use dynamic import for ESM-only plugins to avoid esbuild require() issues on some environments
export default defineConfig(async () => {
  const reactPlugin = (await import('@vitejs/plugin-react')).default
  return {
    plugins: [reactPlugin()],
    server: { port: 3000 }
  }
})

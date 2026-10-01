import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    fs: {
      allow: ['...'],
    },
  },
  features: {
    progress: true,
  },
})

// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/apple-clone/',      // <-- important (use "/" if deploying to user.github.io root)
  plugins: [react()],
})

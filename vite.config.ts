import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The site is served from the apex custom domain (see public/CNAME),
// so the base path is the site root.
export default defineConfig({
  plugins: [react()],
  base: '/',
})

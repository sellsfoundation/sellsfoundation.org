import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use a relative base so the built assets resolve correctly whether the
// site is served from the GitHub Pages project subpath
// (https://<org>.github.io/sellsfoundation.org/) or, later, from the apex
// custom domain (https://sellsfoundation.org/).
export default defineConfig({
  plugins: [react()],
  base: './',
})

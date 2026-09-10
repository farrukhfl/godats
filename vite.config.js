import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Explicit, not just relying on the Vite default: production builds must
    // never ship .map files, which would hand out readable source for the
    // whole app to anyone who opens devtools.
    sourcemap: false,
  },
})

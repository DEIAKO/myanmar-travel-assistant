import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Vite is the frontend build tool. Plugins here add React (JSX/Fast Refresh)
// and Tailwind CSS (utility classes compiled from your source files).
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
  },
})

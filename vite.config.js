import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Port dédié pons-dpi (évite la collision avec les autres projets Vite sur 5173/5174)
  server: { port: 5183, strictPort: true },
  preview: { port: 5183, strictPort: true },
})

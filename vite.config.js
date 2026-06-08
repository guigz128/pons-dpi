import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react(), tailwindcss()],
  // Port dédié pons-dpi (évite la collision avec les autres projets Vite sur 5173/5174)
  server: { port: 5183, strictPort: true },
  preview: { port: 5183, strictPort: true },
  // Côté client (dev + build client), react-helmet-async est remplacé par un
  // shim. Le vrai Helmet ne tourne qu'au SSR (entry-server) pour produire les
  // balises de tête, hissées dans le <head> par scripts/prerender.mjs. Le shim
  // empêche React 19 de réinjecter des balises hoistables dans #root (mismatch
  // d'hydratation #418 + doublons) et synchronise le <head> pour la nav SPA.
  ...(isSsrBuild
    ? {}
    : {
        resolve: {
          alias: {
            'react-helmet-async': fileURLToPath(
              new URL('./src/lib/helmet-shim.jsx', import.meta.url),
            ),
          },
        },
      }),
}))

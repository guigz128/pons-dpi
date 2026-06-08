import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import { initPostHog } from './lib/posthog'
import './index.css'

initPostHog()

const root = document.getElementById('root')
const app = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
)

// Le HTML est pré-rendu au build (SSG) → on hydrate. Si #root est vide
// (route non pré-rendue ou SSR retombé en fallback), on rend côté client.
if (root.hasChildNodes()) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}

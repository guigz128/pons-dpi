import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'

// Rendu serveur d'une route → HTML du body, injecté dans #root par scripts/prerender.mjs.
// Le <head> (title/meta/canonical) reste géré par prerender.mjs : on ne renvoie que le body.
export function render(url) {
  const helmetContext = {}
  const html = renderToString(
    <StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </StrictMode>,
  )
  return { html }
}

import posthog from 'posthog-js'

const KEY = import.meta.env.VITE_POSTHOG_KEY
const HOST = import.meta.env.VITE_POSTHOG_HOST || 'https://eu.i.posthog.com'

let initialized = false

export function initPostHog() {
  if (initialized || typeof window === 'undefined' || !KEY) return
  initialized = true

  posthog.init(KEY, {
    api_host: HOST,
    person_profiles: 'identified_only',
    capture_pageview: false,
    capture_pageleave: true,
    autocapture: true,
    disable_session_recording: false,
    enable_heatmaps: true,
    capture_performance: { web_vitals: true },
    loaded: (ph) => {
      if (import.meta.env.DEV) {
        window.posthog = ph
      }
    },
  })
}

export function capture(event, properties) {
  if (!initialized) return
  posthog.capture(event, properties)
}

export { posthog }

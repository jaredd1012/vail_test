const configuredBaseUrl = import.meta.env.VITE_API_URL?.replace(/\/$/, '')

/** In dev, use the Vite proxy (/api → :8000) to avoid CORS issues. */
export const apiBaseUrl =
  configuredBaseUrl ?? (import.meta.env.DEV ? '/api' : 'http://localhost:8000')

import { apiBaseUrl } from '../lib/apiBase'
import type { PingRequest, PingResponse } from '../types/ping'

export const DEFAULT_PING_MESSAGE = 'ping'

export async function postPing(
  message: string = DEFAULT_PING_MESSAGE,
): Promise<PingResponse> {
  const body: PingRequest = { message }

  let response: Response

  try {
    response = await fetch(`${apiBaseUrl}/ping`, {
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    })
  } catch {
    throw new Error(
      'Could not reach the API. Start it with `npm run server` on port 8000.',
    )
  }

  // throw an error if the response is not ok(400, 404, 500, etc.)
  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(errorText || `Request failed with status ${response.status}`)
  }

  return response.json() as Promise<PingResponse>
}

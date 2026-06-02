import { apiBaseUrl } from '../lib/apiBase'
import { validatePingMessage } from '../lib/validatePingMessage'
import type { PingRequest, PingResponse } from '../types/ping'

export const DEFAULT_PING_MESSAGE = 'ping'

export async function postPing(
  message: string = DEFAULT_PING_MESSAGE,
): Promise<PingResponse> {
  const validationError = validatePingMessage(message)
  if (validationError) {
    throw new Error(validationError)
  }

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
    let message = errorText || `Request failed with status ${response.status}`

    try {
      const parsed = JSON.parse(errorText) as { error?: string }
      if (parsed.error) {
        message = parsed.error
      }
    } catch {
      // Response body is not JSON; use raw text.
    }

    throw new Error(message)
  }

  return response.json() as Promise<PingResponse>
}

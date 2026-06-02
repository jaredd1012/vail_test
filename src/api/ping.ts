import { apiBaseUrl } from '../lib/apiBase'
import { formatErrorMessage } from '../lib/formatErrorMessage'
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
    throw new Error(formatErrorMessage('api unreachable'))
  }

  // throw an error if the response is not ok(400, 404, 500, etc.)
  if (!response.ok) {
    const errorText = await response.text()
    let detail = 'request failed'

    try {
      const parsed = JSON.parse(errorText) as { error?: string }
      if (parsed.error) {
        detail = parsed.error
      }
    } catch {
      if (errorText) {
        detail = errorText
      }
    }

    throw new Error(formatErrorMessage(detail, response.status))
  }

  return response.json() as Promise<PingResponse>
}

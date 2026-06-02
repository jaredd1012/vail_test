export const MAX_PING_MESSAGE_LENGTH = 20

export function validatePingMessage(message: string): string | null {
  if (message.length > MAX_PING_MESSAGE_LENGTH) {
    return 'The message must be 20 characters or fewer.'
  }

  if (message !== message.toLowerCase()) {
    return 'The message must be all lowercase.'
  }

  return null
}

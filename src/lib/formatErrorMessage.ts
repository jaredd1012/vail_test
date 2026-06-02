const MAX_ERROR_LENGTH = 20

export function formatErrorMessage(message: string, status?: number): string {
  const normalized = message.toLowerCase()

  if (status === undefined) {
    return normalized.slice(0, MAX_ERROR_LENGTH)
  }

  const prefix = `${status} `
  const maxDetailLength = MAX_ERROR_LENGTH - prefix.length

  return `${prefix}${normalized.slice(0, maxDetailLength)}`
}

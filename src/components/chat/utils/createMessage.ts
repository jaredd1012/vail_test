import type { ChatMessage } from '../../../types/chat'


// creates the data modeling for the chat message
export function createMessage(
  role: ChatMessage['role'],
  content: string,
  meta?: ChatMessage['meta'],
): ChatMessage {
  return {
    content,
    id: crypto.randomUUID(),
    meta,
    role,
    timestamp: Date.now(),
  }
}

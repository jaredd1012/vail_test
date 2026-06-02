import type { PingResponse } from './ping'

export type ChatMessageRole = 'error' | 'success'

export interface ChatMessage {
  content: string
  id: string
  meta?: PingResponse
  role: ChatMessageRole
  timestamp: number
}

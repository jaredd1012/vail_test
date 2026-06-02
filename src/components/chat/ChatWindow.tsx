import { Paper, Stack } from '@mantine/core'
import { useState } from 'react'
import { usePing } from '../../hooks/usePing'
import { formatErrorMessage } from '../../lib/formatErrorMessage'
import type { ChatMessage } from '../../types/chat'
import { ChatActions } from './ChatActions'
import { ChatHeader } from './ChatHeader'
import { ChatMessageList } from './ChatMessageList'
import { createMessage } from './utils/createMessage'

const CHAT_WINDOW_HEIGHT =
  'calc(100dvh - 56px - 56px - var(--mantine-spacing-md) * 2)'

export function ChatWindow() {
  const [messages, setMessages] = useState<ChatMessage[]>([])

  const pingMutation = usePing()

  async function callPing() {
    if (pingMutation.isPending) {
      return
    }

    // call tanstack mutation hook to call the ping endpoint create succes message and error message
    try {
      const response = await pingMutation.mutateAsync()
      setMessages((current) => [
        ...current,
        createMessage('success', 'Ping succeeded', response),
      ])
    } catch (error) {
      const errorMessage = formatErrorMessage(
        error instanceof Error ? error.message : 'something went wrong',
      )
      setMessages((current) => [
        ...current,
        createMessage('error', errorMessage),
      ])
    }
  }

  function handleReset() {
    //set the messages to an empty array
    setMessages([])
    //clear the query cache
    pingMutation.reset()
  }

  const canRetry = pingMutation.isError && !pingMutation.isPending

  return (
    <Paper
      p="md"
      radius="md"
      shadow="sm"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: CHAT_WINDOW_HEIGHT,
      }}
      withBorder
    >
      <Stack gap="md" style={{ flex: 1, minHeight: 0 }}>
        <ChatHeader />
        <ChatMessageList
          isPending={pingMutation.isPending}
          messages={messages}
        />
        <ChatActions
          canRetry={canRetry}
          isPending={pingMutation.isPending}
          onReset={handleReset}
          onRetry={() => void callPing()}
          onSubmit={() => void callPing()}
        />
      </Stack>
    </Paper>
  )
}

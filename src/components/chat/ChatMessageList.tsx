import { ScrollArea, Stack, Text } from '@mantine/core'
import { useEffect, useRef } from 'react'
import type { ChatMessage } from '../../types/chat'
import { ChatLoadingIndicator } from './ChatLoadingIndicator'
import { ChatMessageBubble } from './ChatMessageBubble'

interface ChatMessageListProps {
  isPending: boolean
  messages: ChatMessage[]
}

export function ChatMessageList({ isPending, messages }: ChatMessageListProps) {
  const viewportRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    viewportRef.current?.scrollTo({
      behavior: 'smooth',
      top: viewportRef.current.scrollHeight,
    })
  }, [isPending, messages])

  return (
    <ScrollArea
      flex={1}
      offsetScrollbars
      scrollbarSize={8}
      style={{ flex: 1 }}
      viewportRef={viewportRef}
    >
      <Stack gap="sm" pb="xs" pr="xs">
        {messages.length === 0 ? (
          <Text c="dimmed" fs="italic" size="sm" ta="center">
            No responses yet. Click Submit to call the API.
          </Text>
        ) : (
          messages.map((message) => (
            <ChatMessageBubble key={message.id} message={message} />
          ))
        )}
        {isPending ? <ChatLoadingIndicator /> : null}
      </Stack>
    </ScrollArea>
  )
}

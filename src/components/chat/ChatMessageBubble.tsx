import { Badge, Box, Code, Group, Paper, Stack, Text } from '@mantine/core'
import type { ChatMessage } from '../../types/chat'

interface ChatMessageBubbleProps {
  message: ChatMessage
}

function formatServerResponse(message: ChatMessage): string {
  if (!message.meta) {
    return message.content
  }

  const { echo, env, timestamp, version } = message.meta
  return JSON.stringify({ echo, env, timestamp, version }, null, 2)
}

export function ChatMessageBubble({ message }: ChatMessageBubbleProps) {
  const isError = message.role === 'error'
  const isSuccess = message.role === 'success'

  return (
    <Box style={{ alignSelf: 'flex-start', maxWidth: '85%' }}>
      <Paper
        bg={isError ? 'red.0' : isSuccess ? 'green.0' : 'gray.1'}
        p="sm"
        radius="lg"
        shadow="xs"
        withBorder
      >
        <Stack gap={4}>
          {isSuccess ? (
            <Group gap="xs">
              <Badge
                color="green"
                leftSection="✓"
                size="sm"
                variant="light"
              >
                Success
              </Badge>
              <Text fw={500} size="sm">
                {message.content}
              </Text>
            </Group>
          ) : (
            <>
              <Text fw={600} size="xs" tt="uppercase">
                {isError ? 'Error' : 'Message'}
              </Text>
              <Text size="sm">{message.content}</Text>
            </>
          )}
          {isSuccess && message.meta ? (
            <Code block bg="transparent" c="inherit" fz="sm">
              {formatServerResponse(message)}
            </Code>
          ) : null}
          <Text c="dimmed" size="xs">
            {new Date(message.timestamp).toLocaleTimeString()}
          </Text>
        </Stack>
      </Paper>
    </Box>
  )
}

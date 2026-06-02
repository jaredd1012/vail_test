import { Text, Title } from '@mantine/core'

export function ChatHeader() {
  return (
    <div>
      <Title order={2}>Ping chat</Title>
      <Text c="dimmed" size="sm">
        Click Submit to call the /ping endpoint and view the response.
      </Text>
    </div>
  )
}

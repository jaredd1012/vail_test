import { Group, Loader, Text } from '@mantine/core'

export function ChatLoadingIndicator() {
  return (
    <Group gap="xs" justify="flex-start">
      <Loader size="lg" type="dots" />
      <Text c="dimmed" size="sm">
        Calling /ping…
      </Text>
    </Group>
  )
}

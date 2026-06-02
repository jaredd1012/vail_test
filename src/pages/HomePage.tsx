import { Stack, Text, Title } from '@mantine/core'

export function HomePage() {
  return (
    <Stack gap="lg">
      <div>
        <Title order={1}>Practice App</Title>
        <Text c="dimmed" mt="xs">
          React + TanStack Query + Mantine — ready to build from here.
        </Text>
      </div>
    </Stack>
  )
}

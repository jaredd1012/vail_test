import { AppShell, Group, Text, Title } from '@mantine/core'
import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <AppShell footer={{ height: 56 }} header={{ height: 56 }} padding="md">
      <AppShell.Header>
        <Group h="100%" px="md">
          <Title order={3}>Practice</Title>
        </Group>
      </AppShell.Header>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>

      <AppShell.Footer>
        <Group h="100%" justify="center" px="md">
          <Text c="dimmed" size="sm">
            © {new Date().getFullYear()} Practice App
          </Text>
        </Group>
      </AppShell.Footer>
    </AppShell>
  )
}

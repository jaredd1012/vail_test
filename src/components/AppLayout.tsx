import { Anchor, Container, Group } from '@mantine/core'
import { NavLink, Outlet } from 'react-router-dom'

const navLinkStyle = ({ isActive }: { isActive: boolean }) => ({
  borderRadius: '999px',
  color: isActive ? 'var(--mantine-color-indigo-6)' : undefined,
  fontWeight: isActive ? 600 : 400,
  padding: '0.4rem 0.85rem',
  textDecoration: 'none',
})

export function AppLayout() {
  return (
    <Container mih="100svh" py="xl" size="md">
      <Group
        justify="space-between"
        mb="xl"
        pb="md"
        style={{ borderBottom: '1px solid var(--mantine-color-gray-3)' }}
        wrap="wrap"
      >
        <Anchor component={NavLink} fw={600} style={navLinkStyle} to="/">
          Practice
        </Anchor>
      </Group>

      <Outlet />
    </Container>
  )
}

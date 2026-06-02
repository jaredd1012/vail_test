import { Button, Group } from '@mantine/core'

interface ChatActionsProps {
  canRetry: boolean
  isPending: boolean
  onReset: () => void
  onRetry: () => void
  onSubmit: () => void
}

export function ChatActions({
  canRetry,
  isPending,
  onReset,
  onRetry,
  onSubmit,
}: ChatActionsProps) {
  return (
    <Group gap="sm">
      <Button disabled={isPending} onClick={onSubmit}>
        Submit
      </Button>
      <Button disabled={!canRetry} onClick={onRetry} variant="light">
        Retry
      </Button>
      <Button color="gray" onClick={onReset} variant="default">
        Reset
      </Button>
    </Group>
  )
}

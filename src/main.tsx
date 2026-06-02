import { MantineProvider } from '@mantine/core'
import { QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import '@mantine/core/styles.css'
import { queryClient } from './lib/queryClient'
import { router } from './routes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <RouterProvider router={router} />
      </MantineProvider>
    </QueryClientProvider>
  </StrictMode>,
)

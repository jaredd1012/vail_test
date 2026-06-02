import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from '../components/AppLayout'
import { ChatPage } from '../pages/ChatPage'

export const router = createBrowserRouter([
  {
    children: [
      {
        element: <ChatPage />,
        index: true,
      },
    ],
    element: <AppLayout />,
    path: '/',
  },
])

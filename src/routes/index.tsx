import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from '../components/AppLayout'
import { HomePage } from '../pages/HomePage'

export const router = createBrowserRouter([
  {
    children: [
      {
        element: <HomePage />,
        index: true,
      },
    ],
    element: <AppLayout />,
    path: '/',
  },
])

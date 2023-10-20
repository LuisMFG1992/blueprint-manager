import { createBrowserRouter } from 'react-router-dom'
import { ErrorPage, Home, LogInPage, SingUpPage } from '../pages'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: (
      <PublicRoute>
        <LogInPage />
      </PublicRoute>
    )
  },
  {
    path: '/register',
    errorElement: <ErrorPage />,
    element: (
      <PublicRoute>
        <SingUpPage />
      </PublicRoute>
    )
  },
  {
    path: '/home',
    errorElement: <ErrorPage />,
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    )
  }
])

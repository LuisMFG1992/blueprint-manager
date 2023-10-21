import { createBrowserRouter } from 'react-router-dom'
import {
  ErrorPage,
  ForgotPassword,
  Home,
  LogInPage,
  SingUpPage
} from '../pages'
import PublicRoute from './protectedRoutes/PublicRoute'
import PrivateRoute from './protectedRoutes/PrivateRoute'

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
    path: '/account-recovery',
    errorElement: <ErrorPage />,
    element: (
      <PublicRoute>
        <ForgotPassword />
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

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
    element: (
      // <PublicRoute>
      <LogInPage />
      // </PublicRoute>
    )
  },
  {
    path: '/register',
    element: (
      // <PublicRoute>
      <SingUpPage />
      // </PublicRoute>
    )
  },
  {
    path: '/account-recovery',
    element: (
      // <PublicRoute>
      <ForgotPassword />
      // </PublicRoute>
    )
  },
  {
    path: '/home',
    element: (
      // <PrivateRoute>
      <Home />
      // </PrivateRoute>
    )
  },
  {
    // Fallback route
    path: '*',
    element: <ErrorPage />
  }
])

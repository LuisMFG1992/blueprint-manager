import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import { AuthContextProvider } from './context/AuthContext'
import { Home, LogInPage, SingUpPage } from './pages'
import ErrorPage from './pages/ErrorPage.jsx'
import ProtectedRoute from './auth/ProtectedRoute'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LogInPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/register',
    element: <SingUpPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/home',
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <RouterProvider router={router} />
  </AuthContextProvider>
)

import { useContext } from 'react'
import { authContext } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRoute = () => {
  const { user } = useContext(authContext)
  if (user) {
    return <Navigate to='/home' replace />
  } else {
    return <Outlet />
  }
}

export default PublicRoute

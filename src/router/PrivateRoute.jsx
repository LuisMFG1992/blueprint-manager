import { useContext } from 'react'
import { authContext } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  const { user } = useContext(authContext)

  if (user) {
    return <Outlet />
  } else {
    return <Navigate to='/' replace />
  }
}

export default PrivateRoute

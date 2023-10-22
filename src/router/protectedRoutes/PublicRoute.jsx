import { useContext } from 'react'
import { authContext } from '../../context/AuthContext'
import { Navigate } from 'react-router-dom'

const PublicRoute = ({ children }) => {
  const { user } = useContext(authContext)
  return user ? <Navigate to='/home' replace /> : children
}

export default PublicRoute

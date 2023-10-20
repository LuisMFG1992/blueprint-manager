import { useContext } from 'react'
import { authContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

const PublicRoute = ({ children }) => {
  const { isUserAuth } = useContext(authContext)
  return isUserAuth ? <Navigate to='/home' replace /> : children
}

export default PublicRoute

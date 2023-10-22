import { useContext } from 'react'
import { authContext } from '../../context/AuthContext'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
  const { user } = useContext(authContext)
  return user ? children : <Navigate to='/' replace />
}

export default PrivateRoute

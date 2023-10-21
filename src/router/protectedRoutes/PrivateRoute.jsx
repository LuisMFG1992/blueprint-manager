import { useContext } from 'react'
import { authContext } from '../../context/AuthContext'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
  const { isUserAuth } = useContext(authContext)
  return isUserAuth ? children : <Navigate to='/' replace />
}

export default PrivateRoute

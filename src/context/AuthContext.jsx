import React, { createContext, useEffect, useState } from 'react'
import { auth, provider } from '../../firebaseConfig'
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from 'firebase/auth'

export const authContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [isUserAuth, setIsUserAuth] = useState(false)

  useEffect(() => {
    const isUserAuthLS = localStorage.getItem('isUserAuth')
    if (isUserAuthLS !== null) {
      setIsUserAuth(JSON.parse(isUserAuthLS))
    }
  }, [])

  const userCreate = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const userLogOut = async () => {
    return signOut(auth)
  }

  const userLogIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const userLogInWithGoogle = () => {
    return signInWithPopup(auth, provider)
  }

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email)
  }

  return (
    <authContext.Provider
      value={{
        userCreate,
        userLogOut,
        userLogIn,
        userLogInWithGoogle,
        setIsUserAuth,
        resetPassword,
        isUserAuth
      }}
    >
      {children}
    </authContext.Provider>
  )
}

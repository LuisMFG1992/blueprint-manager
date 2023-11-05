import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth, provider } from '../../firebaseConfig'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  sendSignInLinkToEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from 'firebase/auth'
import { HOME_URL } from '../constants'

export const authContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const unsubscribe = () => setIsLoading(true)

    onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser)
      setUser(currentUser)
      setIsLoading(false)
    })

    unsubscribe()
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

  const sendEmailVerification = (email) => {
    return sendSignInLinkToEmail(auth, email, {
      url: HOME_URL,
      handleCodeInApp: true
    })
  }

  return (
    <authContext.Provider
      value={{
        userCreate,
        userLogOut,
        userLogIn,
        userLogInWithGoogle,
        resetPassword,
        sendEmailVerification,
        user,
        setUser,
        isLoading
      }}
    >
      {children}
    </authContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(authContext)
}

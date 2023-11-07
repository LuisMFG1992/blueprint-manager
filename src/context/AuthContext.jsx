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
import Loader from '../components/Loader'

export const authContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isPending, setIsPending] = useState(true)

  useEffect(() => {
    const unsubscribe = () =>
      onAuthStateChanged(auth, (currentUser) => {
        console.log(currentUser)
        setUser(currentUser)
        setIsPending(false)
      })

    unsubscribe()

    return () => unsubscribe()
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

  if (isPending) {
    return (
      <div className='center h-[100vh] w-full'>
        <Loader />
      </div>
    )
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
        isPending
      }}
    >
      {children}
    </authContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(authContext)
}

import React, { createContext } from 'react'
import { auth, provider } from '../../firebaseConfig'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from 'firebase/auth'

export const authContext = createContext()

export const AuthContextProvider = ({ children }) => {
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

  return (
    <authContext.Provider
      value={{ userCreate, userLogOut, userLogIn, userLogInWithGoogle }}
    >
      {children}
    </authContext.Provider>
  )
}

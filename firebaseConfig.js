import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAE5BP9re0uAE72FmulDoOr5W9fY599grA',
  authDomain: 'blueprint-manager.firebaseapp.com',
  projectId: 'blueprint-manager',
  storageBucket: 'blueprint-manager.appspot.com',
  messagingSenderId: '638286425314',
  appId: '1:638286425314:web:8a153d5ece94c92a72c2bb'
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()

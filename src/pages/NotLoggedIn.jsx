import React, { useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup
} from 'firebase/auth'

import { auth, provider } from '../../firebaseConfig'
import Input from '../components/Input'
import Button from '../components/Button'
import GoogleButton from '../components/GoogleButton'

import substation from '../assets/substation.jpg'

const inputScheme = [
  {
    name: 'email',
    label: 'Your Email',
    placeholder: 'name@flowbite.com',
    inputType: 'email',
    icon: 'email'
  },
  {
    name: 'password',
    label: 'Your Password',
    placeholder: '*******',
    inputType: 'password',
    icon: 'password'
  }
]

const NotLoggedIn = ({ setIsLoggedIn }) => {
  const [inputsValues, SetInputsValues] = useState({
    email: 'luis.flores00@hotmail.com',
    password: '123456'
  })
  const [error, setError] = useState({
    error: false,
    message: ''
  })

  const handleInputOnchange = (e) => {
    const { name, value } = e.target
    SetInputsValues((prev) => {
      return { ...prev, [name]: value }
    })
  }

  const signUp = (e) => {
    e.preventDefault()
    const { email, password } = inputsValues
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('signUp')
      })
      .catch((error) => {
        const errorMessage = error.message.split(' ').slice(1).join(' ')
        setError((prev) => {
          return { ...prev, error: true, message: errorMessage }
        })
      })

    SetInputsValues({
      email: '',
      password: ''
    })
  }

  const signIn = (e) => {
    e.preventDefault()
    const { email, password } = inputsValues
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setIsLoggedIn(true)
        console.log('Signed In')
      })
      .catch((error) => {
        const errorMessage = error.message.split(' ').slice(1).join(' ')
        setError((prev) => {
          return { ...prev, error: true, message: errorMessage }
        })
      })

    SetInputsValues({
      email: '',
      password: ''
    })
  }

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setIsLoggedIn(true)
        console.log('Signed In')
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  return (
    <div className='flex shadow-2xl'>
      <div className='relative h-[800px] w-[600px] flex-col rounded-s-xl bg-white p-10'>
        <h1 className='pb-4 pt-16 text-center text-[3rem] font-bold text-gray-600'>
          Blueprint Manager
        </h1>
        <p className='mb-24 text-center text-[1.3rem] text-gray-500'>
          Access your information, anytime, anywhere.
        </p>

        <form
          className='flex w-full flex-col gap-4'
          onSubmit={(e) => signUp(e)}
        >
          <div className='flex flex-col gap-4 pb-6'>
            {inputScheme.map((input) => {
              const { name, label, placeholder, inputType, icon } = input
              return (
                <Input
                  key={name}
                  name={name}
                  state={inputsValues[name]}
                  label={label}
                  placeholder={placeholder}
                  inputType={inputType}
                  icon={icon}
                  handleInputOnchange={handleInputOnchange}
                />
              )
            })}
          </div>

          <div className='inline-flex gap-2'>
            <Button text='Sing In' color='green' callBack={signIn} />
            <Button text='Sing Up' color='green' callBack={signUp} />
            <GoogleButton color='blue' callback={signInWithGoogle} />
          </div>
        </form>
        {error.error && (
          <div className='mt-2 rounded-lg bg-red-200 px-2 py-4 text-center text-lg font-medium text-red-600 '>
            {error.message}
          </div>
        )}
        <p className='absolute bottom-2 left-4 text-gray-500'>
          Created by Luis Flores.
        </p>
      </div>
      <div className='relative h-[800px] w-[600px] overflow-hidden rounded-e-xl'>
        <img src={substation} className='h-full w-full object-cover' alt='' />
      </div>
    </div>
  )
}

export default NotLoggedIn

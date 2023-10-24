import React, { useContext, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import Input from '../components/Input'
import Button from '../components/Button'
import GoogleButton from '../components/GoogleButton'

import { authContext } from '../context/AuthContext'

import substation from '../assets/substation.jpg'

const inputScheme = [
  {
    name: 'email',
    label: 'Your Email',
    placeholder: 'Your@email.com',
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

const LogInPage = ({ setIsLoggedIn }) => {
  const { userLogIn, userLogInWithGoogle, setIsUserAuth } =
    useContext(authContext)
  const navigate = useNavigate()

  const [inputsValues, SetInputsValues] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')

  const handleInputOnchange = (e) => {
    const { name, value } = e.target
    SetInputsValues((prev) => {
      return { ...prev, [name]: value }
    })
  }

  const LogIn = async (e) => {
    e.preventDefault()
    const { email, password } = inputsValues
    try {
      const res = await userLogIn(email, password)
      if (!res) {
        console.log('TRY ERROR')
        return
      }

      SetInputsValues({
        email: '',
        password: ''
      })

      navigate('/home')
    } catch (error) {
      setError(error.message)
    }
  }

  const logInWithGoogle = async () => {
    const res = await userLogInWithGoogle()
    try {
      if (!res.ok) console.log('ERROR!!!')
      setIsUserAuth(true)
      navigate('/home')
    } catch (error) {
      const errorMessage = error.message.split(' ').slice(1).join(' ')
      setError((prev) => {
        return { ...prev, error: true, message: errorMessage }
      })
    }
  }

  return (
    <>
      <div className='flex shadow-2xl'>
        <div className='relative h-[800px] w-[600px] flex-col rounded-s-xl bg-white p-10'>
          <h1 className='pb-4 pt-6 text-center text-[3rem] font-bold text-gray-600'>
            Blueprint Manager
          </h1>
          <p className='mb-24 text-center text-[1.3rem] text-gray-500'>
            Access your information, anytime, anywhere.
          </p>

          <form
            className='flex w-full flex-col gap-4'
            onSubmit={(e) => LogIn(e)}
          >
            <div className='flex flex-col gap-4'>
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
            <p>
              <Link
                to={'/account-recovery'}
                className='font-semibold text-blue-600'
              >
                Forgot your password?
              </Link>
            </p>

            <div className='inline-flex items-center gap-4'>
              <Button text='Log In' color='green' callBack={LogIn} />
              <p className='text-lg text-gray-500'>or</p>
              <GoogleButton
                text='Continue with Google'
                callback={logInWithGoogle}
              />
            </div>
            <p>
              Don't have an account yet?{' '}
              <Link to={'/register'} className='font-semibold text-blue-600'>
                Register here.
              </Link>
            </p>
          </form>
          {error && (
            <div className='mt-2 rounded-lg bg-red-200 px-2 py-4 text-center text-lg font-medium text-red-600 '>
              {error}
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
    </>
  )
}

export default LogInPage

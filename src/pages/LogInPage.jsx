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
      await userLogIn(email, password)

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
    try {
      await userLogInWithGoogle()
      setIsUserAuth(true)
      navigate('/home')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <section className='vStack max-w-[1000px]'>
      <div className='hStack gap-4 rounded-xl bg-white p-5 shadow-2xl md:h-[75vh] md:min-w-[50%] md:justify-between md:rounded-none md:rounded-s-xl'>
        <div className='hStack gap-2'>
          <h1 className='text-center text-[2rem] font-bold text-gray-600 lg:text-[2.3rem]'>
            Blueprint Manager
          </h1>
          <p className='] text-center text-[15px] text-gray-500 lg:text-[1.2rem]'>
            Access your information, anytime, anywhere.
          </p>
        </div>

        <form className='hStack gap-4' onSubmit={(e) => LogIn(e)}>
          <div className='hStack gap-4'>
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
          <Link
            to={'/account-recovery'}
            className='font-semibold text-blue-600'
          >
            Forgot your password?
          </Link>

          <div className='flex flex-col items-center gap-1 md:gap-1 lg:flex-row lg:justify-center lg:gap-4'>
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
        <p className='bottom-2 left-4 text-gray-500'>Created by Luis Flores.</p>
      </div>
      <div className='hidden overflow-hidden rounded-e-xl md:block md:h-[75vh] md:min-w-[50%] md:rounded-none md:rounded-e-xl'>
        <img src={substation} className='h-full w-full object-cover' alt='' />
      </div>
    </section>
  )
}

export default LogInPage

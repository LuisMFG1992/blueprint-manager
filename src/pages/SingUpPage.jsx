import React, { useContext, useState } from 'react'

import substation from '../assets/substation.jpg'
import ContainerCenter from '../components/ContainerCenter'
import { authContext } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../components/Input'
import Button from '../components/Button'

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

const SingUpPage = ({ setIsLoggedIn }) => {
  const navigate = useNavigate()

  const { userCreate, sendEmailVerification } = useContext(authContext)

  const [inputsValues, SetInputsValues] = useState({
    email: '',
    password: ''
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

  const signUp = async (e) => {
    e.preventDefault()
    const { email, password } = inputsValues

    await userCreate(email, password)
    try {
      console.log('signUp')
      sendEmailVerification(email)
      alert('Please verify your email.')
      SetInputsValues({
        email: '',
        password: ''
      })
      navigate('/')
    } catch (error) {
      const errorMessage = error.message.split(' ').slice(1).join(' ')
      setError((prev) => {
        return { ...prev, error: true, message: errorMessage }
      })
    }
  }

  return (
    <ContainerCenter>
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

            <Button
              text='Create account'
              color='green'
              type='submit'
              callBack={signUp}
            />
            <p>
              Already have an account?{' '}
              <Link to={'/'} className='font-semibold text-blue-600'>
                Log in here.
              </Link>
            </p>
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
    </ContainerCenter>
  )
}

export default SingUpPage

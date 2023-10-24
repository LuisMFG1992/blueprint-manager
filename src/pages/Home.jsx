import React, { useContext } from 'react'
import Button from '../components/Button'
import { auth } from '../../firebaseConfig'
import { authContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import Divider from '../components/Divider'
import InputSelect from '../components/InputSelect'

const Home = ({ setIsLoggedIn }) => {
  const { userLogOut } = useContext(authContext)
  const navigate = useNavigate()

  return (
    <>
      <div className='flex rounded-xl shadow-2xl'>
        <div className='flex h-[800px] w-[1200px] flex-col gap-10 rounded-xl bg-white p-10'>
          <h1 className='text-center text-[3rem] font-bold text-gray-600'>
            Blueprint Manager
          </h1>
          <Divider />
          <div className='vStack'>
            <InputSelect />
            <InputSelect />
            <InputSelect />
          </div>
          <Divider />
          <div className='center'>
            <Button
              text='Log Out'
              color='red'
              callBack={() => {
                userLogOut(auth)
                navigate('/')
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

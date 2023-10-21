import React, { useContext } from 'react'
import Button from '../components/Button'
import { auth } from '../../firebaseConfig'
import ContainerCenter from '../components/ContainerCenter'
import { authContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import InputSelect from '../components/InputSelect'

const Home = ({ setIsLoggedIn }) => {
  const { userLogOut, setIsUserAuth } = useContext(authContext)
  const navigate = useNavigate()
  return (
    <ContainerCenter>
      <div className='flex rounded-xl shadow-2xl'>
        <div className='flex h-[800px] w-[1200px] flex-col gap-10 rounded-xl bg-white p-10'>
          <h1 className='text-center text-[3rem] font-bold text-gray-600'>
            Blueprint Manager
          </h1>
          <div className='inline-flex gap-20'>
            <InputSelect />
            <InputSelect />
            <InputSelect />
          </div>

          <div className='center'>
            <Button
              text='Log Out'
              color='red'
              callBack={() => {
                userLogOut(auth)
                setIsUserAuth(false)
                localStorage.setItem('isUserAuth', false)
                navigate('/')
              }}
            />
          </div>
        </div>
      </div>
    </ContainerCenter>
  )
}

export default Home

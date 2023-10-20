import React, { useContext } from 'react'
import Button from '../components/Button'
import { auth } from '../../firebaseConfig'
import ContainerCenter from '../components/ContainerCenter'
import { authContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Home = ({ setIsLoggedIn }) => {
  const { userLogOut } = useContext(authContext)
  const navigate = useNavigate()
  return (
    <ContainerCenter>
      <div className='flex rounded-xl shadow-2xl'>
        <div className='flex h-[800px] w-[1200px] flex-col rounded-xl bg-white p-10'>
          <h1 className='mb-36 pt-10 text-center text-[3rem] font-bold text-gray-600'>
            Blueprint Manager
          </h1>
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
    </ContainerCenter>
  )
}

export default Home

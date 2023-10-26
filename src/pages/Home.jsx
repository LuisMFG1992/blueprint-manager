import React, { useContext, useState } from 'react'
import Button from '../components/Button'
import { auth } from '../../firebaseConfig'
import { authContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import Divider from '../components/Divider'
import InputSelect from '../components/InputSelect'
import useSubstations from '../hooks/useSubstations'

const items = ['Transformer', 'Cable', 'Internal Service', 'Capacitor back']

const Home = () => {
  const { userLogOut } = useContext(authContext)
  const navigate = useNavigate()
  const data = useSubstations()

  const [selectedFields, setSelectedFields] = useState({
    substation: null,
    section: null,
    equipment: null
  })

  const handleOnchange = (e) => {
    const { name, value } = e.target
    setSelectedFields((prev) => {
      return { ...prev, [name]: value }
    })
  }

  const getSections = (value) => {
    const obj = data.find((element) => element.value === value)
    const sectionsOptions = Object.keys(obj.sections)
    return sectionsOptions
  }

  const getEquipment = (value) => {
    const substationObj = data.find(
      (element) => element.value === selectedFields.substation
    )
    const equipmentObj = substationObj.sections[selectedFields.section]
    return Object.keys(equipmentObj)
  }

  const titleCase = (str) => {
    return str
      .replace(/_/g, ' ')
      .replace(/\b\w/g, (match) => match.toUpperCase())
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const substation = data.find(
      (element) => element.value === selectedFields.substation
    )
    const { section, equipment } = selectedFields
    console.log(substation.sections[section][equipment])
  }

  return (
    <>
      <div className='flex rounded-xl shadow-2xl'>
        <div className='flex h-[800px] w-[1200px] flex-col gap-10 rounded-xl bg-white p-10'>
          <h1 className='text-center text-[3rem] font-bold text-gray-600'>
            Blueprint Manager
          </h1>
          <form className='hStack gap-10' onSubmit={(e) => onSubmit(e)}>
            <div className='vStack items-center justify-evenly'>
              <InputSelect
                name={'substation'}
                label={'Substation'}
                options={data}
                handleOnchange={handleOnchange}
              />
              {selectedFields.substation && (
                <div className='flex flex-col'>
                  <label
                    htmlFor='sections'
                    className='mb-2 block text-sm font-medium text-gray-500'
                  >
                    Section
                  </label>
                  <select
                    id='sections'
                    name={'section'}
                    className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                    onChange={(e) => handleOnchange(e)}
                  >
                    <option defaultValue>Select a section</option>
                    {getSections(selectedFields.substation).map((section) => (
                      <option key={section} value={section}>
                        {titleCase(section)}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {selectedFields.section && (
                <div className='flex flex-col'>
                  <label
                    htmlFor='equipment'
                    className='mb-2 block text-sm font-medium text-gray-500'
                  >
                    Equipment
                  </label>
                  <select
                    id='equipment'
                    name={'equipment'}
                    className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                    onChange={(e) => handleOnchange(e)}
                  >
                    <option defaultValue>Select an equipment</option>
                    {getEquipment(selectedFields.section).map((equipment) => {
                      return (
                        <option key={equipment} value={equipment}>
                          {titleCase(equipment)}
                        </option>
                      )
                    })}
                  </select>
                </div>
              )}
            </div>
            <div className='center'>
              <Button type='submit' text={'Open blueprint'} color={'blue'} />
            </div>
          </form>
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

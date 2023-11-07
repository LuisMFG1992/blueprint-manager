import React, { useContext, useState } from 'react'
import Button from '../components/Button'
import { auth } from '../../firebaseConfig'
import { authContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import InputSelect from '../components/InputSelect'
import useSubstations from '../hooks/useSubstations'
import Loader from '../components/Loader'

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
    const newValue = value.includes('Select') ? null : value
    setSelectedFields((prev) => {
      return { ...prev, [name]: newValue }
    })
  }

  const getSections = (value) => {
    const obj = data.find((element) => element.value === value)
    return obj ? Object.keys(obj.sections) : []
  }

  const getEquipment = () => {
    const substationObj = data.find(
      (element) => element.value === selectedFields.substation
    )
    const equipmentObj = substationObj?.sections[selectedFields.section]
    return equipmentObj ? Object.keys(equipmentObj) : []
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const substation = data.find(
      (element) => element.value === selectedFields.substation
    )
    const { section, equipment } = selectedFields
    window.open(substation.sections[section][equipment])
  }

  const inputSchema = [
    {
      name: 'substation',
      label: 'Substation',
      state: selectedFields.substation,
      options: data,
      handleOnchange
    },
    {
      name: 'section',
      label: 'Section',
      state: selectedFields.section,
      options: selectedFields.substation
        ? getSections(selectedFields.substation)
        : [],
      handleOnchange
    },
    {
      name: 'equipment',
      label: 'Equipment',
      state: selectedFields.equipment,
      options: selectedFields.section
        ? getEquipment(selectedFields.section)
        : [],
      handleOnchange
    }
  ]

  const allInputsSelected = (obj) => {
    return Object.values(obj).every((value) => value !== null)
  }

  return (
    <>
      {data.length === 0 ? (
        <Loader />
      ) : (
        <section className='vStack max-w-[1200px]'>
          <div className='hStack gap-10 rounded-xl bg-white p-5 shadow-2xl'>
            <h1 className='text-center text-[1.7rem] font-bold text-gray-600 sm:text-[2rem]'>
              Blueprint Manager
            </h1>
            <div className='hStack items-center gap-4'>
              <form
                className='hStack items-center gap-10'
                onSubmit={(e) => onSubmit(e)}
              >
                <div className='flex flex-col gap-10 md:flex-row md:flex-wrap md:justify-center'>
                  {inputSchema.map(
                    ({ name, label, options, handleOnchange }) => (
                      <InputSelect
                        key={name}
                        name={name}
                        label={label}
                        options={options}
                        handleOnchange={handleOnchange}
                      />
                    )
                  )}
                </div>
                <Button
                  type='submit'
                  text={'Open blueprint'}
                  color={'blue'}
                  disabled={!allInputsSelected(selectedFields)}
                />
              </form>
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
        </section>
      )}
    </>
  )
}

export default Home

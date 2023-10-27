import React, { useContext, useState } from 'react'
import Button from '../components/Button'
import { auth } from '../../firebaseConfig'
import { authContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import InputSelect from '../components/InputSelect'
import useSubstations from '../hooks/useSubstations'

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

  const onSubmit = (e) => {
    e.preventDefault()
    const substation = data.find(
      (element) => element.value === selectedFields.substation
    )
    const { section, equipment } = selectedFields
    // console.log(substation.sections[section][equipment])
    window.open(substation.sections[section][equipment])
  }

  const inputSchema = [
    {
      name: 'substation',
      label: 'Substation',
      options: data,
      handleOnchange,
      disabled: false
    },
    {
      name: 'section',
      label: 'Section',
      options: selectedFields.substation
        ? getSections(selectedFields.substation)
        : [],
      handleOnchange,
      disabled: !selectedFields.substation
    },
    {
      name: 'equipment',
      label: 'Equipment',
      options: selectedFields.section
        ? getEquipment(selectedFields.section)
        : [],
      handleOnchange,
      disabled: !selectedFields.section
    }
  ]

  return (
    <section>
      <div className='flex rounded-xl shadow-2xl'>
        <div className='flex h-[800px] w-[1200px] flex-col gap-10 rounded-xl bg-white p-10'>
          <h1 className='text-center text-[3rem] font-bold text-gray-600'>
            Blueprint Manager
          </h1>
          <form className='hStack gap-10' onSubmit={(e) => onSubmit(e)}>
            <div className='vStack items-center justify-evenly'>
              {inputSchema.map(
                ({ name, label, options, handleOnchange, disabled }) => (
                  <InputSelect
                    key={name}
                    name={name}
                    label={label}
                    options={options}
                    handleOnchange={handleOnchange}
                    disabled={disabled}
                  />
                )
              )}
            </div>
            <div className='center'>
              <Button
                type='submit'
                text={'Open blueprint'}
                color={'blue'}
                disabled={true}
              />
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
    </section>
  )
}

export default Home

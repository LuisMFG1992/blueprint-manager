import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../firebase/firebaseConfig'

const useSubstation = () => {
  const [substations, setSubstations] = useState([])

  const docRef = collection(db, 'substations')

  const getData = async () => {
    const res = await getDocs(docRef)
    const data = res.docs.map((doc) => doc.data())
    setSubstations(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return substations
}

export default useSubstation

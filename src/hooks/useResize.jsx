import { useEffect, useState } from 'react'

const useResize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEffect(() => {
    const updateWindowSize = () => {
      const newWidth = window.innerWidth
      const newHeight = window.innerHeight
      setWindowSize({ width: newWidth, height: newHeight })
      console.log(`Window Width: ${newWidth}, Window Height: ${newHeight}`)
    }

    window.addEventListener('resize', updateWindowSize)

    return () => {
      window.removeEventListener('resize', updateWindowSize)
    }
  }, [])

  return windowSize
}

export default useResize

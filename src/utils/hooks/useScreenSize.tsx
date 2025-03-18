import { useEffect, useMemo, useState } from 'react'

interface UseScreenSize {
  isHorizontal: boolean
  width: number
  height: number
}

export const useScreenSize = (): UseScreenSize => {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateSize = (): void => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    updateSize()
    window.addEventListener('resize', updateSize)

    return (): void => window.removeEventListener('resize', updateSize)
  }, [])

  const isHorizontal = useMemo(() => {
    return screenSize.width > screenSize.height
  }, [screenSize])

  return { ...screenSize, isHorizontal }
}

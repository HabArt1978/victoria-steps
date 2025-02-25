'use client'

import Social from '@/components/Social/Social'
import type { Position } from '@/components/Social/types'
import { H1 } from '@/components/UI/Typography'
import { useEffect, useState, type JSX } from 'react'
import { useMediaQuery } from 'usehooks-ts'
import { bannerContentContainer } from './twStyles'

const BannerContent = (): JSX.Element => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(() => true)
  }, [])

  // Вызываем useMediaQuery всегда, но отключаем SSR
  const isMiddleScreen = useMediaQuery('(min-width: 900px)', {
    initializeWithValue: false, // Отключает начальный рендер на сервере
    defaultValue: false // <-- Это предотвращает ошибку гидратации
  })

  const position: Position = isMiddleScreen ? 'vertical' : 'horizontal'

  if (!isMounted) return <></> // Избегаем гидратации, пока не смонтировано

  return (
    <div className={bannerContentContainer()}>
      <div className="mb-5 ml-5 border-l-4 border-orange-600 sm:ml-0 md:mb-0 lg:flex-row">
        <div className="card ml-2 rounded-box bg-amber-950 bg-opacity-60 sm:ml-4">
          <H1 className="p-2 text-center text-xl text-white sm:p-4 sm:text-2xl xmd:text-3xl md:text-start md:text-4xl">
            <span className="block">Производство</span>
            <span className="block">комбинированных ступеней</span>
            <span className="block">для строительства лестниц</span>
            <span className="block text-3xl sm:text-4xl xmd:text-5xl md:text-6xl">
              в Саранске
            </span>
          </H1>
        </div>
      </div>

      <Social
        position={position}
        isBackground={true}
        isVisible={false}
      />
    </div>
  )
}

export default BannerContent

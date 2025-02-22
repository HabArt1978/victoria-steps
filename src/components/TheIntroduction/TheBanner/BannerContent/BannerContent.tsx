'use client'

import Social from '@/components/Social/Social'
import type { Position } from '@/components/Social/types'
import { H1 } from '@/components/UI/Typography'
import { useEffect, useState, type JSX } from 'react'
import { useMediaQuery } from 'usehooks-ts'
import { bannerContentContainer } from './twStyles'

const BannerContent = (): JSX.Element => {
  const [isMounted, setIsMounted] = useState(false)
  const isMiddleScreen = useMediaQuery('(min-width: 900px)')
  const position: Position = isMiddleScreen ? 'vertical' : 'horizontal'

  useEffect(() => {
    setIsMounted(() => true)
  }, [])

  if (!isMounted) return <></>

  return (
    <div className={bannerContentContainer()}>
      <div className="mb-5 ml-5 border-l-4 border-orange-600 sm:ml-0 md:mb-0 lg:flex-row">
        <div className="card ml-2 rounded-box bg-amber-900 bg-opacity-75 sm:ml-4">
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
      />
    </div>
  )
}

export default BannerContent

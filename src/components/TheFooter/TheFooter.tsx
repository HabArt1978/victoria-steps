import type { JSX } from 'react'
import LabelIcon from '../LabelIcon/LabelIcon'
import Social from '../Social/Social'

const TheFooter = (): JSX.Element => {
  const defaultDate = new Date()
  const currentYear = defaultDate.getFullYear()

  return (
    <footer className="footer footer-center grid grid-cols-1 bg-neutral p-8 text-neutral-content md:font-normal min-[1000px]:grid-cols-3">
      <aside className="items-center min-[1000px]:mr-auto min-[1000px]:flex">
        <LabelIcon isInvertColor={true} />
        <p className="ml-2 text-center font-robotoMono">
          <span className="block">
            <span className="ml-[-8px] text-lg">{`©`}</span>
            {` 2022-${currentYear}`}
          </span>{' '}
          <span className="block">{`OOO "Виктория"`}</span>
        </p>
      </aside>

      <aside className="mx-auto my-auto text-center">
        <h1 className="font-amaticBold font-bold tracking-wider">
          <span className="text my-2 block text-2xl text-orange-500">
            {'OOO "Виктория"'}
          </span>
          <span className="block text-xl">
            Производство комбинированных ступеней для строительства лестниц.
          </span>
        </h1>
      </aside>

      <Social
        isBackground={false}
        position="horizontal"
        isVisible={true}
        className="space-x-4 min-[1000px]:space-x-0"
      />
    </footer>
  )
}

export default TheFooter

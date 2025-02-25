import type { JSX } from 'react'
import LabelIcon from '../LabelIcon/LabelIcon'
import Social from '../Social/Social'

const TheFooter = (): JSX.Element => {
  const defaultDate = new Date()
  const currentYear = defaultDate.getFullYear()

  return (
    <footer className="footer footer-center grid grid-cols-1 bg-neutral p-8 text-neutral-content md:font-normal min-[1000px]:grid-cols-3">
      <aside className="items-center min-[1000px]:mr-auto min-[1000px]:flex">
        <LabelIcon />
        <p className="ml-2 text-center font-robotoMono">
          <span className="block">
            <span className="ml-[-8px] text-lg">{`©`}</span>
            {` 2022-${currentYear}`}
          </span>{' '}
          <span className="block">{`OOO "Виктория"`}</span>
        </p>
      </aside>

      <aside className="mx-auto my-auto text-center">
        <p className="font-amaticBold text-xl font-bold tracking-wider">
          {`OOO "Виктория"`}
          <br />
          Производство комбинированных ступеней для строительства лестниц.
        </p>
      </aside>

      <Social
        isBackground={false}
        position="horizontal"
        isVisible={true}
      />
    </footer>
  )
}

export default TheFooter

import Link from 'next/link'
import type { JSX } from 'react'

const YandexMap = (): JSX.Element => {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <Link
        href="https://yandex.ru/maps/42/saransk/?utm_medium=mapframe&utm_source=maps"
        className="absolute top-0 text-base text-white"
      >
        Саранск
      </Link>
      <Link
        href="https://yandex.ru/maps/42/saransk/house/severo_vostochnoye_shosse_12/YEwYdANhQEIPQFtufX5xdnRgbA==/?from=tableau_yabro&ll=45.242876%2C54.207400&utm_medium=mapframe&utm_source=maps&z=16.09"
        className="absolute top-4 text-base text-white"
      >
        Северо-Восточное шоссе, 12 — Яндекс Карты
      </Link>
      <iframe
        src="https://yandex.ru/map-widget/v1/?from=tableau_yabro&ll=45.242876%2C54.207400&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNDQzMDY1NTUxEnPQoNC-0YHRgdC40Y8sINCg0LXRgdC_0YPQsdC70LjQutCwINCc0L7RgNC00L7QstC40Y8sINCh0LDRgNCw0L3RgdC6LCDQodC10LLQtdGA0L4t0JLQvtGB0YLQvtGH0L3QvtC1INGI0L7RgdGB0LUsIDEyIgoNyPc0QhXT1FhC&z=16.09"
        allowFullScreen={true}
        className="relative h-full w-full"
        loading="lazy"
      ></iframe>
    </div>
  )
}

export default YandexMap

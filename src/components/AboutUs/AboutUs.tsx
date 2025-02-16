import type { JSX } from 'react'
import SectionContainer from '../Containers/SectionContainer'
import { H1, P } from '../UI/Typography'

const AboutUs = (): JSX.Element => {
  return (
    <SectionContainer>
      <H1>О компании</H1>

      <div className="mx-auto mt-10 max-w-[60%] space-y-4">
        <P className="indent-2">
          Наша торговая компания «OOO Виктория» уже 3 года занимается продажей
          мебельного щита и элементов лестниц из массива дерева. Мы представляем
          качественную продукцию собственного производства.
        </P>
        <P className="indent-2">
          Точкой отсчета для компании стал 2022 год. Тогда в собственности «OOO
          Виктория» находился единственный склад площадью 100 квадратных метров.
          Все это время компания успешно развивалась.
        </P>
        <P className="indent-2">
          Мы работаем только с проверенными заводами-поставщиками, продукция
          которых не только отлично зарекомендовала себя на рынке, но и отвечает
          всем стандартам качества.
        </P>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            <P>Широкий ассортимент</P>
          </li>
          <li>
            <P>Соотношение цены и качества</P>
          </li>
          <li>
            <P>Бережное хранение и транспортировка</P>
          </li>
          <li>
            <P>Проверенные поставщики</P>
          </li>
          <li>
            <P>Постоянное наличие товаров</P>
          </li>
        </ul>
      </div>
    </SectionContainer>
  )
}
export default AboutUs

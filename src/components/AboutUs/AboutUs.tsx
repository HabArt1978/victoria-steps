import { pForList } from '@/utils/globalStyles'
import type { JSX } from 'react'
import ProseContainer from '../Containers/ProseContainer'
import SectionContainer from '../Containers/SectionContainer'
import { H1, P, Ul } from '../UI/Typography'

const AboutUs = (): JSX.Element => {
  return (
    <SectionContainer>
      <H1>О компании</H1>

      <ProseContainer>
        <P>
          Наша торговая компания «OOO Виктория» уже 3 года занимается продажей
          мебельного щита и элементов лестниц из массива дерева. Мы представляем
          качественную продукцию собственного производства.
        </P>
        <P>
          Точкой отсчета для компании стал 2022 год. Тогда в собственности «OOO
          Виктория» находился единственный склад площадью 100 квадратных метров.
          Все это время компания успешно развивалась.
        </P>
        <P>
          Мы работаем только с проверенными заводами-поставщиками, продукция
          которых не только отлично зарекомендовала себя на рынке, но и отвечает
          всем стандартам качества.
        </P>

        <Ul>
          <li>
            <P className={pForList}>Широкий ассортимент</P>
          </li>
          <li>
            <P className={pForList}>Соотношение цены и качества</P>
          </li>
          <li>
            <P className={pForList}>Бережное хранение и транспортировка</P>
          </li>
          <li>
            <P className={pForList}>Проверенные поставщики</P>
          </li>
          <li>
            <P className={pForList}>Постоянное наличие товаров</P>
          </li>
        </Ul>
      </ProseContainer>
    </SectionContainer>
  )
}
export default AboutUs

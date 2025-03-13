import { cn } from '@/utils/cn'
import { pForList } from '@/utils/globalStyles'
import type { JSX } from 'react'
import ProseContainer from '../Containers/ProseContainer'
import SectionContainer from '../Containers/SectionContainer'
import { H1, H2, H3, P, Ul } from '../UI/Typography'

const DeliverAndPayment = (): JSX.Element => {
  return (
    <SectionContainer>
      <H1>Доставка и оплата</H1>

      <ProseContainer>
        <P>
          Вы можете выбрать для себя наиболее удобные способы оплаты и доставки
          приобретенных товаров и, таким образом, сэкономить свое время.
        </P>

        <div className="divider"></div>

        <H2>Оплата</H2>
        <P>Оплата возможна наличными либо на расчётный счёт.</P>

        <H3 className="mt-6">Наличный расчет</H3>
        <Ul>
          <li>
            <P className={pForList}>
              Оплата производится в офисе <strong>«ООО Виктория»</strong>.
            </P>
          </li>
        </Ul>

        <H3 className="mt-6">Безналичный расчет</H3>
        <P>
          Оплата осуществляется на основании выставленных счетов. После оплаты
          высылаются все соответствующие документы.
        </P>

        <Ul>
          <li>
            <P className={pForList}>
              Безналичным расчетом (для юридических лиц)
            </P>
          </li>
        </Ul>

        <div className="divider"></div>

        <H2 className="mt-6">Доставка</H2>

        <H3 className="mt-6">Доставка курьером</H3>
        <Ul>
          <li>
            <P className={pForList}>
              Делаете заявку на электронную почту с указанием контактных данных.
            </P>
          </li>
          <li>
            <P className={pForList}>
              С вами созванивается менеджер и подтверждает заказ.
            </P>
          </li>
          <li>
            <P className={pForList}>
              Доставка осуществляется после 100% оплаты.
            </P>
          </li>
          <li>
            <P className={pForList}>Доставка осуществляется без разгрузки.</P>
          </li>
          <li className="uppercase text-amber-700">
            <P className={cn(pForList, 'font-semibold')}>
              Если машина прибыла в пункт назначения, но услуга не была оказана
              по вине клиента, то будет выставлен счёт за «холостой прогон».
            </P>
            <P className={cn(cn(pForList, 'mt-4 font-semibold'))}>
              Тариф данной услуги равен тарифу доставки груза, который был
              рассчитан при оформлении заявки.
            </P>
          </li>
        </Ul>

        <H3 className="mt-6">Самовывоз</H3>
        <Ul>
          <li>
            <P className={pForList}>
              Самовывоз возможен со склада компании в вашем городе.
            </P>
          </li>
        </Ul>
      </ProseContainer>
    </SectionContainer>
  )
}

export default DeliverAndPayment

import type { JSX } from 'react'
import SectionContainer from '../Containers/SectionContainer'
import { H1, H2, H3, Li, P } from '../UI/Typography'

const DeliverAndPayment = (): JSX.Element => {
  return (
    <SectionContainer>
      <H1>Доставка и оплата</H1>

      <div className="mx-auto mt-10 max-w-[60%] space-y-4">
        <P className="indent-4">
          Вы можете выбрать для себя наиболее удобные способы оплаты и доставки
          приобретенных товаров и, таким образом, сэкономить свое время.
        </P>

        <div className="divider"></div>

        <H2>Оплата</H2>
        <P className="indent-4">
          Оплата возможна наличными либо на расчётный счёт.
        </P>

        <H3 className="mt-6">Наличный расчет</H3>
        <ul className="list-disc space-y-2 pl-6">
          <Li>
            Оплата производится в офисе <strong>«ООО Виктория»</strong>.
          </Li>
        </ul>

        <H3 className="mt-6">Безналичный расчет</H3>
        <P className="ml-4">
          Оплата осуществляется на основании выставленных счетов. После оплаты
          высылаются все соответствующие документы.
        </P>

        <P>Оплатить покупку можно:</P>
        <ul className="list-disc space-y-2 pl-6">
          <Li>Безналичным расчетом (для юридических лиц);</Li>
        </ul>

        <div className="divider"></div>

        <H2 className="mt-6">Доставка</H2>

        <H3 className="mt-6">Доставка курьером</H3>
        <ul className="list-disc space-y-2 pl-6">
          <Li>
            Делаете заявку на электронную почту с указанием контактных данных.
          </Li>
          <Li>С вами созванивается менеджер и подтверждает заказ.</Li>
          <Li>Доставка осуществляется после 100% оплаты.</Li>
          <Li>Доставка осуществляется без разгрузки.</Li>
          <Li className="uppercase text-amber-700">
            <P className="font-semibold">
              Если машина прибыла в пункт назначения, но услуга не была оказана
              по вине клиента, то будет выставлен счёт за «холостой прогон».
            </P>
            <P className="mt-4 font-semibold">
              Тариф данной услуги равен тарифу доставки груза, который был
              рассчитан при оформлении заявки.
            </P>
          </Li>
        </ul>

        <H3 className="mt-6">Самовывоз</H3>
        <ul className="list-disc space-y-2 pl-6">
          <Li>Самовывоз возможен со склада компании в вашем городе.</Li>
        </ul>
      </div>
    </SectionContainer>
  )
}

export default DeliverAndPayment

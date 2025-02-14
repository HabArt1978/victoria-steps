import type { JSX } from 'react'
import SectionContainer from '../Containers/SectionContainer'

const DeliverAndPayment = (): JSX.Element => {
  return (
    <SectionContainer>
      <h1 className="mt-6 text-center text-4xl">Доставка и оплата</h1>

      <div className="mx-auto mt-10 max-w-[60%] space-y-4">
        <p>
          Вы можете выбрать для себя наиболее удобные способы оплаты и доставки
          приобретенных товаров и, таким образом, сэкономить свое время.
        </p>

        <div className="divider"></div>

        <h2 className="mt-6 text-2xl font-semibold">Оплата</h2>
        <p className="indent-4">
          Оплата возможна наличными либо на расчётный счёт.
        </p>

        <h3 className="mt-6 text-lg font-semibold">Наличный расчет</h3>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Оплата производится в офисе <strong>«ООО Виктория»</strong>.
          </li>
        </ul>

        <h3 className="mt-6 text-lg font-semibold">Безналичный расчет</h3>
        <p className="ml-4">
          Оплата осуществляется на основании выставленных счетов. После оплаты
          высылаются все соответствующие документы.
        </p>

        <p>Оплатить покупку можно:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Безналичным расчетом (для юридических лиц);</li>
        </ul>

        <div className="divider"></div>

        <h2 className="mt-6 text-2xl font-semibold">Доставка</h2>

        <h3 className="mt-6 text-lg font-semibold">Доставка курьером</h3>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Делаете заявку на электронную почту с указанием контактных данных.
          </li>
          <li>С вами созванивается менеджер и подтверждает заказ.</li>
          <li>Доставка осуществляется после 100% оплаты.</li>
          <li>Доставка осуществляется без разгрузки.</li>
          <li>
            <p>
              Если машина прибыла в пункт назначения, но услуга не была оказана
              по вине клиента, то будет выставлен счёт за «холостой прогон».
            </p>
            <br></br>
            <p>
              Тариф данной услуги равен тарифу доставки груза, который был
              рассчитан при оформлении заявки.
            </p>
          </li>
        </ul>

        <h3 className="mt-6 text-lg font-semibold">Самовывоз</h3>
        <ul className="list-disc space-y-2 pl-6">
          <li>Самовывоз возможен со склада компании в вашем городе.</li>
        </ul>
      </div>
    </SectionContainer>
  )
}

export default DeliverAndPayment

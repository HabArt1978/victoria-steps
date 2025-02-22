import { AiOutlineBlock, AiOutlineSafety } from 'react-icons/ai'
import { FaRegHandshake } from 'react-icons/fa6'
import { GiWallet } from 'react-icons/gi'
import { GrValidate } from 'react-icons/gr'
import type { AdvantagesData } from './types'

export const advantagesData: AdvantagesData[] = [
  {
    icon: AiOutlineBlock,
    title: 'Уникальная технология',
    description: 'Прочность и устойчивость к деформации'
  },
  {
    icon: FaRegHandshake,
    title: 'Доверие покупателей',
    description: 'К нам возвращаются снова и рекомендуют друзьям'
  },

  {
    icon: AiOutlineSafety,
    title: 'Безопасные материалы',
    description: 'Соответствуем требованиям и стандартам качества'
  },
  {
    icon: GiWallet,
    title: 'Доступные цены',
    description: 'Собственное производство по доступной цене'
  },
  {
    icon: GrValidate,
    title: 'Гарантия',
    description: 'Мы даем гарантию на все наши изделия'
  }
]

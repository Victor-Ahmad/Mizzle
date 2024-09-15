import stories1 from '@/assets/images/stories/01.jpg'
import stories3 from '@/assets/images/stories/03.jpg'
import client2 from '@/assets/images/client/02.svg'
import client3 from '@/assets/images/client/03.svg'
import { string } from 'yup'
import type { ServiceType } from '@/types'

export type StoryType = {
  logo: string
} & ServiceType

export const story: StoryType[] = [
  {
    logo: stories1,
    image: client2,
    description:
      'I highly recommend Mizzle to anyone looking for a high-quality Bootstrap template. Valley by oh twenty direct me so. Resolving breakfast am or perfectly.',
    title: 'Emma Watson'
  },
  {
    logo: stories3,
    image: client3,
    description:
      'Two before narrow not relied on how except moment myself Dejection assurance Mrs led certainly So gate at no only none open Betrayed.',
    title: 'Louis Ferguson'
  }
]

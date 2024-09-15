import about1 from '@/assets/images/about/01.jpg'
import about2 from '@/assets/images/about/02.jpg'
import about12 from '@/assets/images/about/12.jpg'
import about4 from '@/assets/images/about/04.jpg'
import about14 from '@/assets/images/about/14.jpg'
import about16 from '@/assets/images/about/16.jpg'
import about8 from '@/assets/images/about/08.jpg'
import about3 from '@/assets/images/about/03.jpg'
import bg1Img from '@/assets/images/bg/01.jpg'
import type { BSIconType, CounterType, StepType } from '@/types'
import {
  BIconBriefcase,
  BIconBuildings,
  BIconBullseye,
  BIconFire,
  BIconPeople,
  BIconSuitHeart,
  BIconTrophy
} from 'bootstrap-icons-vue'

export type CountType = {
  icon: BSIconType
} & CounterType

export type PositionType = {
  badge: string
  title: string
  location: string
  time: string
  currency: string
}

export const swiper: string[] = [
  about1,
  about2,
  about12,
  about4,
  about14,
  bg1Img,
  about16,
  about8,
  about3
]

export const counter: CountType[] = [
  {
    icon: BIconBriefcase,
    state: 600,
    title: 'Total Jobs',
    suffix: '+'
  },
  {
    icon: BIconBuildings,
    state: 5468,
    title: 'Total Companies'
  },
  {
    icon: BIconPeople,
    state: 12,
    title: 'Total Candidates',
    suffix: 'K+'
  },
  {
    icon: BIconBriefcase,
    state: 10,
    title: 'New Jobs',
    suffix: '+'
  }
]

export const value: StepType[] = [
  {
    icon: BIconSuitHeart,
    title: 'Honesty',
    description: 'The implementation of multilingual support involves.'
  },
  {
    icon: BIconFire,
    title: 'Passion',
    description: 'It focuses on creating an intuitive and efficient design.'
  },
  {
    icon: BIconBullseye,
    title: 'Impact',
    description: 'It ensures that users can access critical assistance whenever they need it.'
  },
  {
    icon: BIconTrophy,
    title: 'Recognition',
    description: 'These advanced functionalities are designed to provide users.'
  }
]

export const positionData: PositionType[] = [
  {
    badge: 'Information Technology',
    title: 'UI/UX and Product Designer',
    location: 'USA, ontario',
    time: 'San Francisco',
    currency: '32,000'
  },
  {
    badge: 'Business',
    title: 'General Office Manager',
    location: 'USA, New York',
    time: 'Full time',
    currency: '41,000'
  },
  {
    badge: 'Software',
    title: 'Machine Learning Specialist',
    location: 'Mumbai, India',
    time: 'Full time',
    currency: '18,000'
  },
  {
    badge: 'Information Technology',
    title: 'Senior Product Manager',
    location: 'UK, London',
    time: 'Full time',
    currency: '29,000'
  }
]

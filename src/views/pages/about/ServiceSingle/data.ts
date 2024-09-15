import avatar11 from '@/assets/images/avatar/11.jpg'
import avatar8 from '@/assets/images/avatar/08.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import type { PricingPlanType, ServiceType } from '@/types'

export const approach: string[] = [
  "Reach a global audience and expand your brand's presence",
  'Real-time tracking and data-driven decision-making',
  'Improved Customer Engagement',
  'Drive conversions and boost revenue',
  'Create a loyal customer community',
  'Protect customer data and privacy'
]

type WorkType = {
  id: number
} & ServiceType

export type PricingType = {
  avatar: string
} & PricingPlanType

export const work: WorkType[] = [
  {
    id: 1,
    title: 'Understanding Client Goals',
    description:
      'The process begins with a thorough consultation with the client to understand their business goals.'
  },
  {
    id: 2,
    title: 'Market Research',
    description: `They also analyze the client's current online presence and marketing efforts.`
  },
  {
    id: 3,
    title: 'Search Engine Optimization (SEO)',
    description: `For visibility, SEO strategies are employed to improve the client's website's search engine rankings.`
  },
  {
    id: 4,
    title: 'Adapting to Industry Changes',
    description: `Digital marketing agencies stay up-to-date with industry trends and algorithm changes.`
  }
]

export const pricing: PricingType[] = [
  {
    avatar: avatar11,
    description:
      'I highly recommend Mizzle to anyone looking for a high-quality Bootstrap template. Valley by oh twenty direct me so. Resolving breakfast am or perfectly.',
    title: 'Emma Watson'
  },
  {
    avatar: avatar8,
    description:
      'Two before narrow not relied on how except moment myself Dejection assurance Mrs led certainly So gate at no only none open Betrayed.',
    title: 'Louis Ferguson'
  },
  {
    avatar: avatar5,
    description:
      "Our passion for customer excellence is just one reason why we are the market leader. We've always worked very hard to give our customers the best experience.",
    title: 'Jacqueline Miller'
  }
]

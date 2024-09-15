import avatar1 from '@/assets/images/avatar/01.jpg'
import avatar2 from '@/assets/images/avatar/02.jpg'
import type { TestimonialType } from '@/types'

export type ReviewType = {
  date: string
} & TestimonialType

export const reviews: ReviewType[] = [
  {
    user: {
      username: 'Allen Smith',
      avatar: avatar1
    },
    comment:
      'Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do. ',
    date: 'June 11, 2022, at 6:01 am',
    rating: 4.5
  },
  {
    user: {
      username: 'Louis Ferguson',
      avatar: avatar2
    },
    comment:
      'Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do. ',
    date: 'June 14, 2022, at 6:01 am',
    rating: 4.5
  }
]

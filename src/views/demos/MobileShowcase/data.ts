import type { PricingType, StatisticType, TestimonialType } from '@/types'

import avatar1 from '@/assets/images/avatar/01.jpg'
import avatar2 from '@/assets/images/avatar/02.jpg'
import avatar3 from '@/assets/images/avatar/03.jpg'
import avatar4 from '@/assets/images/avatar/04.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar7 from '@/assets/images/avatar/07.jpg'
import avatar8 from '@/assets/images/avatar/08.jpg'
import avatar10 from '@/assets/images/avatar/10.jpg'
import avatar11 from '@/assets/images/avatar/11.jpg'
import { BIconCheckLg } from 'bootstrap-icons-vue'

export const statData: StatisticType[] = [
  {
    title: 'Total Downloads',
    number: 15,
    suffix: 'M+'
  },
  {
    title: 'Total Followers',
    number: 22,
    suffix: 'M+'
  },
  {
    title: 'Total Reviews',
    number: 2300,
    suffix: '+'
  },
  {
    title: 'Total Countries',
    number: 107,
    suffix: '+'
  }
]

export const pricingData: PricingType[] = [
  {
    duration: 'month',
    plans: [
      {
        badge: 'Boss Mode',
        price: 45,
        features: [
          { icon: BIconCheckLg, title: 'Up to 05 users monthly' },
          { icon: BIconCheckLg, title: 'Free 5 host domain' },
          { icon: BIconCheckLg, title: 'Google docs style editors' },
          { icon: BIconCheckLg, title: 'Support for 30+ languages' },
          { icon: BIconCheckLg, title: 'Landing pages Web widgets' },
          { icon: BIconCheckLg, title: '24/7 dedicated Support' }
        ]
      },
      {
        badge: 'Enterprise Mode',
        price: 175,
        features: [
          { icon: BIconCheckLg, title: 'Up to 05 users monthly' },
          { icon: BIconCheckLg, title: 'Free 5 host domain' },
          { icon: BIconCheckLg, title: 'Google docs style editors' },
          { icon: BIconCheckLg, title: 'Support for 30+ languages' },
          { icon: BIconCheckLg, title: 'Landing pages Web widgets' },
          { icon: BIconCheckLg, title: '24/7 dedicated Support' }
        ]
      }
    ]
  },
  {
    duration: 'year',
    plans: [
      {
        badge: 'Boss Mode',
        price: 56,
        features: [
          { icon: BIconCheckLg, title: 'Up to 05 users monthly' },
          { icon: BIconCheckLg, title: 'Free 5 host domain' },
          { icon: BIconCheckLg, title: 'Google docs style editors' },
          { icon: BIconCheckLg, title: 'Support for 30+ languages' },
          { icon: BIconCheckLg, title: 'Landing pages Web widgets' },
          { icon: BIconCheckLg, title: '24/7 dedicated Support' }
        ]
      },
      {
        badge: 'Enterprise Mode',
        price: 199,
        features: [
          { icon: BIconCheckLg, title: 'Up to 05 users monthly' },
          { icon: BIconCheckLg, title: 'Free 5 host domain' },
          { icon: BIconCheckLg, title: 'Google docs style editors' },
          { icon: BIconCheckLg, title: 'Support for 30+ languages' },
          { icon: BIconCheckLg, title: 'Landing pages Web widgets' },
          { icon: BIconCheckLg, title: '24/7 dedicated Support' }
        ]
      }
    ]
  }
]
export const testimonials: TestimonialType[] = [
  {
    user: {
      avatar: avatar1,
      firstName: 'Billy',
      lastName: 'Vasquez'
    },
    comment: 'Timed voice share led him to widen noisy young. At weddings believed laughing.',
    rating: 5
  },
  {
    user: {
      avatar: avatar2,
      firstName: 'Emma',
      lastName: 'Watson'
    },
    comment:
      "Moonlight newspaper up its enjoyment agreeable depending. Timed voice share led him to widen noisy young. At weddings believed laughing we've just launched our 5th website! You guys rock!",
    rating: 4.5
  },
  {
    user: {
      avatar: avatar3,
      firstName: 'Larry',
      lastName: 'Lawson'
    },
    comment: 'Timed voice share led him to widen noisy young. At weddings believed laughing.',
    rating: 3.5
  },
  {
    user: {
      avatar: avatar5,
      firstName: 'Carolyn',
      lastName: 'Ortiz'
    },
    comment:
      'The experience of using Mizzle was enjoyable and easy. Timed voice share led him to widen noisy young. At weddings believed laughing.',
    rating: 5
  },
  {
    user: {
      avatar: avatar7,
      firstName: 'Dennis',
      lastName: 'Barrett'
    },
    comment:
      "I'm really happy with the Mizzle service. we've just launched our 5th website - they're amazing! At weddings believed laughing we've just launched our 5th website! You guys rock",
    rating: 4.5
  },
  {
    user: {
      avatar: avatar10,
      firstName: 'Lori',
      lastName: 'Stevens'
    },
    comment:
      "I am really satisfied with my service. Thanks to service, we've just launched our 5th website! You guys rock!",
    rating: 5
  },
  {
    user: {
      avatar: avatar8,
      firstName: 'Joan',
      lastName: 'Wallace'
    },
    comment: 'Timed voice share led him to widen noisy young. At weddings believed laughing.',
    rating: 5
  },
  {
    user: {
      avatar: avatar11,
      firstName: 'Jacqueline',
      lastName: 'Miller'
    },
    comment: 'I am really satisfied with my service. You guys rock!',
    rating: 3.5
  },
  {
    user: {
      avatar: avatar4,
      firstName: 'Louis',
      lastName: 'Ferguson'
    },
    comment:
      "We've just launched our 5th website - they're amazing! At weddings believed laughing we've just launched our 5th website! You guys rock",
    rating: 4
  }
]

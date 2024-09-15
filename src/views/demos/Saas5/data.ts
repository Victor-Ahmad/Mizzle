import {
  BIconBarChartSteps,
  BIconHourglassBottom,
  BIconLightningChargeFill,
  BIconPatchCheck,
  BIconRocketFill
} from 'bootstrap-icons-vue'
import type { BlogType, FeatureType, PricingPlanType } from '@/types'

import decoration20 from '@/assets/images/elements/saas-decoration/20.png'
import decoration21 from '@/assets/images/elements/saas-decoration/21.png'
import decoration22 from '@/assets/images/elements/saas-decoration/22.png'

import blog1 from '@/assets/images/blog/4by3/01.jpg'
import blog6 from '@/assets/images/blog/4by3/06.jpg'
import blog7 from '@/assets/images/blog/4by3/07.jpg'

export const features: FeatureType[] = [
  {
    title: 'Intelligent Automation',
    description: 'Automate repetitive tasks, so you can focus on strategic work.',
    icon: BIconLightningChargeFill
  },
  {
    title: 'Real-Time Collaboration',
    description: 'Connect your team, clients, and partners instantly.',
    icon: BIconHourglassBottom
  },
  {
    title: 'Advanced Analytics',
    description: 'Gain valuable insights with our robust analytics tools.',
    icon: BIconBarChartSteps
  },
  {
    title: 'Customization',
    description: 'Customize features and workflows to match your requirements.',
    icon: BIconRocketFill
  }
]

export const features2: FeatureType[] = [
  {
    title: '24/7 fast chat supports',
    description: 'Enjoy around-the-clock, lightning-fast chat support.',
    image: decoration20
  },
  {
    title: 'Secure data encryption',
    description: 'It stands as a cornerstone in ensuring the confidentiality',
    image: decoration22
  },
  {
    title: 'Team collaboration',
    description: 'Seamlessly collaborate with your team members like never before',
    image: decoration21
  }
]

export const blogs: BlogType[] = [
  {
    title: '10 things you need to know about Mizzle',
    publishedBy: {
      firstName: 'Bryan',
      lastName: 'Knight'
    },
    category: 'Technology',
    image: blog1,
    route: { name: 'blog.single.v2' }
  },
  {
    title: '5 investment doubts you should clarify',
    publishedBy: {
      firstName: 'Amanda',
      lastName: 'Reed'
    },
    category: 'Marketing',
    image: blog6,
    route: { name: 'blog.single.v2' }
  },
  {
    title: '10 things you need to know about Mizzle',
    publishedBy: {
      firstName: 'Bryan',
      lastName: 'Knight'
    },
    category: 'Technology',
    image: blog7,
    route: { name: 'blog.single.v2' }
  }
]

export const pricingData: PricingPlanType = {
  price: 120,
  title: 'Transparent pricing',
  description:
    "Our passion for customer excellence is just one reason why we are the market leader. We've always worked very hard to give our customers the best experience.",
  route: { name: 'pricing' },
  features: [
    { icon: BIconPatchCheck, title: 'Up to 05 users monthly' },
    { icon: BIconPatchCheck, title: 'Free 5 host & domain' },
    { icon: BIconPatchCheck, title: 'Google Docs style editors' },
    { icon: BIconPatchCheck, title: 'Support for 30+ languages' },
    { icon: BIconPatchCheck, title: '24/7 Dedicated Support' }
  ]
}

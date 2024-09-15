import client1 from '@/assets/images/client/01.svg'
import client2 from '@/assets/images/client/02.svg'
import client3 from '@/assets/images/client/03.svg'
import client4 from '@/assets/images/client/04.svg'
import client5 from '@/assets/images/client/05.svg'
import client6 from '@/assets/images/client/06.svg'
import avatar6 from '@/assets/images/avatar/06.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar2 from '@/assets/images/avatar/02.jpg'
import avatar3 from '@/assets/images/avatar/03.jpg'
import avatar4 from '@/assets/images/avatar/04.jpg'
import decoration10 from '@/assets/images/elements/saas-decoration/10.png'
import decoration11 from '@/assets/images/elements/saas-decoration/11.png'
import decoration12 from '@/assets/images/elements/saas-decoration/12.png'
import type { FAQType, ServiceType } from '@/types'

type FeaturedType = {
  odd?: boolean
  lg?: number
  cols?: number
  variant?: string
  span?: string
} & ServiceType

export const swiper: string[] = [client5, client4, client1, client2, client3, client6]

export const features: FeaturedType[] = [
  {
    title: 'Comprehensive Data Segmentation',
    description:
      'Dive deep into your data. Explore our comprehensive segmentation capabilities, allowing you to analyze specific subsets of your data for precise insights.',
    image: decoration10,
    odd: false
  },
  {
    title: 'Customization to Fit Your Needs',
    description:
      'Tailor your data analytics experience. Discover how our tool can be customized to meet your unique reporting and analysis requirements.',
    image: decoration11,
    odd: true
  },
  {
    title: 'Data Collaboration Made Easy',
    description:
      'Collaborate seamlessly with your team. Our tool facilitates data sharing, commenting, and collaborative reporting, so you can work together effectively.',
    image: decoration12,
    odd: false
  }
]

export const avatars: string[] = [avatar6, avatar5, avatar2, avatar3, avatar4]

export const faq: FAQType[] = [
  {
    question: 'How many items are there on this list?',
    answer:
      'Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled. Tried law yet style child. The bore of true of no be deal. Drawings offended yet answered Jennings perceive laughing six did far. Rooms oh fully taken by worse do. Points afraid but may end law lasted.'
  },
  {
    question: 'Can you describe Mizzle in just one sentence?',
    answer:
      'September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequestion partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be.'
  },
  {
    question: 'Can I use this theme for my client?',
    answer:
      'How men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequestion partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in. Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors.'
  },
  {
    question: 'Do you offer themes in other categories?',
    answer:
      'But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be.'
  },
  {
    question: 'Do I need to credit you when I use this theme?',
    answer:
      'But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be.'
  }
]

export const finalFeature: FeaturedType[] = [
  {
    lg: 6,
    variant: 'dark',
    title: 'Feature',
    description: 'Skyrocket your business to unprecedented heights with the right tools today',
    span: '42%'
  },
  {
    lg: 6,
    variant: 'success',
    title: 'Analytics',
    description: 'Elevate your business to new heights with the right tools today.',
    span: '5X'
  },
  {
    cols: 12,
    variant: 'danger',
    title: 'Revenue',
    description:
      'Unlock the full potential of your business and elevate it to new heights by harnessing the power of cutting-edge tools and technologies available today.',
    span: '$2.3M'
  }
]

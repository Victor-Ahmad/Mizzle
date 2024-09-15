import client5Img from '@/assets/images/client/05.svg'
import client1Img from '@/assets/images/client/01.svg'
import client2Img from '@/assets/images/client/02.svg'
import client3Img from '@/assets/images/client/03.svg'
import client4Img from '@/assets/images/client/04.svg'
import client6Img from '@/assets/images/client/06.svg'
import client7Img from '@/assets/images/client/07.svg'
import {
  BIconLightningChargeFill,
  BIconRocketTakeoffFill,
  BIconSendFill
} from 'bootstrap-icons-vue'
import type { FAQType } from '@/types'

export const pricingData: string[] = [
  client5Img,
  client1Img,
  client2Img,
  client3Img,
  client4Img,
  client6Img,
  client7Img
]

export const accordionData: FAQType[] = [
  {
    question: 'How many items are there on this list?',
    answer:
      'Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled. Tried law yet style child. The bore of true of no be deal. Drawings offended yet answered Jennings perceive laughing six did far. Rooms oh fully taken by worse do. Points afraid but may end law lasted.'
  },
  {
    question: 'Can you describe mizzle in just one sentence?',
    answer:
      'September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be.'
  },
  {
    question: 'Can I use this theme for my client?',
    answer:
      'How men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in. Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors.'
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

export const slides = [
  {
    title: 'Basic plan',
    price: {
      monthly: '25',
      yearly: '20'
    },
    frequency: 'month',
    description: 'Basic feature for up to 10 users',
    iconBgClass: 'bg-light',
    icon: BIconLightningChargeFill,
    iconClass: 'heading-color',
    features: [
      'Up to 05 users monthly',
      'Free 5 host domain',
      'Google docs style editors',
      'Support for 30+ languages'
    ],
    shadow: true,
    border: 'overflow-hidden',
    bgVariant: 'light',
    textVariant: 'dark',
    featureIconClass: 'text-primary'
  },
  {
    title: 'Standard plan',
    badge: true,
    price: {
      monthly: '59',
      yearly: '45'
    },
    frequency: 'month',
    description: 'Basic feature for up to 10 users',
    iconBgClass: 'bg-primary bg-opacity-10',
    iconClass: 'text-primary',
    icon: BIconRocketTakeoffFill,
    features: [
      'Up to 05 users monthly',
      'Free 5 host domain',
      'Google docs style editors',
      'Support for 30+ languages',
      'Landing pages Web widgets',
      'Landing pages Web widgets',
      '24/7 dedicated Support'
    ],
    shadow: false,
    border: 'border-primary',
    bgVariant: 'primary',
    textVariant: 'light',
    featureIconClass: 'heading-color'
  },
  {
    title: 'Enterprise plan',
    price: {
      monthly: '199',
      yearly: '145'
    },
    frequency: 'month',
    description: 'Basic feature for up to 10 users',
    iconBgClass: 'bg-light',
    iconClass: 'heading-color',
    icon: BIconSendFill,
    features: [
      'Up to 05 users monthly',
      'Free 5 host domain',
      'Google docs style editors',
      'Support for 30+ languages'
    ],
    shadow: true,
    bgVariant: 'light',
    textVariant: 'dark',
    featureIconClass: 'text-primary'
  }
]

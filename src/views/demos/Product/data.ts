import { BIconEarbuds, BIconFire, BIconShieldFillCheck, BIconTruck } from 'bootstrap-icons-vue'
import type { FeatureType, ProductType } from '@/types'

import product3 from '@/assets/images/products/03.png'
import product4 from '@/assets/images/products/04.png'
import product5 from '@/assets/images/products/05.png'

export const products: ProductType[] = [
  {
    id: '1',
    name: 'Airpods Drop 2',
    price: 305,
    sale: {
      type: 'amount',
      discount: 80
    },
    images: [product3],
    route: { name: '' }
  },
  {
    id: '2',
    name: 'Airpods pro Drop',
    price: 350,
    images: [product4],
    route: { name: '' }
  },
  {
    id: '3',
    name: 'Airpods pro max',
    price: 350,
    sale: {
      type: 'amount',
      discount: 35
    },
    images: [product5],
    route: { name: '' }
  },
  {
    id: '4',
    name: 'Airpods pro Drop',
    price: 350,
    images: [product4],
    route: { name: '' }
  },
  {
    id: '5',
    name: 'Airpods pro 2.0',
    price: 285,
    images: [product5],
    route: { name: '' }
  }
]

export const features: FeatureType[] = [
  {
    title: 'Seamless Connectivity',
    description: 'Effortlessly pair your AirPods with your devices for a hassle-free listening.',
    icon: BIconFire
  },
  {
    title: 'Get flexible delivery',
    description: 'Get free delivery or pickup at your Airpods store.',
    icon: BIconTruck
  },
  {
    title: 'Accessories and Customization',
    description: 'Explore a range of accessories and customization options to your AirPods.',
    icon: BIconEarbuds
  },
  {
    title: 'Worry-Free Warranty',
    description:
      'Rest easy with a comprehensive warranty that covers your AirPods against defects.',
    icon: BIconShieldFillCheck
  }
]

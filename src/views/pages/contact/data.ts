import usflagImg from '@/assets/images/flags/us.svg'
import indianflagImg from '@/assets/images/flags/in.svg'
import client1 from '@/assets/images/client/01.svg'
import client2 from '@/assets/images/client/02.svg'
import client3 from '@/assets/images/client/03.svg'
import client4 from '@/assets/images/client/04.svg'
import client5 from '@/assets/images/client/05.svg'
import client6 from '@/assets/images/client/06.svg'
import client7 from '@/assets/images/client/07.svg'
import webflowImg from '@/assets/images/elements/webflow.svg'
import bootstrapImg from '@/assets/images/elements/bootstrap.svg'
import githubImg from '@/assets/images/elements/github.svg'

import type { BSIconType, ServiceType, ToolType } from '@/types'
import { BIconEnvelope, BIconGeoAlt, BIconTelephone } from 'bootstrap-icons-vue'

type AddreddType = {
  emailornum?: string
} & ToolType

export const address: AddreddType[] = [
  {
    icon: BIconGeoAlt,
    name: 'Office Address',
    image: usflagImg,
    description: 'US office:'
  },
  {
    icon: BIconEnvelope,
    name: 'Email us',
    description: "We're on top of things and aim to respond to all inquiries within 24 hours.",
    emailornum: 'example@gmail.com'
  },
  {
    icon: BIconTelephone,
    name: 'Call us',
    description: "Let's work together towards a common goal - get in touch!",
    emailornum: '(251) 854-6308'
  }
]

export const swiper: string[] = [client5, client1, client2, client3, client4, client6, client7]

export const work: ServiceType[] = [
  {
    image: webflowImg,
    title: 'Webflow templates',
    description: 'The combination of my passion for design'
  },
  {
    image: bootstrapImg,
    title: 'Bootstrap templates',
    description: 'It drew a hill from my the passion for design'
  },
  {
    image: githubImg,
    title: 'Contribute on Github',
    description: 'Supposing so be resolving breakfast am or perfectly.'
  }
]

export const location = [
  {
    title: 'United States',
    image: usflagImg
  },
  {
    title: 'India',
    image: indianflagImg
  }
]

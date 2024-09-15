import type { PortfolioType, ServiceType } from '@/types'

import client1 from '@/assets/images/client/client-white/01.svg'
import client3 from '@/assets/images/client/client-white/03.svg'
import client4 from '@/assets/images/client/client-white/04.svg'

import portfolioImg2 from '@/assets/images/portfolio/showcase/02.jpg'
import portfolioImg3 from '@/assets/images/portfolio/showcase/03.jpg'
import portfolioImg5 from '@/assets/images/portfolio/showcase/05.jpg'

export const about: ServiceType[] = [
  {
    title: 'Client',
    description: 'Stackbros Webflow Agency'
  },
  {
    title: 'Headquarters',
    description: '489 Depot Road Midland'
  },
  {
    title: 'Industry',
    description: 'E-commerce'
  },
  {
    title: 'Founders',
    description: 'Emma Watson, Maria Smith'
  },
  {
    title: 'Services',
    description: 'Email marketing, Product design & Content marketing'
  },
  {
    title: 'Time spent',
    description: '2023, 4 months'
  }
]

export const relatedWorks: PortfolioType[] = [
  {
    title: 'Brushstrokes and Beyond',
    category: 'UI/UX design',
    company: {
      image: client3
    },
    image: portfolioImg3,
    route: { name: 'portfolio.case-study.v2' }
  },
  {
    title: 'Ceremony Worthy of Time',
    category: 'Web design',
    company: {
      image: client4
    },
    image: portfolioImg2,
    route: { name: 'portfolio.case-study.v2' }
  },
  {
    title: 'The Art of Storytelling',
    category: 'Graphics design',
    company: {
      image: client1
    },
    image: portfolioImg5,
    route: { name: 'portfolio.case-study.v2' }
  }
]

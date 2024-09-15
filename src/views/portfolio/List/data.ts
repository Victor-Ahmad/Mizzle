import client1 from '@/assets/images/client/01.svg'
import client2 from '@/assets/images/client/02.svg'
import client4 from '@/assets/images/client/04.svg'
import client5 from '@/assets/images/client/05.svg'

import portfolio1 from '@/assets/images/portfolio/list/01.jpg'
import portfolio2 from '@/assets/images/portfolio/list/02.jpg'
import portfolio3 from '@/assets/images/portfolio/list/03.jpg'
import portfolio4 from '@/assets/images/portfolio/list/04.jpg'
import type { CompanyType, RouteType } from '@/types'

export type PortfolioCaseType = {
  title: string
  description: string
  year: number
  tags: string[]
  company: CompanyType
  image: string
  route: RouteType
}

export const portfolioCases: PortfolioCaseType[] = [
  {
    title: 'Bio Cosmetics',
    description:
      'The most powerful software & app landing page for any kind of app and software marketing business.',
    year: 2022,
    tags: ['Branding', 'Packaging', 'UI/UX design'],
    company: {
      image: client4
    },
    image: portfolio2,
    route: { name: 'portfolio.case-study.v2' }
  },
  {
    title: 'Website Optimization for TechWave',
    description:
      'The most powerful software & app landing page for any kind of app and software marketing business.',
    year: 2021,
    tags: ['Branding', 'Packaging', 'UI/UX design'],
    company: {
      image: client2
    },
    image: portfolio1,
    route: { name: 'portfolio.case-study.v2' }
  },
  {
    title: 'Cherry Studio',
    description:
      'The most powerful software & app landing page for any kind of app and software marketing business.',
    year: 2020,
    tags: ['Branding', 'Packaging', 'Development'],
    company: {
      image: client1
    },
    image: portfolio3,
    route: { name: 'portfolio.case-study.v2' }
  },
  {
    title: 'Transforming Ideas into Reality',
    description:
      'The most powerful software & app landing page for any kind of app and software marketing business.',
    year: 2019,
    tags: ['Graphics', 'Development', 'UI/UX design'],
    company: {
      image: client5
    },
    image: portfolio4,
    route: { name: 'portfolio.case-study.v2' }
  }
]

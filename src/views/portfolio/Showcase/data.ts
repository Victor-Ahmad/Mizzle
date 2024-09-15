import client1 from '@/assets/images/client/client-white/01.svg'
import client2 from '@/assets/images/client/client-white/02.svg'
import client3 from '@/assets/images/client/client-white/03.svg'
import client4 from '@/assets/images/client/client-white/04.svg'
import client5 from '@/assets/images/client/client-white/05.svg'

import showcase1 from '@/assets/images/portfolio/showcase/01.jpg'
import showcase2 from '@/assets/images/portfolio/showcase/02.jpg'
import showcase3 from '@/assets/images/portfolio/showcase/03.jpg'
import showcase4 from '@/assets/images/portfolio/showcase/04.jpg'
import showcase5 from '@/assets/images/portfolio/showcase/05.jpg'
import type { PortfolioType } from '@/types'

export const portfolioData: PortfolioType[] = [
  {
    title: 'UI/UX Enhancement for SnapMedia',
    category: 'UI/UX design',
    company: {
      image: client3
    },
    image: showcase3,
    route: { name: 'portfolio.case-study.v2' }
  },
  {
    title: 'Website Optimization for TechWave',
    category: 'Web design',
    company: {
      image: client4
    },
    image: showcase2,
    route: { name: 'portfolio.case-study.v1' }
  },
  {
    title: 'Chasing Dreams and Creating Art',
    category: 'Branding',
    company: {
      image: client2
    },
    image: showcase1,
    route: { name: 'portfolio.case-study.v1' }
  },
  {
    title: 'The Art of Storytelling',
    category: 'Graphics design',
    company: {
      image: client1
    },
    image: showcase5,
    route: { name: 'portfolio.case-study.v1' }
  },
  {
    title: 'Transforming Ideas into Reality',
    category: 'Marketing',
    company: {
      image: client5
    },
    image: showcase4,
    route: { name: 'portfolio.case-study.v1' }
  }
]

import client1 from '@/assets/images/client/client-white/01.svg'
import client3 from '@/assets/images/client/client-white/03.svg'
import client4 from '@/assets/images/client/client-white/04.svg'

import portfolioImg2 from '@/assets/images/portfolio/showcase/02.jpg'
import portfolioImg3 from '@/assets/images/portfolio/showcase/03.jpg'
import portfolioImg5 from '@/assets/images/portfolio/showcase/05.jpg'
import type { PortfolioType } from '@/types'

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

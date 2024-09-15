import showcase2 from '@/assets/images/portfolio/showcase/02.jpg'
import showcase4 from '@/assets/images/portfolio/showcase/04.jpg'
import showcase3 from '@/assets/images/portfolio/showcase/03.jpg'
import showcase5 from '@/assets/images/portfolio/showcase/05.jpg'
import type { PortfolioType } from '@/types'

type TableType = {
  statusText: string
} & PortfolioType

export const table: TableType[] = [
  {
    image: showcase2,
    title: 'Website Optimization for TechWave',
    statusText: 'Published',
    category: 'Web design'
  },
  {
    image: showcase4,
    title: 'Transforming Ideas into Reality',
    statusText: 'Published',
    category: 'Marketing'
  },
  {
    image: showcase3,
    title: 'The Art of Storytelling',
    statusText: 'Private',
    category: 'Graphics design'
  },
  {
    image: showcase5,
    title: 'UI/UX Enhancement for SnapMedia',
    statusText: 'Published',
    category: 'UI/UX design'
  }
]

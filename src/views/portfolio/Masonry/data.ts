import masonry1 from '@/assets/images/portfolio/masonry/01.jpg'
import masonry2 from '@/assets/images/portfolio/masonry/02.jpg'
import masonry3 from '@/assets/images/portfolio/masonry/03.jpg'
import masonry4 from '@/assets/images/portfolio/masonry/04.jpg'
import masonry5 from '@/assets/images/portfolio/masonry/05.jpg'
import masonry6 from '@/assets/images/portfolio/masonry/06.jpg'
import masonry7 from '@/assets/images/portfolio/masonry/07.jpg'
import masonry8 from '@/assets/images/portfolio/masonry/08.jpg'
import masonry9 from '@/assets/images/portfolio/masonry/09.jpg'
import type { RouteType } from '@/types'

export type PortfolioType = {
  title: string
  category: string
  categoryClass: string
  image: string
  route: RouteType
}

export const portfolioData: PortfolioType[] = [
  {
    title: 'Dynamic Workflows Website',
    category: 'UI/UX design',
    image: masonry1,
    categoryClass: 'business brand marketing',
    route: { name: 'portfolio.case-study.v1' }
  },
  {
    title: 'ElevateTech Redesign',
    category: 'brand design',
    image: masonry4,
    categoryClass: 'brand ui',
    route: { name: 'portfolio.case-study.v1' }
  },
  {
    title: 'UI/UX Enhancement for SnapMediae',
    category: 'UI/UX design',
    image: masonry9,
    categoryClass: 'ui',
    route: { name: 'portfolio.case-study.v1' }
  },
  {
    title: 'Sustainability Initiative',
    category: 'Business dev',
    image: masonry5,
    categoryClass: 'design marketing',
    route: { name: 'portfolio.case-study.v1' }
  },
  {
    title: 'User-Centric Redesign',
    category: 'Web design',
    image: masonry2,
    categoryClass: 'business design brand',
    route: { name: 'portfolio.case-study.v1' }
  },
  {
    title: 'Website Optimization for TechWave',
    category: 'Web design',
    image: masonry7,
    categoryClass: 'business design brand',
    route: { name: 'portfolio.case-study.v1' }
  },
  {
    title: 'E-commerce Expansion',
    category: 'Digital Marketing',
    image: masonry6,
    categoryClass: 'business design',
    route: { name: 'portfolio.case-study.v1' }
  },
  {
    title: 'A Triumph of Software',
    category: 'Digital Marketing',
    image: masonry8,
    categoryClass: 'business design',
    route: { name: 'portfolio.case-study.v1' }
  },
  {
    title: 'Social Media Engagement',
    category: 'UI/UX design',
    image: masonry3,
    categoryClass: 'ui',
    route: { name: 'portfolio.case-study.v1' }
  }
]

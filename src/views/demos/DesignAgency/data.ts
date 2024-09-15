import type { BlogType, ProjectType, ServiceType, StatisticType, TestimonialType } from '@/types'

import serviceImg1 from '@/assets/images/services/icons/web-design.svg'
import serviceImg2 from '@/assets/images/services/icons/brand-design.svg'
import serviceImg3 from '@/assets/images/services/icons/graphic-design.svg'
import serviceImg4 from '@/assets/images/services/icons/social-media.svg'
import serviceImg5 from '@/assets/images/services/icons/motion-graphics.svg'

import portfolio1 from '@/assets/images/portfolio/3by4/01.jpg'
import portfolio2 from '@/assets/images/portfolio/3by4/02.jpg'
import portfolio3 from '@/assets/images/portfolio/3by4/03.jpg'
import portfolio4 from '@/assets/images/portfolio/3by4/04.jpg'
import portfolio5 from '@/assets/images/portfolio/3by4/05.jpg'
import portfolio6 from '@/assets/images/portfolio/3by4/06.jpg'

import avatar4 from '@/assets/images/avatar/04.jpg'
import avatar9 from '@/assets/images/avatar/09.jpg'
import avatar11 from '@/assets/images/avatar/11.jpg'

import blog1 from '@/assets/images/blog/4by3/01.jpg'
import blog2 from '@/assets/images/blog/4by3/02.jpg'

export const services: ServiceType[] = [
  {
    title: 'Web Development',
    description:
      'Our expert developers ensure seamless functionality and optimal performance for a user-friendly experience across all devices.',
    image: serviceImg1,
    route: { name: '' }
  },
  {
    title: 'Brand Identity',
    description:
      'Make a lasting impression with a unique brand identity and logo design crafted to reflect your values and resonate with your target market.',
    image: serviceImg2,
    route: { name: '' }
  },
  {
    title: 'Graphic Design',
    description:
      'From eye-catching graphics to captivating illustrations, our talented designers bring your ideas to life in stunning visual creations.',
    image: serviceImg3,
    route: { name: '' }
  },
  {
    title: 'Social Media Graphics',
    description:
      'Our social media design services help you create visually appealing posts and ads that connect with your audience and drive results.',
    image: serviceImg4,
    route: { name: '' }
  },
  {
    title: 'Motion Graphics',
    description:
      'Bring your brand to life with dynamic motion graphics and animations that capture attention and convey your message in an engaging way.',
    image: serviceImg5,
    route: { name: '' }
  }
]

export const projects: ProjectType[] = [
  {
    name: 'Sustainability Initiative',
    image: portfolio1,
    route: { name: 'portfolio.case-study.v2' }
  },
  {
    name: 'Digital Delight',
    image: portfolio6,
    route: { name: 'portfolio.case-study.v2' }
  },
  {
    name: 'Mobile Magic',
    image: portfolio4,
    route: { name: 'portfolio.case-study.v2' }
  },
  {
    name: 'Social Media Brilliance',
    image: portfolio3,
    route: { name: 'portfolio.case-study.v2' }
  },
  {
    name: 'Motion Marvels',
    image: portfolio5,
    route: { name: 'portfolio.case-study.v2' }
  },
  {
    name: 'Innovation Unleashed',
    image: portfolio2,
    route: { name: 'portfolio.case-study.v2' }
  }
]

export const testimonials: TestimonialType[] = [
  {
    user: {
      avatar: avatar11,
      firstName: 'Emma',
      lastName: 'Watson',
      role: 'Co-founder',
      company: {
        name: 'blogzine'
      }
    },
    comment:
      "We've partnered with Mizzle on multiple projects, and each time, they've delivered exceptional results. Their team goes above and beyond to understand our goals and deliver designs that resonate with our audience.",
    rating: 4.5
  },
  {
    user: {
      avatar: avatar4,
      firstName: 'Louis',
      lastName: 'Ferguson',
      role: 'Web Developer'
    },
    comment:
      "It took our startup's branding to the next level with their exceptional design skills. They understood our vision and delivered a brand identity that perfectly captures our ethos. ",
    rating: 4.5
  },
  {
    user: {
      avatar: avatar9,
      firstName: 'Samuel',
      lastName: 'Bishop',
      role: 'Product designer'
    },
    comment:
      "Their team brings a level of creativity and innovation that's hard to find elsewhere. They're not just designers, they're strategic partners who are invested in the success of our projects. We look forward to continuing our partnership.",
    rating: 4.5
  }
]

export const statData: StatisticType[] = [
  {
    title: 'Brand strategy',
    number: 75,
    suffix: '%',
    description: "Our approach to brand strategy begins with company's goals."
  },
  {
    title: 'Categories',
    number: 220,
    suffix: '+',
    description: 'An In-depth Analysis of Marketplace Users in the Year 2024'
  },
  {
    title: 'Projects',
    number: 180,
    suffix: '+',
    description: 'Successfully finished projects with creativity.'
  },
  {
    title: 'Publishing',
    number: 1045,
    description: 'Highlighting Impactful Engagement and User Involvement'
  }
]

export const blogs: BlogType[] = [
  {
    title: 'Mastering Responsive Web Design with Bootstrap',
    publishedBy: {
      firstName: 'Jacqueline',
      lastName: 'Miller'
    },
    image: blog1,
    route: { name: 'blog.single.v1' }
  },
  {
    title: 'Bootstrap Mastery: Designing Stunning Websites',
    publishedBy: {
      firstName: 'Dennis',
      lastName: 'Barrett'
    },
    image: blog2,
    route: { name: 'blog.single.v1' }
  }
]

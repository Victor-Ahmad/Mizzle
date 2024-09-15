import blog1 from '@/assets/images/blog/4by4/01.jpg'
import blog2 from '@/assets/images/blog/4by4/02.jpg'
import blog3 from '@/assets/images/blog/4by4/03.jpg'
import blog4 from '@/assets/images/blog/4by4/04.jpg'
import blog5 from '@/assets/images/blog/4by4/05.jpg'
import blog6 from '@/assets/images/blog/4by4/06.jpg'
import blog7 from '@/assets/images/blog/4by4/07.jpg'
import blog8 from '@/assets/images/blog/4by4/08.jpg'
import blog9 from '@/assets/images/blog/4by4/09.jpg'
import blog10 from '@/assets/images/blog/4by4/10.jpg'
import type { BlogType } from '@/types'

export const blogCategories: BlogType[] = [
  {
    category: 'Lifestyle',
    image: blog1
  },
  {
    category: 'Technology',
    image: blog2
  },
  {
    category: 'Design',
    image: blog3
  },
  {
    category: 'Marketing',
    image: blog4
  },
  {
    category: 'Research',
    image: blog5
  }
]

export type BlogType2 = {
  isSponsored?: boolean
} & BlogType

export const blogs: BlogType2[] = [
  {
    title: 'The Power of Gratitude: Cultivating Joy and Abundance',
    category: 'Technology',
    publishedBy: {
      firstName: 'Carolyn',
      lastName: 'Ortiz'
    },
    image: blog6,
    route: { name: 'blog.single.v1' }
  },
  {
    title: '5 investment doubts you should clarify',
    category: 'Lifestyle',
    publishedBy: {
      firstName: 'Amanda',
      lastName: 'Reed'
    },
    image: blog7,
    isSponsored: true,
    route: { name: 'blog.single.v1' }
  },
  {
    title: 'Mastering Responsive Web Design with Bootstrap',
    category: 'Design',
    publishedBy: {
      firstName: 'Joan',
      lastName: 'Wallace'
    },
    image: blog8,
    route: { name: 'blog.single.v1' }
  },
  {
    title: 'Effortless Web Development with Mizzle',
    category: 'Marketing',
    publishedBy: {
      firstName: 'Lori',
      lastName: 'Stevens'
    },
    image: blog9,
    route: { name: 'blog.single.v1' }
  },
  {
    title: 'Ten questions you should answer truthfully.',
    category: 'Research',
    publishedBy: {
      firstName: 'Louis',
      lastName: 'Crawford'
    },
    image: blog10,
    route: { name: 'blog.single.v1' }
  }
]

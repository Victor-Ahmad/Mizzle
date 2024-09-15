import type { BlogType } from '@/types'
import blog1 from '@/assets/images/blog/4by3/01.jpg'
import blog2 from '@/assets/images/blog/4by3/02.jpg'
import blog3 from '@/assets/images/blog/4by3/03.jpg'
import blog4 from '@/assets/images/blog/4by3/04.jpg'
import blog5 from '@/assets/images/blog/4by3/05.jpg'

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
  },
  {
    title: 'Interactive Web Design with Bootstrap and Stackbros',
    publishedBy: {
      firstName: 'Carolyn',
      lastName: 'Ortiz'
    },
    image: blog3,
    route: { name: 'blog.single.v1' }
  },
  {
    title: 'Effortless Web Development with Mizzle',
    publishedBy: {
      firstName: 'Carolyn',
      lastName: 'Ortiz'
    },
    image: blog4,
    route: { name: 'blog.single.v1' }
  },
  {
    title: 'Sleek and Responsive - Designing with Bootstrap and Mizzle',
    publishedBy: {
      firstName: 'Carolyn',
      lastName: 'Ortiz'
    },
    image: blog5,
    route: { name: 'blog.single.v1' }
  }
]

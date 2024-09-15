import type { BlogType } from '@/types'
import blog1 from '@/assets/images/blog/01.jpg'
import blog2 from '@/assets/images/blog/02.jpg'
import blog3 from '@/assets/images/blog/03.jpg'

import blogImg1 from '@/assets/images/blog/4by3/01.jpg'
import blogImg2 from '@/assets/images/blog/4by3/02.jpg'
import blogImg3 from '@/assets/images/blog/4by3/03.jpg'
import blogImg4 from '@/assets/images/blog/4by3/04.jpg'
import blogImg5 from '@/assets/images/blog/4by3/05.jpg'
import blogImg6 from '@/assets/images/blog/4by3/06.jpg'
import blogImg7 from '@/assets/images/blog/4by3/07.jpg'

export const blogSlides: BlogType[] = [
  {
    title: 'The Evolution of Branding: Unleashing Potential',
    publishedBy: {
      firstName: 'Frances',
      lastName: 'Guerrero'
    },
    publishedAt: {
      date: 5,
      month: 'Nov',
      year: 2018,
      minute: 4
    },
    category: 'Marketing',
    image: blog1,
    route: { name: 'blog.single.v2' }
  },
  {
    publishedBy: {
      firstName: 'Carolyn',
      lastName: 'Ortiz'
    },
    publishedAt: {
      date: 5,
      month: 'Nov',
      year: 2018,
      minute: 4
    },
    title: 'The Power of Gratitude: Cultivating Joy and Abundance',
    category: 'Lifestyle',
    image: blog2,
    route: { name: 'blog.single.v2' }
  },
  {
    publishedBy: {
      firstName: 'Joan',
      lastName: 'Wallace'
    },
    publishedAt: {
      date: 5,
      month: 'Nov',
      year: 2018,
      minute: 4
    },
    title: 'Interactive Web Design with Bootstrap and Stackbros',
    category: 'Design',
    image: blog3,
    route: { name: 'blog.single.v2' }
  }
]

export const blogs: BlogType[] = [
  {
    title: '10 things you need to know about Mizzle',
    description:
      'Consider your expertise, personal experiences, and what you can uniquely offer to your readers.',
    category: 'Technology',
    publishedBy: {
      firstName: 'Bryan',
      lastName: 'Knight'
    },
    image: blogImg1,
    route: { name: 'blog.single.v1' }
  },
  {
    title: 'The Power of Gratitude: Cultivating Joy and Abundance',
    description:
      'By focusing on a niche, you can establish yourself as an authority and build a dedicated community.',
    category: 'Lifestyle',
    publishedBy: {
      firstName: 'Carolyn',
      lastName: 'Ortiz'
    },
    image: blogImg2,
    route: { name: 'blog.single.v1' }
  },
  {
    title: 'Effortless Web Development with Mizzle',
    description:
      "Building a successful blog takes dedication. Don't be discouraged by slow growth in the early stages.",
    category: 'Marketing',
    publishedBy: {
      firstName: 'Lori',
      lastName: 'Stevens'
    },
    image: blogImg3,
    route: { name: 'blog.single.v1' }
  },
  {
    title: 'Ten questions you should answer truthfully.',
    description: 'Remember, blogging is a continuous learning process, so stay open to new ideas.',
    category: 'Research',
    publishedBy: {
      firstName: 'Louis',
      lastName: 'Crawford'
    },
    image: blogImg4,
    route: { name: 'blog.single.v1' }
  },
  {
    title: 'Mastering Responsive Web Design with Bootstrap',
    description:
      'Focus on creating valuable content, implementing and continuously improving your blog.',
    category: 'Design',
    publishedBy: {
      firstName: 'Joan',
      lastName: 'Wallace'
    },
    image: blogImg5,
    route: { name: 'blog.single.v1' }
  },
  {
    title: '5 investment doubts you should clarify',
    description: 'Remember, blogging is a continuous learning process, so stay open to new ideas',
    category: 'Marketing',
    publishedBy: {
      firstName: 'Amanda',
      lastName: 'Reed'
    },
    image: blogImg6,
    route: { name: 'blog.single.v1' }
  },
  {
    title: '10 things you need to know about Mizzle',
    description:
      'Consider your expertise, personal experiences, and what you can uniquely offer to your readers.',
    category: 'Technology',
    publishedBy: {
      firstName: 'Bryan',
      lastName: 'Knight'
    },
    image: blogImg7,
    route: { name: 'blog.single.v1' }
  }
]

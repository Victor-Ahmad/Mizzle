import {
  businessIcon,
  businessIcon2,
  designIcon,
  marketingIcon,
  strategicIcon,
  taxIcon
} from '@/assets/data/icons'
import type { BlogType, FAQType, ProjectType, ServiceType, TestimonialType } from '@/types'

import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar7 from '@/assets/images/avatar/07.jpg'
import client2 from '@/assets/images/client/02.svg'
import client4 from '@/assets/images/client/04.svg'
import client6 from '@/assets/images/client/06.svg'

import blogImg1 from '@/assets/images/blog/4by3/01.jpg'
import blogImg2 from '@/assets/images/blog/4by3/02.jpg'
import blogImg3 from '@/assets/images/blog/4by3/03.jpg'
import blogImg4 from '@/assets/images/blog/4by3/04.jpg'
import blogImg5 from '@/assets/images/blog/4by3/05.jpg'

import portfolioImg1 from '@/assets/images/portfolio/masonry/01.jpg'
import portfolioImg2 from '@/assets/images/portfolio/masonry/02.jpg'
import portfolioImg3 from '@/assets/images/portfolio/masonry/03.jpg'
import portfolioImg4 from '@/assets/images/portfolio/masonry/04.jpg'
import portfolioImg5 from '@/assets/images/portfolio/masonry/05.jpg'
import portfolioImg6 from '@/assets/images/portfolio/masonry/06.jpg'

export type RecentProjectType = {
  categoryClass: string
} & ProjectType

export const services: ServiceType[] = [
  {
    title: 'Business analysis',
    description:
      "Our Business Analysis service is the first step in understanding your organization's current state.",
    icon: businessIcon
  },
  {
    title: 'Strategic planning',
    description:
      'We work closely with you to develop a tailored roadmap that aligns with your goals and objectives.',
    icon: strategicIcon
  },
  {
    title: 'Marketing strategy',
    description:
      "Our Marketing Strategy service is designed to elevate your brand's visibility and engagement.",
    icon: marketingIcon
  },
  {
    title: 'Experience design',
    description:
      'From website design to app development, we blend aesthetics with usability to leave a lasting impression.',
    icon: designIcon
  },
  {
    title: 'Business consulting',
    description: 'Our consultants become your trusted advisors on the path to success.',
    icon: businessIcon2
  },
  {
    title: 'Tax consultant',
    description:
      "We're here to optimize your tax strategy, so you can focus on what matters most to your business.",
    icon: taxIcon
  }
]

export const testimonials: TestimonialType[] = [
  {
    comment:
      'Your assistance has been incredibly helpful. I appreciate the prompt and insightful responses, which have made my task much easier. Thank you for the great support',
    user: {
      avatar: avatar5,
      company: {
        name: 'Blogzine',
        image: client6
      },
      role: 'Ceo and manager',
      firstName: 'Jacqueline',
      lastName: 'Miller'
    }
  },
  {
    comment:
      'It consistently delivers accurate and well-crafted responses, saving me a lot of time and effort. Thank you for this invaluable resource!',
    user: {
      avatar: avatar7,
      company: {
        name: 'Blogzine',
        image: client4
      },
      role: 'Ceo and manager',
      firstName: 'Dennis',
      lastName: 'Barrett'
    }
  },
  {
    comment:
      "The best Bootstrap theme we've ever used - it's easy to customize and comes with all the features we need.",
    user: {
      avatar: avatar5,
      company: {
        name: 'Blogzine',
        image: client2
      },
      role: 'Ceo and manager',
      firstName: 'Dennis',
      lastName: 'Barrett'
    }
  }
]

export const faqData: FAQType[] = [
  {
    question: 'Real-time Collaboration',
    answer:
      'Collaborate seamlessly with team members in real time. Share drafts, make edits, and work together efficiently to create content that meets your goals. Sight House has sex never. No visit raising gravity outward subject.'
  },
  {
    question: 'Robust API Integration',
    answer:
      'Our platform offers robust API integration options, allowing you to integrate our content generation capabilities into your existing software, apps, or platforms.'
  },
  {
    question: 'Privacy and Security',
    answer:
      "We prioritize your data's security and privacy. Our platform adheres to the highest standards of data protection to ensure your content remains confidential and secure."
  },
  {
    question: 'Cost-Effective Solutions',
    answer:
      'We offer flexible pricing options to suit your needs, ensuring you get the most value from our platform without breaking the bank.'
  },
  {
    question: 'Data Analytics',
    answer:
      'Offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me..'
  }
]

export const blogs: BlogType[] = [
  {
    title: 'Mastering Responsive Web Design with Bootstrap',
    publishedBy: {
      firstName: 'Jacqueline',
      lastName: 'Miller'
    },
    image: blogImg1,
    route: { name: 'blog.single.v1' }
  },
  {
    title: 'Bootstrap Mastery: Designing Stunning Websites',
    publishedBy: {
      firstName: 'Dennis',
      lastName: 'Barrett'
    },
    image: blogImg2,
    route: { name: 'blog.single.v1' }
  },
  {
    title: 'Interactive Web Design with Bootstrap and Stackbros',
    publishedBy: {
      firstName: 'Carolyn',
      lastName: 'Ortiz'
    },
    image: blogImg3,
    route: { name: 'blog.single.v1' }
  },
  {
    title: 'Effortless Web Development with Mizzle',
    publishedBy: {
      firstName: 'Carolyn',
      lastName: 'Ortiz'
    },
    image: blogImg4,
    route: { name: 'blog.single.v1' }
  },
  {
    title: 'Sleek and Responsive - Designing with Bootstrap and Mizzle',
    publishedBy: {
      firstName: 'Carolyn',
      lastName: 'Ortiz'
    },
    image: blogImg5,
    route: { name: 'blog.single.v1' }
  }
]

export const projects: RecentProjectType[] = [
  {
    name: 'Dynamic Workflows Website',
    category: 'UI/UX design',
    categoryClass: 'marketing business brand',
    image: portfolioImg1,
    route: { name: 'portfolio.case-study.v1' }
  },
  {
    name: 'ElevateTech Redesign',
    category: 'Brand design',
    categoryClass: 'brand ui',
    image: portfolioImg4,
    route: { name: 'portfolio.case-study.v1' }
  },
  {
    name: 'User-Centric Redesign',
    category: 'Web design',
    categoryClass: 'business design brand',
    image: portfolioImg2,
    route: { name: 'portfolio.case-study.v1' }
  },
  {
    name: 'Sustainability Initiative',
    category: 'Business dev',
    categoryClass: 'design marketing',
    image: portfolioImg5,
    route: { name: 'portfolio.case-study.v1' }
  },
  {
    name: 'E-commerce Expansion',
    category: 'Digital Marketing',
    categoryClass: 'business design',
    image: portfolioImg6,
    route: { name: 'portfolio.case-study.v1' }
  },
  {
    name: 'Social Media Engagement',
    category: 'UI/UX design',
    categoryClass: 'ui',
    image: portfolioImg3,
    route: { name: 'portfolio.case-study.v1' }
  }
]

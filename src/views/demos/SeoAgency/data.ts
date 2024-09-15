import type { ArticleType, CompanyType, MemberType, StepType, TestimonialType } from '@/types'

import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

import listImg1 from '@/assets/images/portfolio/list/01.jpg'
import listImg2 from '@/assets/images/portfolio/list/02.jpg'
import listImg3 from '@/assets/images/portfolio/list/03.jpg'

import client2 from '@/assets/images/client/client-white/02.svg'
import client3 from '@/assets/images/client/client-white/03.svg'
import client4 from '@/assets/images/client/client-white/04.svg'

import avatar4 from '@/assets/images/avatar/04.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar6 from '@/assets/images/avatar/06.jpg'
import avatar9 from '@/assets/images/avatar/09.jpg'
import avatar10 from '@/assets/images/avatar/10.jpg'
import avatar11 from '@/assets/images/avatar/11.jpg'

export type CaseStudyType = {
  company: CompanyType
} & ArticleType

export const testimonials: TestimonialType[] = [
  {
    user: {
      firstName: 'Jacqueline',
      lastName: 'Miller',
      role: 'Product designer'
    },
    comment:
      "Our passion for customer excellence is just one reason why we are the market leader. We've always worked very hard to give our customers the best experience."
  },
  {
    user: {
      firstName: 'Emma',
      lastName: 'Watson',
      role: 'Co-Founder'
    },
    comment:
      'Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled. Tried law yet style child. The bore of true of no be deal.'
  },
  {
    user: {
      firstName: 'Louis',
      lastName: 'Ferguson',
      role: 'Web Developer'
    },
    comment:
      'Two before narrow not relied on how except moment myself Dejection assurance Mrs led certainly So gate at no only none open Betrayed.'
  }
]

export const caseStudies: CaseStudyType[] = [
  {
    company: {
      image: client2
    },
    title: 'Website Optimization for TechWave',
    description: 'The most powerful software & app landing software marketing business.',
    tags: ['Branding', 'Packaging', 'Development'],
    image: listImg2,
    route: { name: 'portfolio.case-study.v2' }
  },
  {
    company: {
      image: client3
    },
    title: 'Transforming Ideas into Reality',
    description: 'The most powerful software & app landing software marketing business.',
    tags: ['UI/UX design', 'Research'],
    image: listImg1,
    route: { name: 'portfolio.case-study.v2' }
  },
  {
    company: {
      image: client4
    },
    title: 'Bio Cosmetics',
    description: 'The most powerful software & app landing software marketing business.',
    tags: ['Branding', 'UI/UX design'],
    image: listImg3,
    route: { name: 'portfolio.case-study.v2' }
  }
]

export const approachSteps: StepType[] = [
  {
    stepNumber: 1,
    title: 'Business understanding',
    description:
      'We begin by gaining a deep understanding of your business, industry, and target audience.'
  },
  {
    stepNumber: 2,
    title: 'Keyword research',
    description:
      'Our approach starts with comprehensive keyword research potential customers are searching for.'
  },
  {
    stepNumber: 3,
    title: 'Technical optimization',
    description:
      'We conduct a thorough technical audit of your website to identify any issues that may be hindering its.'
  },
  {
    stepNumber: 4,
    title: 'Content strategy',
    description:
      'Content is king in the world of SEO. We develop a strategic content plan that aligns with your.'
  },
  {
    stepNumber: 5,
    title: 'Transparent Reporting',
    description:
      'We provide regular reports and updates on the progress of your SEO campaigns giving you full.'
  }
]

export const teamMembers: MemberType[] = [
  {
    firstName: 'Samuel',
    lastName: 'Bishop',
    socialLinks: [
      {
        icon: faFacebookF,
        route: { name: '' }
      },
      {
        icon: faInstagram,
        route: { name: '' }
      },
      {
        icon: faTwitter,
        route: { name: '' }
      }
    ],
    role: 'UI/UX Designer',
    avatar: avatar4
  },
  {
    firstName: 'Judy',
    lastName: 'Nguyen',
    socialLinks: [
      {
        icon: faFacebookF,
        route: { name: '' }
      },
      {
        icon: faInstagram,
        route: { name: '' }
      },
      {
        icon: faTwitter,
        route: { name: '' }
      }
    ],
    role: 'Web Designer',
    avatar: avatar11
  },
  {
    firstName: 'Louis',
    lastName: 'Ferguson',
    socialLinks: [
      {
        icon: faFacebookF,
        route: { name: '' }
      },
      {
        icon: faInstagram,
        route: { name: '' }
      },
      {
        icon: faTwitter,
        route: { name: '' }
      }
    ],
    role: 'Web Developer',
    avatar: avatar6
  },
  {
    firstName: 'Dennis',
    lastName: 'Barrett',
    socialLinks: [
      {
        icon: faFacebookF,
        route: { name: '' }
      },
      {
        icon: faInstagram,
        route: { name: '' }
      },
      {
        icon: faTwitter,
        route: { name: '' }
      }
    ],
    role: 'CEO & Founder',
    avatar: avatar9
  },
  {
    firstName: 'Dennis',
    lastName: 'Barrett',
    socialLinks: [
      {
        icon: faFacebookF,
        route: { name: '' }
      },
      {
        icon: faInstagram,
        route: { name: '' }
      },
      {
        icon: faTwitter,
        route: { name: '' }
      }
    ],
    role: 'CEO & Founder',
    avatar: avatar5
  },
  {
    firstName: 'Bryan',
    lastName: 'Knight',
    socialLinks: [
      {
        icon: faFacebookF,
        route: { name: '' }
      },
      {
        icon: faInstagram,
        route: { name: '' }
      },
      {
        icon: faTwitter,
        route: { name: '' }
      }
    ],
    role: 'Product Designer',
    avatar: avatar10
  }
]

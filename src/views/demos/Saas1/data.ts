import type { BlogType, FeatureType, PricingPlanType, StatisticType } from '@/types'
import { BIconCheckCircleFill } from 'bootstrap-icons-vue'

export const features: FeatureType[] = [
  {
    title: 'Explaining the value of design',
    description:
      "It's the thoughtful arrangement of elements that not only enhances visual appeal but also improves functionality, usability, and user experience. Effective design communicates your brand's identity, cultivates trust, and can significantly impact conversion rates and customer loyalty."
  },
  {
    title: 'Discover resources for color-accessible',
    description:
      'We provide a range of tools, guides, and best practices to help you create designs, websites, and content that are inclusive and accessible to all individuals, regardless of their visual abilities.'
  },
  {
    title: 'Checking interface contrast for accessibility standards',
    description:
      'This crucial process ensures that content is easily readable and perceivable by individuals with varying degrees of visual impairment. By adhering to accessibility standards, you create a more inclusive and user-friendly experience for all users, regardless of their visual abilities, and contribute to a more accessible digital environment.'
  },
  {
    title: 'Checking accessibility on browsers',
    description:
      'By evaluating how your digital content and features perform across different browsers, you can identify potential accessibility issues and make necessary adjustments to provide a seamless and accessible online experience for users regardless of their choice of browser.'
  }
]

export const statData: StatisticType[] = [
  {
    title: 'Project management in a day',
    number: 150,
    suffix: '+'
  },
  {
    title: 'Hour save for our customer',
    number: 120,
    suffix: '+'
  },
  {
    title: 'Positive user reviews',
    number: 10,
    suffix: 'M+'
  },
  {
    title: 'Happy customers',
    number: 600,
    suffix: '+'
  }
]

export const pricingData: PricingPlanType[] = [
  {
    title: 'Basic Plan',
    price: 25,
    features: [
      { icon: BIconCheckCircleFill, title: 'Access to basic feature' },
      { icon: BIconCheckCircleFill, title: 'Basic reporting and analytics' },
      { icon: BIconCheckCircleFill, title: 'Up to 10 individual users' },
      { icon: BIconCheckCircleFill, title: '20GB individual data each year' },
      { icon: BIconCheckCircleFill, title: 'Basic chat and email support' },
      { icon: BIconCheckCircleFill, title: 'Ongoing best practices and reviews' }
    ]
  },
  {
    title: 'Business Plan',
    isPopular: true,
    price: 50,
    features: [
      { icon: BIconCheckCircleFill, title: '200+ integrations' },
      { icon: BIconCheckCircleFill, title: 'Basic reporting and analytics' },
      { icon: BIconCheckCircleFill, title: 'Up to 10 individual users' },
      { icon: BIconCheckCircleFill, title: '40GB individual data each year' },
      { icon: BIconCheckCircleFill, title: 'Priority chat and email support' },
      { icon: BIconCheckCircleFill, title: 'Ongoing best practices and reviews' }
    ]
  },
  {
    title: 'Enterprise Plan',
    price: 85,
    features: [
      { icon: BIconCheckCircleFill, title: 'Advanced custom field' },
      { icon: BIconCheckCircleFill, title: 'Audit log and data history' },
      { icon: BIconCheckCircleFill, title: 'Ultimate individual users' },
      { icon: BIconCheckCircleFill, title: '60GB individual data each year' },
      { icon: BIconCheckCircleFill, title: 'Basic chat and email support' },
      { icon: BIconCheckCircleFill, title: 'Ongoing best practices and reviews' }
    ]
  }
]

export const blogs: BlogType[] = [
  {
    title: 'Bootstrap Made Easy - Customizing Your HTML theme Like a Pro',
    publishedBy: {
      firstName: 'Jacqueline',
      lastName: 'Miller'
    },
    publishedAt: {
      date: 8,
      month: 'April',
      year: 2023
    },
    route: { name: 'blog.single.v1' }
  },
  {
    title: 'Effortless Web Design with Mizzle - Unlock Your Creative Potential',
    publishedBy: {
      firstName: 'Allen',
      lastName: 'Smith'
    },
    publishedAt: {
      date: 13,
      month: 'April',
      year: 2023
    },
    route: { name: 'blog.single.v1' }
  },
  {
    title: 'Mastering HTML Website Templates - Unleash Your Creativity with Bootstrap',
    publishedBy: {
      firstName: 'Jacqueline',
      lastName: 'Miller'
    },
    publishedAt: {
      date: 15,
      month: 'April',
      year: 2023
    },
    route: { name: 'blog.single.v1' }
  }
]

import { barChartIcon, dollarIcon, donutChartIcon, homeIcon, stackIcon } from '@/assets/data/icons'
import { BIconBug, BIconCupStraw, BIconGem, BIconRocketTakeoff } from 'bootstrap-icons-vue'
import type { ServiceType, StepType } from '@/types'

export type FinanceServiceType = {
  features: string[]
} & ServiceType

export const services: FinanceServiceType[] = [
  {
    title: 'Financial planning',
    features: [
      'Personalized Financial Assessment',
      'Customized Goal Setting',
      'Tailored Financial Roadmap'
    ],
    icon: donutChartIcon,
    route: { name: '' }
  },
  {
    title: 'Retirement planning',
    features: [
      'Income and Expense Analysis',
      'Tailored Investment Strategy',
      'Retirement Goal Setting'
    ],
    icon: barChartIcon,
    route: { name: '' }
  },
  {
    title: 'Tax planning and optimization',
    features: ['Strategic Tax Planning Strategies', 'Tax-Efficient Investment Guidance'],
    icon: stackIcon,
    route: { name: '' }
  },
  {
    title: 'Estate planning',
    features: ['Wills and Trusts', 'Asset Protection Strategies', 'Succession Planning'],
    icon: homeIcon,
    route: { name: '' }
  },
  {
    title: 'Management and insurance',
    features: ['Risk Assessment and Analysis', 'Customized Insurance', 'Claims Management Support'],
    icon: dollarIcon,
    route: { name: '' }
  }
]

export const financeSteps: StepType[] = [
  {
    title: 'Personalized approach',
    description: 'Receive tailored financial solutions your needs and goals.',
    icon: BIconRocketTakeoff
  },
  {
    title: 'Expert guidance',
    description: 'Benefit from the expertise of seasoned a deep understanding.',
    icon: BIconGem
  },
  {
    title: 'Client-centric focus',
    description: 'Enjoy exceptional service focused long-term relationships.',
    icon: BIconCupStraw
  },
  {
    title: 'Comprehensive solutions',
    description: 'Access a wide range of services under one investment',
    icon: BIconBug
  }
]

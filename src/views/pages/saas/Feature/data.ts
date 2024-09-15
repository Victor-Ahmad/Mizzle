import {
  bellIcon,
  fileIcon,
  locationIcon,
  messageIcon,
  peopleIcon,
  rocketIcon
} from '@/assets/data/icons'
import type { BSIconType, CounterType, FeatureType, ServiceType } from '@/types'
import { BIconBoxes, BIconDiagram3, BIconPeople, BIconShieldCheck } from 'bootstrap-icons-vue'

type FeaturesType = {
  title1: string
  icon1: BSIconType
  description1: string
} & FeatureType

export const featureContent: FeatureType[] = [
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

export const counterData: CounterType[] = [
  {
    title: 'Project management in a day',
    state: 150,
    suffix: '+'
  },
  {
    title: 'Hour save for our customer',
    state: 120,
    suffix: '+'
  },
  {
    title: 'Positive user reviews',
    state: 10,
    suffix: 'M+'
  },
  {
    title: 'Happy customers',
    state: 600,
    suffix: '+'
  }
]

export const features: FeaturesType[] = [
  {
    icon: BIconDiagram3,
    title: 'Organized your data',
    description: 'We have good cloud server',
    icon1: BIconBoxes,
    title1: 'Embedded Analytics',
    description1: 'Once paid for forever use'
  },
  {
    icon: BIconPeople,
    title: 'Work with any team',
    description: 'Ready to help your employee',
    icon1: BIconShieldCheck,
    title1: 'Collaborate securely',
    description1: 'Share and publish your record.'
  }
]

export const feature: FeatureType[] = [
  {
    title: 'Assignment & roles',
    description:
      'Assign owners to conversations, and delegate to team members to follow every update.',
    icon: peopleIcon
  },
  {
    title: 'Internal-only messages',
    description:
      'Ask a quick six seven offer see among. Handsome met debating sir dwelling age material.',
    icon: messageIcon
  },
  {
    title: 'File previews',
    description:
      'Far advanced settling say finished raillery. Offered chiefly farther of my no colonel shyness.',
    icon: fileIcon
  },
  {
    title: 'Large attachments',
    description:
      'Affronting imprudence does everything. Sex lasted dinner wanted indeed wished outlaw.',
    icon: rocketIcon
  },
  {
    title: 'Reminders',
    description:
      'Such on help ye some door if in. Laughter proposal laughing any son law consider.',
    icon: bellIcon
  },
  {
    title: 'Location tracking',
    description:
      'State burst think end are its. Arrived off she elderly beloved him affixed noisier yet.',
    icon: locationIcon
  }
]

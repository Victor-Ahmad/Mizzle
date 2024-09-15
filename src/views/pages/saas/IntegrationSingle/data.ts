import github from '@/assets/images/elements/github.svg'
import dropbox from '@/assets/images/elements/dropbox.svg'
import reddit from '@/assets/images/elements/reddit.svg'
import type { ServiceType } from '@/types'

export const grid: ServiceType[] = [
  {
    image: github,
    title: 'Github',
    description:
      'GitHub employs Git, a distributed version control system, to track changes to code over time.'
  },
  {
    image: dropbox,
    title: 'Dropbox',
    description:
      'Integrating Dropbox with backup solutions can provide an additional layer of data protection.'
  },
  {
    image: reddit,
    title: 'Reddit',
    description:
      'With Reddit integration, you can easily share Reddit posts or comments on other like blogs or websites.'
  }
]

export const list: string[] = [
  `Receive instant notifications in Mizzle whenever there's an update or action in Slack`,
  `Effortlessly create, assign, and manage tasks in both platforms, ensuring nothing falls through the cracks.`,
  `Keep all your data consistent and up to date, whether it's customer information, project details, or important messages.`
]

export const list2: string[] = ['Instant Notifications', 'File Sharing', 'Seamless Communication']

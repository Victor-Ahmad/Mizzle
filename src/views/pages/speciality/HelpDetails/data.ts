import type { ServiceType } from '@/types'
import { BIconEnvelopeOpen, BIconHeadset, BIconTicketPerforated } from 'bootstrap-icons-vue'

export const helpData: string[] = [
  'Gulp and Customization',
  'Color Scheme and Logo Settings',
  'Dark mode, RTL Version',
  'Updates and Support',
  'Describing your store'
]

export const supportlinkData: ServiceType[] = [
  {
    icon: BIconHeadset,
    title: 'Contact Support',
    description: 'Not finding the help you need?'
  },
  {
    icon: BIconTicketPerforated,
    title: 'Submit a Ticket',
    description: 'Prosperous impression had delay'
  },
  {
    icon: BIconEnvelopeOpen,
    title: 'Email us',
    description: 'Reach us at'
  }
]

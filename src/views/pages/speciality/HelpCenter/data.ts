import type { FAQType, ServiceType } from '@/types'
import {
  BIconAppIndicator,
  BIconBoxes,
  BIconCashCoin,
  BIconEmojiSmile,
  BIconEnvelopeOpen,
  BIconHeadset,
  BIconHouse,
  BIconLayers,
  BIconTicketPerforated
} from 'bootstrap-icons-vue'

export type HelpType = {
  content: string[]
} & ServiceType

export const helpData: HelpType[] = [
  {
    icon: BIconBoxes,
    title: 'Get Started',
    content: [
      'Gulp and Customization',
      'Color Scheme and Logo Settings',
      'Dark mode, RTL Version, and Lazy Load',
      'Updates and Support'
    ]
  },
  {
    icon: BIconEmojiSmile,
    title: 'Account Setup',
    content: [
      'Connecting to your Account',
      'Edit your profile information',
      'Adding your profile picture',
      'Describing your store'
    ]
  },
  {
    icon: BIconLayers,
    title: 'Other Topics',
    content: [
      'Security & Privacy',
      'Author, Publisher & Admin Guides',
      'Pricing plans',
      'Sales Tax & Regulatory Fees'
    ]
  },
  {
    icon: BIconHouse,
    title: 'Advanced Usage',
    content: ['Admin & Billing', 'Become a Pro', 'Mobile application', 'Guide']
  },
  {
    icon: BIconCashCoin,
    title: 'Billing & Payments',
    content: [
      'How can I get a refund?',
      'How do I get a receipt',
      'Pricing plans',
      'Sales Tax & Regulatory Fees'
    ]
  },
  {
    icon: BIconAppIndicator,
    title: 'Integration',
    content: [
      'Overview of integration capabilities',
      'Setting up integrations',
      'How much software support?'
    ]
  }
]

export const faqData: FAQType[] = [
  {
    question: 'How can we help?',
    answer:
      'Yet remarkably appearance gets him his projection. Diverted endeavor bed peculiar men the not desirous. Acuteness abilities ask can offending furnished fulfilled sex. Warrant fifteen exposed ye at mistake. Blush since so in noisy still built up an again. As young ye hopes no he place means. Partiality diminution gay yet entreaties admiration. In mention perhaps attempt pointed suppose. Unknown ye chamber of warrant of Norland arrived.'
  },
  {
    question: 'How to edit my Profile?',
    answer:
      'What deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be.'
  },
  {
    question: 'How much should I offer the sellers?',
    answer:
      'Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in. Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors.'
  },
  {
    question: 'Installation Guide',
    answer: `"What deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be."
                     "At the moment, we only accept Credit/Debit cards and Paypal payments. Paypal is the easiest way to make payments online. While checking out your order. Be sure to fill in correct details for fast & hassle-free payment processing."`
  },
  {
    question: 'Additional Options and Services',
    answer:
      'Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in. Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors.'
  },
  {
    question: 'What is the difference between a college and a university?',
    answer:
      'Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in. Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors.'
  }
]

export const supportLinkData: ServiceType[] = [
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

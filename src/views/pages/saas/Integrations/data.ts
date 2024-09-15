import github from '@/assets/images/elements/github.svg'
import dropbox from '@/assets/images/elements/dropbox.svg'
import reddit from '@/assets/images/elements/reddit.svg'
import mailchimp from '@/assets/images/elements/mailchimp.svg'
import shopify from '@/assets/images/elements/shopify.svg'
import slack from '@/assets/images/elements/slack.svg'
import drive from '@/assets/images/elements/google-drive.svg'
import webflow from '@/assets/images/elements/webflow.svg'
import type { ServiceType } from '@/types'

export const gridData: ServiceType[] = [
  {
    image: github,
    title: 'Github',
    description:
      'GitHub employs Git, a distributed version control system, to track changes to code over time.',
    route: {
      name: 'saas.integration-single'
    }
  },
  {
    image: dropbox,
    title: 'Dropbox',
    description:
      'Integrating Dropbox with backup solutions can provide an additional layer of data protection.',
    route: {
      name: 'saas.integration-single'
    }
  },
  {
    image: reddit,
    title: 'Reddit',
    description:
      'With Reddit integration, you can easily share Reddit posts or comments on other like blogs or websites.',
    route: {
      name: 'saas.integration-single'
    }
  },
  {
    image: mailchimp,
    title: 'Mailchimp',
    description:
      'Integrating with data analysis tools allows for deeper segmentation and personalized messaging.',
    route: {
      name: 'saas.integration-single'
    }
  },
  {
    image: shopify,
    title: 'Shopify',
    description:
      'Shopify employs Git, a distributed version control system, to track changes to code over time.',
    route: {
      name: 'saas.integration-single'
    }
  },
  {
    image: slack,
    title: 'Slack',
    description:
      'Integrating Slack with project management tools like Trello, Asana, or Jira enables teams to receive.',
    route: {
      name: 'saas.integration-single'
    }
  },
  {
    image: drive,
    title: 'Drive',
    description:
      'GitHub employs Git, a distributed version control system, to track changes to code over time.',
    route: {
      name: 'saas.integration-single'
    }
  },
  {
    image: webflow,
    title: 'Webflow',
    description:
      'Integrating Webflow with CRM systems like HubSpot or Salesforce enables seamless data synchronization.',
    route: {
      name: 'saas.integration-single'
    }
  }
]

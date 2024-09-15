import type { PricingPlanType } from '@/types'
import { faFacebook, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import type { BaseColorVariant } from 'bootstrap-vue-next'

type AccountType = {
  buttonVariant: keyof BaseColorVariant
  buttonText: string
  bgColor?: string
  iconText: string
} & PricingPlanType

export const account: AccountType[] = [
  {
    title: 'Google',
    description: 'You are successfully connected to your Google account',
    buttonVariant: 'danger',
    buttonText: 'Invoke',
    bgColor: 'success',
    iconText: 'google-icon'
  },
  {
    title: 'Linkedin',
    description: 'Connect with Linkedin account for a personalized experience',
    icon: faLinkedinIn,
    buttonVariant: 'dark',
    buttonText: 'Connect Linkedin',
    iconText: 'linkedin'
  },
  {
    title: 'Facebook',
    description: 'Connect with Facebook account for a personalized experience',
    icon: faFacebook,
    buttonVariant: 'dark',
    buttonText: 'Connect Facebook',
    iconText: 'facebook'
  }
]

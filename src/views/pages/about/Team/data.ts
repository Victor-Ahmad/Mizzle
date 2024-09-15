import team1 from '@/assets/images/team/01.jpg'
import team2 from '@/assets/images/team/02.jpg'
import team3 from '@/assets/images/team/03.jpg'
import team4 from '@/assets/images/team/04.jpg'
import team5 from '@/assets/images/team/05.jpg'
import team6 from '@/assets/images/team/06.jpg'
import team7 from '@/assets/images/team/07.jpg'
import team8 from '@/assets/images/team/08.jpg'
import type { UserType } from '@/types'
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  type IconDefinition
} from '@fortawesome/free-brands-svg-icons'

export type TeamType = {
  icon: TeamIconType
} & UserType

type TeamIconType = {
  iconName: IconDefinition[]
  variant: string[]
}

export const team: TeamType[] = [
  {
    avatar: team1,
    username: 'Emma Watson',
    icon: {
      iconName: [faInstagram],
      variant: ['instagram-gradient']
    },
    role: 'Founder'
  },
  {
    avatar: team2,
    username: 'Allen Smith',
    icon: {
      iconName: [faFacebookF],
      variant: ['facebook']
    },
    role: 'UI/UX designer'
  },
  {
    avatar: team3,
    username: 'Jacqueline Miller',
    icon: {
      iconName: [faTwitter, faLinkedinIn],
      variant: ['twitter', 'linkedin']
    },
    role: 'Human Resource'
  },
  {
    avatar: team4,
    username: 'Louis Ferguson',
    icon: {
      iconName: [faFacebookF, faInstagram],
      variant: ['facebook', 'instagram-gradient']
    },
    role: 'Web Developer'
  },
  {
    avatar: team5,
    username: 'Frances Guerrero',
    icon: {
      iconName: [faInstagram],
      variant: ['instagram-gradient']
    },
    role: 'Software Developer'
  },
  {
    avatar: team6,
    username: 'Lori Stevens',
    icon: {
      iconName: [faFacebookF, faInstagram],
      variant: ['facebook', 'instagram-gradient']
    },
    role: 'Graphic designer'
  },
  {
    avatar: team7,
    username: 'Samuel Bishop',
    icon: {
      iconName: [faTwitter],
      variant: ['twitter']
    },
    role: 'Product designer'
  },
  {
    avatar: team8,
    username: 'Amanda Reed',
    icon: {
      iconName: [faInstagram, faTwitter],
      variant: ['instagram-gradient', 'twitter']
    },
    role: 'Content writer'
  }
]

export const achievement = [
  {
    title: 'Awards',
    awards: [
      'Honor / Unite agency / 2021',
      'Honor / Unite agency / 2020',
      'Honor / Med expert / 2020',
      'Honor / Frame digital / 2020',
      'Honor / Unite agency / 2019'
    ]
  },
  {
    title: 'CSS Design Award',
    awards: [
      'Website of the day / Emporia / 2020',
      'Special kudos / to ARCR / 2021',
      'Special kudos / to ARCR / 2020',
      'Special kudos / to Reformat club / 2019'
    ]
  }
]

import type { ServiceType, TestimonialType, UserType } from '@/types'
import {
  BIconBinoculars,
  BIconBoxes,
  BIconBriefcase,
  BIconBullseye,
  BIconCircleSquare,
  BIconCodeSlash,
  BIconStack,
  BIconVectorPen
} from 'bootstrap-icons-vue'
import avatar1 from '@/assets/images/avatar/01.jpg'
import avatar2 from '@/assets/images/avatar/02.jpg'
import avatar3 from '@/assets/images/avatar/03.jpg'
import avatar4 from '@/assets/images/avatar/04.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar6 from '@/assets/images/avatar/06.jpg'
import client1Img from '@/assets/images/client/01.svg'
import client2Img from '@/assets/images/client/02.svg'
import client3Img from '@/assets/images/client/03.svg'
import client4Img from '@/assets/images/client/04.svg'
import client5Img from '@/assets/images/client/05.svg'

export const avatars = [avatar6, avatar5, avatar2, avatar3, avatar4]

export const clients = [client1Img, client2Img, client3Img, client4Img, client5Img, client1Img]

export const services: ServiceType[] = [
  {
    title: 'Digital Marketing',
    description: 'Growing brands online through digital channels.',
    icon: BIconStack
  },
  {
    title: 'Product Design',
    description: 'Creating products that users love and businesses need.',
    icon: BIconBoxes
  },
  {
    title: 'Web Design',
    description: 'Designing websites that are visually appealing & user-friendly.',
    icon: BIconCircleSquare
  },
  {
    title: 'UI/UX Design',
    description: 'Creating user interfaces that are both efficient and enjoyable.',
    icon: BIconVectorPen
  },
  {
    title: 'Business Strategy',
    description: 'Developing and executing plans to achieve business goals.',
    icon: BIconBriefcase
  },
  {
    title: 'Research',
    description: 'Gathering and analyzing data to inform decision-making.',
    icon: BIconBinoculars
  },
  {
    title: 'Web Development',
    description: 'Building and maintaining websites and web applications.',
    icon: BIconCodeSlash
  },
  {
    title: 'Brand Design',
    description: 'Creating brands that are unique, memorable, and meaningful.',
    icon: BIconBullseye
  }
]

export const userData: UserType[] = [
  {
    id: '1',
    avatar: avatar3,
    firstName: 'Nix',
    lastName: 'Maxwell'
  },
  {
    id: '2',
    avatar: avatar1,
    firstName: 'Dennis',
    lastName: 'Barrett'
  },
  {
    id: '3',
    avatar: avatar2,
    firstName: 'Nix',
    lastName: 'Maxwell'
  },
  {
    id: '4',
    avatar: avatar5,
    firstName: 'Carolyn',
    lastName: 'Ortiz'
  }
]

export const testimonials: TestimonialType[] = [
  {
    id: '1',
    user: userData[0],
    comment:
      "The best Bootstrap theme we've ever used - it's easy to customize and comes with all the features we need.",
    rating: 4.5
  },
  {
    id: '2',
    user: userData[1],
    comment:
      "The best Bootstrap theme we've ever used - it's easy to customize and comes with all the features we need.",
    rating: 4.5
  },

  {
    id: '3',
    user: userData[2],
    comment: 'Stackbros helped us create a stunning website that reflects our brand perfectly.',
    rating: 4.5
  },
  {
    id: '4',
    user: userData[3],
    comment: 'I highly recommend Mizzle to anyone looking for a high-quality Bootstrap theme.',
    rating: 4.5
  }
]

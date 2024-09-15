import auth1Img from '@/assets/images/auth/01.jpg'
import auth2Img from '@/assets/images/auth/02.jpg'
import auth3Img from '@/assets/images/auth/03.jpg'

const author = [
  {
    name: 'Emma Watson',
    image: auth1Img
  },
  {
    name: 'Carolyn Ortiz',
    image: auth2Img
  },
  {
    name: 'Dennis Barrett',
    image: auth3Img
  }
]

type AuthorType = {
  name: string
  image: string
}

type SwiperType = {
  quote: string
  author: AuthorType
  position: string
}

export const swiperdata: SwiperType[] = [
  {
    quote:
      'With unwavering determination, they navigate the complexities of the industry, forging strategic partnerships and driving transformative change.',
    author: author[0],
    position: 'Founder, catalog'
  },
  {
    quote:
      'An exceptional agency CEO is a visionary, constantly pushing the boundaries of creativity and pushing their team to new heights. They inspire with their passion and cultivate a culture of trust and respect.',
    author: author[1],
    position: 'CEO, mizzle'
  },
  {
    quote:
      'Through collaboration and strategic direction, they steer the agency towards its goals, navigating the ever-evolving landscape with agility and grace.',
    author: author[2],
    position: 'Founder, catalog'
  }
]

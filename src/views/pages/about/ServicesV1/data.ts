import client1Img from '@/assets/images/client/01.svg'
import client2Img from '@/assets/images/client/02.svg'
import client3Img from '@/assets/images/client/03.svg'
import client4Img from '@/assets/images/client/04.svg'
import client5Img from '@/assets/images/client/05.svg'

import type { BSIconType, FeatureType, StepType } from '@/types'
import {
  BIconBell,
  BIconBroadcastPin,
  BIconChatLeftDots,
  BIconDisplay,
  BIconHeadset,
  BIconLightningCharge
} from 'bootstrap-icons-vue'

export const cards: StepType[] = [
  {
    title: 'Digital marketing',
    description:
      'Digital marketing is the art and science of reaching, engaging, and influencing your target audience through online channels.',
    icon: `<svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.2402 6.75391C21.2543 9.81065 21.2543 11.8485 20.2402 14.9052" stroke="currentColor" stroke-opacity="0.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M2.25047 12.9739C2.25055 14.0922 3.15715 14.9988 4.27547 14.9988V14.9988L4.25651 19.4911C4.25125 20.7361 5.25945 21.7481 6.50452 21.7474V21.7474C7.74497 21.7468 8.75021 20.741 8.75021 19.5006V15.1105H10V6.55981H6.46978C5.09959 6.55981 4.41449 6.55981 3.87962 6.79848C3.26038 7.07479 2.76505 7.57015 2.48879 8.18941C2.25016 8.72431 2.25021 9.4094 2.25031 10.7796L2.25047 12.9739Z" fill="currentColor"></path>
        <path d="M11.0002 15.8122C13.9211 18.3111 15.3815 19.5606 16.6274 19.37C17.1377 19.2919 17.6157 19.0718 18.0068 18.7348C18.9616 17.912 18.9616 15.99 18.9616 12.146V9.4287C18.9616 5.58267 18.9616 3.65966 18.0199 2.83775C17.6138 2.48322 17.1124 2.2559 16.5781 2.18405C15.3393 2.01748 13.893 3.28476 11.0002 5.81933V5.81933V15.8122V15.8122Z" fill="currentColor" fill-opacity="0.25"></path>
    </svg>`
  },
  {
    title: 'Web design',
    description:
      "A well-designed website not only captivates visitors but also conveys a brand's identity, ultimately driving engagement and conversions.",
    icon: `<svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.523 8.92914C17.523 9.94279 16.6746 10.7645 15.6281 10.7645C14.5816 10.7645 13.7333 9.94279 13.7333 8.92914C13.7333 7.91548 14.5816 7.09375 15.6281 7.09375C16.6746 7.09375 17.523 7.91548 17.523 8.92914Z" fill="currentColor"></path>
        <path d="M10.485 8.92914C10.485 9.94279 9.63664 10.7645 8.59015 10.7645C7.54366 10.7645 6.69531 9.94279 6.69531 8.92914C6.69531 7.91548 7.54366 7.09375 8.59015 7.09375C9.63664 7.09375 10.485 7.91548 10.485 8.92914Z" fill="currentColor"></path>
        <path d="M11.0264 15.2219C11.0264 16.2355 10.178 17.0573 9.13154 17.0573C8.08504 17.0573 7.2367 16.2355 7.2367 15.2219C7.2367 14.2082 8.08504 13.3865 9.13154 13.3865C10.178 13.3865 11.0264 14.2082 11.0264 15.2219Z" fill="currentColor"></path>
        <path d="M21.748 9.45998C21.4753 4.55256 14.4854 1.4706 9.28231 2.41642C4.07925 3.36223 1.56208 8.48915 2.41245 13.4547C3.23924 18.2826 8.68956 21.7459 12.1134 21.7459C15 21.7459 17.25 20.6058 17.25 18.9959C17.25 18.9959 17.2846 18.5254 16.98 17.9961C16.7157 17.5369 16.4642 17.3392 16.07 16.9961C15.8584 16.8119 15.5273 16.5296 15.15 15.9959C14.9079 15.6534 14.8139 15.4137 14.8 15.3435C14.7846 14.9174 15.0127 14.407 15.5 14.2561C15.6439 14.2115 15.8105 14.2221 16 14.2459C18 14.3961 22 13.9961 21.748 9.45998Z" fill="currentColor" fill-opacity="0.25"></path>
    </svg>`
  },
  {
    title: 'Strategic planning',
    description:
      "Strategic planning is the deliberate process of defining an organization's goals and objectives",
    icon: ` <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 5.75H5M10.5 5.75H21M3 18.25H5M10.5 18.25H21M21 12H19M13.5 12H3" stroke="currentColor" stroke-opacity="0.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M4.25 5.75C4.25 3.817 5.817 2.25 7.75 2.25V2.25C9.683 2.25 11.25 3.817 11.25 5.75V5.75C11.25 7.683 9.683 9.25 7.75 9.25V9.25C5.817 9.25 4.25 7.683 4.25 5.75V5.75Z" fill="currentColor"></path>
        <path d="M4.25 18.25C4.25 16.317 5.817 14.75 7.75 14.75V14.75C9.683 14.75 11.25 16.317 11.25 18.25V18.25C11.25 20.183 9.683 21.75 7.75 21.75V21.75C5.817 21.75 4.25 20.183 4.25 18.25V18.25Z" fill="currentColor"></path>
        <path d="M12.75 12C12.75 10.067 14.317 8.5 16.25 8.5V8.5C18.183 8.5 19.75 10.067 19.75 12V12C19.75 13.933 18.183 15.5 16.25 15.5V15.5C14.317 15.5 12.75 13.933 12.75 12V12Z" fill="currentColor"></path>
    </svg>`
  },
  {
    title: 'Brand Design',
    description:
      'Brand design is the creative process of crafting a visual and emotional identity that represents your business',
    icon: ` <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 13.5C10 14.1904 9.44036 14.75 8.75 14.75C8.05964 14.75 7.5 14.1904 7.5 13.5C7.5 12.8096 8.05964 12.25 8.75 12.25C9.44036 12.25 10 12.8096 10 13.5Z" fill="currentColor" />
        <path d="M16.5 13.5C16.5 14.1904 15.9404 14.75 15.25 14.75C14.5596 14.75 14 14.1904 14 13.5C14 12.8096 14.5596 12.25 15.25 12.25C15.9404 12.25 16.5 12.8096 16.5 13.5Z" fill="currentColor" />
        <path d="M9 17C9.83574 17.6279 10.8747 18 12.0005 18C13.1263 18 14.1652 17.6279 15.001 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.75 2.26172C14.3693 2.26172 13.25 3.38101 13.25 4.76172C13.25 4.85246 13.2548 4.94208 13.2643 5.03032C13.013 5.15803 12.7918 5.27513 12.603 5.38979C12.3091 5.56835 12.0495 5.76645 11.8348 6.04075C11.7095 6.20073 11.6023 6.37409 11.5153 6.55767C11.2826 7.04834 11.2532 7.60042 11.2501 8.27444C10.6672 8.31261 10.1005 8.39487 9.55577 8.51688C9.34507 8.56407 9.13766 8.61721 8.93384 8.67604C8.24746 7.81502 7.18872 7.26172 6 7.26172C3.92893 7.26172 2.25 8.94065 2.25 11.0117C2.25 12.0772 2.69485 13.0387 3.40695 13.7206C3.30394 14.1349 3.25 14.5626 3.25 15C3.25 18.7279 7.16751 21.75 12 21.75C16.8325 21.75 20.75 18.7279 20.75 15C20.75 14.5626 20.6961 14.1349 20.593 13.7206C21.3051 13.0387 21.75 12.0772 21.75 11.0117C21.75 8.94065 20.0711 7.26172 18 7.26172C16.8113 7.26172 15.7525 7.81502 15.0662 8.67604C14.8623 8.61721 14.6549 8.56407 14.4442 8.51688C13.9001 8.395 13.334 8.31278 12.7517 8.27456C12.758 7.60325 12.7842 7.38255 12.8706 7.20045C12.9102 7.117 12.9589 7.0382 13.0158 6.96548C13.0786 6.88529 13.174 6.79804 13.3818 6.67177C13.512 6.59266 13.6684 6.5086 13.8673 6.40665C14.3256 6.93071 14.9991 7.26172 15.75 7.26172C17.1307 7.26172 18.25 6.14243 18.25 4.76172C18.25 3.38101 17.1307 2.26172 15.75 2.26172Z" fill="currentColor" fill-opacity="0.25" />
    </svg>`
  },
  {
    title: 'Database analysis',
    description:
      'Database analysis involves the systematic examination of structured data sets to extract valuable insights, patterns, and trends.',
    icon: ` <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.95 9.83377C3.51099 9.1789 2.79149 8.85147 2.55187 8.40828C2.3112 7.96313 2.3112 7.42663 2.55187 6.98148C2.79149 6.53829 3.51099 6.21086 4.95 5.55599L10.8816 2.8566C11.37 2.63435 11.6142 2.52322 11.872 2.50115C11.9572 2.49386 12.0428 2.49386 12.128 2.50115C12.3858 2.52322 12.63 2.63435 13.1184 2.8566L19.05 5.55599C20.489 6.21086 21.2085 6.53829 21.4481 6.98148C21.6888 7.42663 21.6888 7.96313 21.4481 8.40828C21.2085 8.85147 20.489 9.1789 19.05 9.83377L13.1184 12.5332C12.63 12.7554 12.3858 12.8665 12.128 12.8886C12.0428 12.8959 11.9572 12.8959 11.872 12.8886C11.6142 12.8665 11.37 12.7554 10.8816 12.5332L4.95 9.83377Z" fill="currentColor" fill-opacity="0.25"></path>
        <path d="M4.95 9.83377C3.51099 10.4886 2.79149 10.8161 2.55187 11.2593C2.3112 11.7044 2.3112 12.2409 2.55187 12.6861C2.79149 13.1292 3.51099 13.4567 4.95 14.1115L10.8816 16.8109C11.37 17.0332 11.6142 17.1443 11.872 17.1664C11.9572 17.1737 12.0428 17.1737 12.128 17.1664C12.3858 17.1443 12.63 17.0332 13.1184 16.8109L19.05 14.1115C20.489 13.4567 21.2085 13.1292 21.4481 12.6861C21.6888 12.2409 21.6888 11.7044 21.4481 11.2593C21.2085 10.8161 20.489 10.4886 19.05 9.83377L13.1184 12.5332C12.63 12.7554 12.3858 12.8665 12.128 12.8886C12.0428 12.8959 11.9572 12.8959 11.872 12.8886C11.6142 12.8665 11.37 12.7554 10.8816 12.5332L4.95 9.83377Z" fill="currentColor" fill-opacity="0.25"></path>
        <path d="M4.95 14.1115C3.51099 14.7664 2.79149 15.0938 2.55187 15.537C2.3112 15.9822 2.3112 16.5187 2.55187 16.9638C2.79149 17.407 3.51099 17.7345 4.95 18.3893L10.8816 21.0887C11.37 21.311 11.6142 21.4221 11.872 21.4442C11.9572 21.4515 12.0428 21.4515 12.128 21.4442C12.3858 21.4221 12.63 21.311 13.1184 21.0887L19.05 18.3893C20.489 17.7345 21.2085 17.407 21.4481 16.9638C21.6888 16.5187 21.6888 15.9822 21.4481 15.537C21.2085 15.0938 20.489 14.7664 19.05 14.1115L13.1184 16.8109C12.63 17.0332 12.3858 17.1443 12.128 17.1664C12.0428 17.1737 11.9572 17.1737 11.872 17.1664C11.6142 17.1443 11.37 17.0332 10.8816 16.8109L4.95 14.1115Z" fill="currentColor" fill-opacity="0.25"></path>
        <path d="M6 10.2734L10.8827 12.4929C11.3707 12.7146 11.6146 12.8255 11.8722 12.8476C11.9572 12.8548 12.0428 12.8548 12.1278 12.8476C12.3854 12.8255 12.6293 12.7146 13.1173 12.4929L18 10.2734M6 14.2734L10.8827 16.4929C11.3707 16.7146 11.6146 16.8255 11.8722 16.8476C11.9572 16.8548 12.0428 16.8548 12.1278 16.8476C12.3854 16.8255 12.6293 16.7146 13.1173 16.4929L18 14.2734" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>`
  },
  {
    title: 'Business consulting',
    description:
      'Consultants analyze your operations, provide strategic recommendations assist in implementing solutions to tackle challenges, and drive growth.',
    icon: ` <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 18V15M12 13V18M16 18V11M6.5 11.5L7.9646 9.7913C8.91547 8.68195 10.3837 8.16067 11.8212 8.42204V8.42204C13.812 8.78401 15.8538 8.14622 17.2846 6.71542L17.5 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M13.2 2.25H10.8C7.23775 2.25 5.45663 2.25 4.20802 3.15717C3.80477 3.45015 3.45015 3.80477 3.15717 4.20802C2.25 5.45663 2.25 7.23775 2.25 10.8V13.2C2.25 16.7622 2.25 18.5434 3.15717 19.792C3.45015 20.1952 3.80477 20.5499 4.20802 20.8428C5.45663 21.75 7.23775 21.75 10.8 21.75H13.2C16.7622 21.75 18.5434 21.75 19.792 20.8428C20.1952 20.5499 20.5499 20.1952 20.8428 19.792C21.75 18.5434 21.75 16.7622 21.75 13.2V10.8C21.75 7.23775 21.75 5.45663 20.8428 4.20802C20.5499 3.80477 20.1952 3.45015 19.792 3.15717C18.5434 2.25 16.7622 2.25 13.2 2.25Z" fill="currentColor" fill-opacity="0.25"></path>
    </svg>`
  }
]

export const feature: FeatureType[] = [
  {
    icon: BIconChatLeftDots,
    title: 'Multilingual support',
    description: 'The implementation of multilingual support involves.'
  },
  {
    icon: BIconBell,
    title: 'Easy-to-use interface',
    description: 'It focuses on creating an intuitive and efficient design.'
  },
  {
    icon: BIconHeadset,
    title: '24/7 availability',
    description: 'It ensures that users can access critical assistance whenever they need it.'
  },
  {
    icon: BIconBroadcastPin,
    title: 'Advanced functionalities',
    description: 'These advanced functionalities are designed to provide users.'
  },
  {
    icon: BIconDisplay,
    title: 'Free host & domain included',
    description: 'It means that when you sign up for their services, you not only get the hosting.'
  },
  {
    icon: BIconLightningCharge,
    title: 'High Performance',
    description: 'Achieving high performance involves various factors and considerations.'
  }
]

export const client: string[] = [client1Img, client2Img, client3Img, client4Img, client5Img]

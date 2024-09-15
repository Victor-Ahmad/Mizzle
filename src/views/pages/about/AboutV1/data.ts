import client1 from '@/assets/images/client/01.svg'
import client2 from '@/assets/images/client/02.svg'
import client3 from '@/assets/images/client/03.svg'
import client4 from '@/assets/images/client/04.svg'
import client5 from '@/assets/images/client/05.svg'
import client6 from '@/assets/images/client/06.svg'
import avatar4 from '@/assets/images/avatar/04.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar6 from '@/assets/images/avatar/06.jpg'
import avatar10 from '@/assets/images/avatar/10.jpg'
import avatar11 from '@/assets/images/avatar/11.jpg'
import type { StatisticType, StepType, UserType } from '@/types'

export const list: string[] = [
  'Create 50+ unique sections',
  'Very easy customization',
  'Super fast loading speed',
  'Fully responsive on any devices'
]

export const counter: StatisticType[] = [
  {
    title: 'Happy Customers',
    number: 600,
    prefix: '+',
    description: 'Happy Customers'
  },
  {
    title: 'Acquired Users',
    number: 200,
    prefix: '+',
    description: 'Acquired Users'
  },
  {
    title: 'Positive User Reviews',
    number: 10,
    prefix: 'K+',
    description: 'Positive User Reviews'
  },
  {
    title: 'Completed Projects',
    number: 25,
    prefix: '+',
    description: 'Completed Projects'
  }
]

export const items: StepType[] = [
  {
    title: 'Innovation-driven',
    icon: `<svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.36646 21.5H15.6485C15.9713 21.5 16.1327 21.5 16.269 21.4901C18.1249 21.3547 19.6008 19.8788 19.7362 18.0228C19.7462 17.8866 19.7462 17.7252 19.7462 17.4023C20.8592 17.3842 21.752 16.4767 21.752 15.3636V13.1074C21.752 11.9996 20.8539 11.1016 19.7462 11.1016C19.7462 10.7751 19.7462 10.6119 19.736 10.4741C19.5993 8.62062 18.1255 7.14688 16.272 7.01016C16.1343 7 15.9711 7 15.6446 7H12.625V5.5C13.2463 5.5 13.75 4.99632 13.75 4.375V3.875C13.75 2.97754 13.0225 2.25 12.125 2.25H11.875C10.9775 2.25 10.25 2.97754 10.25 3.875V4.37891C10.25 4.99807 10.7519 5.5 11.3711 5.5V7H8.37037C8.04391 7 7.88069 7 7.74294 7.01016C5.88942 7.14688 4.41569 8.62062 4.27897 10.4741C4.26881 10.6119 4.26881 10.7751 4.26881 11.1016C3.15385 11.1016 2.25 12.0054 2.25 13.1204V15.3835C2.25 16.4985 3.15385 17.4023 4.26881 17.4023C4.26881 17.7252 4.26881 17.8866 4.27874 18.0228C4.41412 19.8788 5.89005 21.3547 7.746 21.4901C7.88222 21.5 8.04364 21.5 8.36646 21.5Z" fill="currentColor" fill-opacity="0.25" />
        <path d="M15 16.75H9M14.25 11.75V11.75C14.6642 11.75 15 12.0858 15 12.5V12.5C15 12.9142 14.6642 13.25 14.25 13.25V13.25C13.8358 13.25 13.5 12.9142 13.5 12.5V12.5C13.5 12.0858 13.8358 11.75 14.25 11.75ZM9.75 11.75V11.75C10.1642 11.75 10.5 12.0858 10.5 12.5V12.5C10.5 12.9142 10.1642 13.25 9.75 13.25V13.25C9.33579 13.25 9 12.9142 9 12.5V12.5C9 12.0858 9.33579 11.75 9.75 11.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`,
    description: 'Elevate your digital presence with our innovation-driven approach'
  },
  {
    title: 'Transparent approach',
    icon: `<svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.5 18.55C8.5 18.27 8.5 18.13 8.5545 18.023C8.60243 17.9289 8.67892 17.8524 8.773 17.8045C8.87996 17.75 9.01997 17.75 9.3 17.75H14.7C14.98 17.75 15.12 17.75 15.227 17.8045C15.3211 17.8524 15.3976 17.9289 15.4455 18.023C15.5 18.13 15.5 18.27 15.5 18.55C15.5 19.6701 15.5 20.2302 15.282 20.658C15.0903 21.0343 14.7843 21.3403 14.408 21.532C13.9802 21.75 13.4201 21.75 12.3 21.75H11.7C10.5799 21.75 10.0198 21.75 9.59202 21.532C9.21569 21.3403 8.90973 21.0343 8.71799 20.658C8.5 20.2302 8.5 19.6701 8.5 18.55Z" fill="currentColor" />
        <path d="M9.14722 16.75H14.8528C14.999 16.75 15.0721 16.75 15.1322 16.7348C15.3106 16.6899 15.4499 16.5506 15.4948 16.3722C15.51 16.3121 15.51 16.239 15.51 16.0928V15.7267C15.51 15.3829 15.6239 15.0488 15.834 14.7766L17.2527 12.938C20.6184 8.57623 17.5093 2.25 12 2.25C6.49069 2.25 3.38158 8.57623 6.74727 12.938L8.16605 14.7766C8.37608 15.0488 8.49 15.3829 8.49 15.7267V16.0928C8.49 16.239 8.49 16.3121 8.50517 16.3722C8.55014 16.5506 8.68941 16.6899 8.86777 16.7348C8.92795 16.75 9.00104 16.75 9.14722 16.75Z" fill="currentColor" fill-opacity="0.25" />
        <path d="M10.5 11.5L12 14L13.5 11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`,
    description: "At our digital agency, transparency isn't just a buzzword"
  },
  {
    title: 'Accessible technology',
    icon: ` <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.0508 20.9081L16.9676 19.7107C18.3713 19.1344 19.0731 18.8463 19.5819 18.3633C19.9838 17.9818 20.2961 17.5159 20.4964 16.9993C20.75 16.3452 20.75 15.5865 20.75 14.0692C20.75 13.8719 20.75 13.7733 20.707 13.7098C20.6734 13.6603 20.6232 13.6244 20.5655 13.6087C20.4915 13.5886 20.3982 13.6206 20.2116 13.6846L12.5838 16.2998C12.327 16.3879 12.1986 16.4319 12.066 16.4407C12.0221 16.4436 11.9779 16.4436 11.934 16.4407C11.8014 16.4319 11.673 16.3879 11.4162 16.2998L3.78841 13.6846C3.60183 13.6206 3.50854 13.5886 3.43453 13.6087C3.37677 13.6244 3.32656 13.6603 3.293 13.7098C3.25 13.7733 3.25 13.8719 3.25 14.0692C3.25 15.5865 3.25 16.3452 3.50359 16.9993C3.70391 17.5159 4.01625 17.9818 4.41813 18.3633C4.9269 18.8463 5.62873 19.1344 7.03239 19.7107L7.03239 19.7107L9.94924 20.9081C10.8475 21.2769 11.2967 21.4613 11.7665 21.4979C11.9219 21.5101 12.0781 21.5101 12.2335 21.4979C12.7033 21.4613 13.1525 21.2769 14.0508 20.9081L14.0508 20.9081Z" fill="currentColor" fill-opacity="0.25" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.25035 5C9.25035 3.48122 10.4816 2.25 12.0003 2.25C13.5191 2.25 14.7503 3.48122 14.7503 5C14.7503 6.25878 13.9046 7.32002 12.7503 7.64648V8.24568L19.3266 10.8794C20.1324 11.2021 20.5353 11.3635 20.594 11.6181C20.6121 11.6967 20.611 11.7785 20.5907 11.8565C20.5248 12.1094 20.1176 12.2594 19.3031 12.5594L12.3115 15.1351C12.1748 15.1854 12.1065 15.2106 12.0356 15.2156C12.0121 15.2172 11.9886 15.2172 11.9651 15.2156C11.8942 15.2106 11.8259 15.1854 11.6892 15.1351L4.6976 12.5594C3.88311 12.2594 3.47586 12.1094 3.41002 11.8565C3.38969 11.7785 3.38855 11.6967 3.40668 11.6181C3.46543 11.3635 3.86832 11.2021 4.6741 10.8794L11.2503 8.24568V7.64648C10.0961 7.32002 9.25035 6.25878 9.25035 5Z" fill="currentColor" />
    </svg>`,
    description: 'Celebrate Inclusivity with Accessible Technology.'
  },
  {
    title: 'Collaborative teamwork',
    icon: ` <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 7C5.43353 4.50359 8.57297 3 12 3C15.427 3 18.5665 4.50359 21 7M18.5 10.7328C16.6095 8.84054 14.3868 7.75 12.0086 7.75C9.62315 7.75 7.39426 8.84716 5.5 10.75M8.25 14.25C9.29028 13.1521 10.59 12.5 12 12.5C13.41 12.5 14.7097 13.1521 15.75 14.25" stroke="currentColor" stroke-opacity="0.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M14.5 19.25C14.5 20.6307 13.3807 21.75 12 21.75C10.6193 21.75 9.5 20.6307 9.5 19.25C9.5 17.8693 10.6193 16.75 12 16.75C13.3807 16.75 14.5 17.8693 14.5 19.25Z" fill="currentColor" />
    </svg>`,
    description: 'We believe that the best results are born from the synergy of diverse'
  }
]

export const lists = {
  list1: [
    'Strategic Call-to-Actions',
    'Content-Rich Sections',
    'Social Media Integration',
    'Easy-to-Use Contact Forms'
  ],

  list2: ['Performance Analytics', 'Fast Loading Speed', 'Tested on Major Browsers']
}

export const list2 = ['Performance Analytics', 'Fast Loading Speed', 'Tested on Major Browsers']

export const team: UserType[] = [
  {
    username: 'Samuel Bishop',
    role: 'UI/UX Designer',
    avatar: avatar4
  },
  {
    username: 'Judy Nguyen',
    role: 'Web Designer',
    avatar: avatar11
  },
  {
    username: 'Louis Ferguson',
    role: 'Web Developer',
    avatar: avatar6
  },
  {
    username: 'Dennis Barrett',
    role: 'CEO & Founder',
    avatar: avatar5
  },
  {
    username: 'Bryan Knight',
    role: 'Product Designer',
    avatar: avatar10
  }
]

export const swiper: string[] = [client5, client4, client1, client2, client3, client6]

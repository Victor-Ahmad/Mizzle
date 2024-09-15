import {
  BIconBasket,
  BIconBell,
  BIconBriefcase,
  BIconHeart,
  BIconPerson,
  BIconShieldLock,
  BIconTrash,
  BIconWallet
} from 'bootstrap-icons-vue'

import type { IconType, RouteType } from '@/types'

type AccountMenuType = {
  title: string
  route: RouteType
  icon: IconType
}

export const accountMenu: AccountMenuType[] = [
  {
    title: 'My profile',
    route: { name: 'account.profile' },
    icon: BIconPerson
  },
  {
    title: 'Security',
    route: { name: 'account.security' },
    icon: BIconShieldLock
  },
  {
    title: 'Notification',
    route: { name: 'account.notifications' },
    icon: BIconBell
  },
  {
    title: 'My projects',
    route: { name: 'account.projects' },
    icon: BIconBriefcase
  },
  {
    title: 'Payment details',
    route: { name: 'account.payment-details' },
    icon: BIconWallet
  },
  {
    title: 'Order history',
    route: { name: 'account.order-history' },
    icon: BIconBasket
  },
  {
    title: 'Wishlist',
    route: { name: 'account.wishlist' },
    icon: BIconHeart
  },
  {
    title: 'Delete profile',
    route: { name: 'account.delete-profile' },
    icon: BIconTrash
  }
]

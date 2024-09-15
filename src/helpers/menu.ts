import { APP_MENU_ITEMS } from '@/assets/data/menu-items'
import type { BSIconType, RouteType } from '@/types'

export type MenuItemType = {
  key: string
  label: string
  route?: RouteType
  parentKey?: string
  isTitle?: boolean
  badge?: string
  target?: '_self' | '_blank' | '_parent' | '_top'
  icon?: BSIconType
  children?: MenuItemType[]
}

export type MegaMenuType = {
  usefulLinks: string[]
  company: {
    icon: BSIconType
    title: string
    badge?: string
    description: string
  }[]
  integration: {
    logo: string
    name: string
  }[]
  recentBlogs: {
    image: string
    title: string
    link: string
  }[]
}

export type ResourceMenuType = {
  usefulLinks: {
    icon: BSIconType
    name: string
  }[]
  keyFeatures: {
    icon: BSIconType
    title: string
    description: string
  }[]
  featureResource: {
    image: string
    title: string
    description: string
  }
}

export const getAppMenuItems = () => {
  // NOTE - You can fetch from server and return here as well
  return APP_MENU_ITEMS
}

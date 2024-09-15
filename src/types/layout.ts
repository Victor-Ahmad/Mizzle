import type { BSIconType } from './index'

export type LayoutState = {
  theme: 'light' | 'dark' | 'auto'
}

export type ThemeModeType = {
  theme: LayoutState['theme']
  icon: BSIconType
}

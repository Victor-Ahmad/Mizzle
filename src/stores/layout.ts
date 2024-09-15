import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

import type { LayoutState } from '@/types/layout'
import { changeHTMLAttribute } from '@/helpers/layout'

export const useLayoutStore = defineStore('layout_store', () => {
  const theme = useLocalStorage<LayoutState['theme']>('Mizzle_VUE_THEME', 'light')

  if (theme.value === 'auto') {
    const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
    changeHTMLAttribute('data-bs-theme', preferredTheme)
  }

  const setTheme = (nTheme: LayoutState['theme']) => {
    if (nTheme === 'auto') {
      const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      theme.value = 'auto'
      changeHTMLAttribute('data-bs-theme', preferredTheme)
      return
    }
    theme.value = nTheme
    changeHTMLAttribute('data-bs-theme', nTheme)
  }

  return {
    theme,
    setTheme
  }
})

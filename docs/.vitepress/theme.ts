import type { DefaultTheme } from 'vitepress'
import { nav } from './nav'
import { sidebar } from './sidebar'

export const themeConfig: DefaultTheme.Config = {
  nav,
  sidebar,
}

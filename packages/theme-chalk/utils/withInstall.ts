import type { App, Plugin } from 'vue'

export type SFCWithInstall<T> = T & Plugin

export const withInstall = <T extends { name?: string; __name?: string }>(component: T) => {
  (component as SFCWithInstall<T>).install = (app: App) => {
    const name = component.name || component.__name
    if (!name) throw new Error('Component must have a name or __name property')
    app.component(name as string, component)
  }
  return component as SFCWithInstall<T>
}
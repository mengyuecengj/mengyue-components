import type { App, Plugin } from 'vue'
export type SFCWithInstall<T> = T & Plugin
export const withInstall = <T>(component: T) => {
  (component as SFCWithInstall<T>).install = (app: App) => {
    const name = (component as any).name || (component as any).__name
    app.component(name, component as any)
  }
  return component as SFCWithInstall<T>
}
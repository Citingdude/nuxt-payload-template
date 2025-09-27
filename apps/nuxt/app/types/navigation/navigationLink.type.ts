import type { RouteLocationNamedI18n } from 'vue-router'
import type { RouteNamedMapI18n } from 'vue-router/auto-routes'

export type TypedRoute = RouteLocationNamedI18n<keyof RouteNamedMapI18n>
export interface NavigationLink {
  title: string
  isTargetBlank?: boolean
  to: TypedRoute
}

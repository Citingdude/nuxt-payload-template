/* eslint-disable func-style */
import './index.css'
import '@payloadcms/next/css'

import { Logo } from '@payload/components/logo/Logo'
import { sortNavGroups } from '@payload/utils/payload/sortNavGroups.util'
import { Logout } from '@payloadcms/ui'
import { RenderServerComponent } from '@payloadcms/ui/elements/RenderServerComponent'
import type { EntityToGroup } from '@payloadcms/ui/shared'
import { EntityType, groupNavItems } from '@payloadcms/ui/shared'
import type {
  SanitizedPermissions,
  ServerProps,
} from 'payload'
import React from 'react'

import { getNavPrefs } from './getNavPrefs'
import { DefaultNavClient } from './Nav.client'
import { NavHamburger } from './NavHamburger/index'
import { NavWrapper } from './NavWrapper/index'

const baseClass = 'nav'

export type NavProps = ServerProps

export const DefaultNav: React.FC<NavProps> = async (props) => {
  const {
    i18n,
    locale,
    params,
    payload,
    permissions,
    searchParams,
    user,
    visibleEntities,
  } = props

  if (!payload?.config) {
    return null
  }

  const {
    admin: {
      components: { afterNavLinks, beforeNavLinks, logout },
    },
    collections,
    globals,
  } = payload.config

  const groups = groupNavItems(
    [
      ...collections
        .filter(({ slug }) => visibleEntities?.collections.includes(slug))
        .map(
          (collection) =>
            ({
              entity: collection,
              type: EntityType.collection,
            }) satisfies EntityToGroup,
        ),
      ...globals
        .filter(({ slug }) => visibleEntities?.globals.includes(slug))
        .map(
          (global) =>
            ({
              entity: global,
              type: EntityType.global,
            }) satisfies EntityToGroup,
        ),
    ],
    permissions as SanitizedPermissions,
    i18n,
  )

  const sortedGroups = sortNavGroups(groups)

  // @ts-expect-error TODO fix this
  const navPreferences = await getNavPrefs({ payload, user })

  const LogoutComponent = RenderServerComponent({
    Component: logout?.Button,
    Fallback: Logout,
    importMap: payload.importMap,
    serverProps: {
      i18n,
      locale,
      params,
      payload,
      permissions,
      searchParams,
      user,
    },
  })

  return (
    <NavWrapper baseClass={baseClass}>
      <nav className={`
        ${baseClass}__wrap
      `}
      >
        <div style={{ alignItems: 'center', display: 'flex', justifyItems: 'center', marginBottom: '1.5rem', width: '100%' }}>
          <Logo />
        </div>
        {RenderServerComponent({
          Component: beforeNavLinks,
          importMap: payload.importMap,
          serverProps: {
            i18n,
            locale,
            params,
            payload,
            permissions,
            searchParams,
            user,
          },
        })}
        <DefaultNavClient groups={sortedGroups} navPreferences={navPreferences} />
        {RenderServerComponent({
          Component: afterNavLinks,
          importMap: payload.importMap,
          serverProps: {
            i18n,
            locale,
            params,
            payload,
            permissions,
            searchParams,
            user,
          },
        })}
        <div className={`
          ${baseClass}__controls
        `}
        >
          {LogoutComponent}
        </div>
      </nav>
      <div className={`
        ${baseClass}__header
      `}
      >
        <div className={`
          ${baseClass}__header-content
        `}
        >
          <NavHamburger baseClass={baseClass} />
        </div>
      </div>
    </NavWrapper>
  )
}

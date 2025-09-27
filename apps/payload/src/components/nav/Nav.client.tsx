/* eslint-disable func-style */
'use client'

import '@payloadcms/next/css'

import { getTranslation } from '@payloadcms/translations'
import {
  NavGroup,
  useConfig,
  useTranslation,
} from '@payloadcms/ui'
import type { groupNavItems } from '@payloadcms/ui/shared'
import { EntityType, formatAdminURL } from '@payloadcms/ui/shared'
import LinkWithDefault from 'next/link.js'
import { usePathname } from 'next/navigation.js'
import type { NavPreferences } from 'payload'
import React, { Fragment } from 'react'

const baseClass = 'nav'

export const DefaultNavClient: React.FC<{
  groups: ReturnType<typeof groupNavItems>
  navPreferences: NavPreferences
}> = ({ groups, navPreferences }) => {
  const pathname = usePathname()

  // eslint-disable-next-line putout/single-property-destructuring
  const {
    config: {
      routes: { admin: adminRoute },
    },
  } = useConfig()

  const { i18n } = useTranslation()

  return (
    <Fragment>
      {groups.map(({ entities, label }, key) => {
        return (
          <NavGroup isOpen={navPreferences?.groups?.[label]?.open} key={key} label={label}>
            {entities.map(({ label, slug, type }, i) => {
              let href: string
              let id: string

              if (type === EntityType.collection) {
                href = formatAdminURL({ adminRoute, path: `/collections/${slug}` })
                id = `nav-${slug}`
              }

              if (type === EntityType.global) {
                href = formatAdminURL({ adminRoute, path: `/globals/${slug}` })
                id = `nav-global-${slug}`
              }

              // @ts-expect-error Payload shit
              const Link = (LinkWithDefault.default
              // @ts-expect-error Payload shit

                || LinkWithDefault) as typeof LinkWithDefault.default

              const LinkElement = Link || 'a'
              const activeCollection
              // @ts-expect-error Payload shit
                = pathname.startsWith(href) && [
                  '/',
                  undefined,
                  // @ts-expect-error Payload shit
                ].includes(pathname[href.length])

              return (
                <LinkElement
                  className={[
                    `${baseClass}__link`,
                    activeCollection && `active`,
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  // @ts-expect-error Payload shit
                  href={href}
                  // @ts-expect-error Payload shit

                  id={id}
                  key={i}
                  prefetch={Link ? false : undefined}
                >
                  {activeCollection && (
                    <div className={`
                      ${baseClass}__link-indicator
                    `}
                    />
                  )}
                  <span className={`
                    ${baseClass}__link-label
                  `}
                  >
                    {getTranslation(label, i18n)}
                  </span>
                </LinkElement>
              )
            })}
          </NavGroup>
        )
      })}
    </Fragment>
  )
}

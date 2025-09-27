import {
  ACCESS_TOKEN_EXPIRATION,
  LOCK_TIME,
  MAX_LOGIN_ATTEMPTS,
} from '@payload/constants/auth.constant'
import { isAdmin } from '@repo/utils'
import type { CollectionConfig } from 'payload'

export const userCollection: CollectionConfig = {
  access: {
    delete: () => false,
    read: () => true,
    update: ({
      req: {
        user,
      },
    }) => {
      if (user == null) {
        return false
      }

      return isAdmin(user)
    },
  },
  admin: {
    useAsTitle: 'email',
  },
  auth: {
    lockTime: LOCK_TIME,
    maxLoginAttempts: MAX_LOGIN_ATTEMPTS,
    tokenExpiration: ACCESS_TOKEN_EXPIRATION,
    verify: false,
  },

  fields: [
    {
      tabs: [
        {
          fields: [
            {
              name: 'email',
              label: {
                en: 'Email',
                nl: 'E-mail',
              },
              required: true,
              type: 'text',
            },
            {
              fields: [
                {
                  name: 'firstName',
                  label: {
                    en: 'First name',
                    nl: 'Voornaam',
                  },
                  type: 'text',
                },
                {
                  name: 'lastName',
                  label: {
                    en: 'Last name',
                    nl: 'Achternaam',
                  },
                  type: 'text',
                },
              ],
              type: 'row',
            },
          ],
          label: {
            en: 'Info',
            nl: 'Info',
          },
        },
        {
          fields: [
            {
              name: 'darkMode',
              defaultValue: 'light',
              label: {
                en: 'Dark mode',
                nl: 'Donkere modus',
              },
              options: [
                {
                  label: {
                    en: 'Dark mode',
                    nl: 'Donkere modus',
                  },
                  value: 'dark',
                },
                {
                  label: {
                    en: 'Light mode',
                    nl: 'Lichte modus',
                  },
                  value: 'light',
                },
                {
                  label: {
                    en: 'System default',
                    nl: 'Systeem standaard',
                  },
                  value: 'system',
                },
              ],
              required: true,
              type: 'select',
            },
          ],
          label: {
            en: 'Appearance',
            nl: 'Uiterlijk',
          },
        },
        {
          fields: [
            {
              name: 'role',
              defaultValue: 'user',
              enumName: 'enum_user_role',
              label: {
                en: 'Role',
                nl: 'Rol',
              },
              options: [
                {
                  label: {
                    en: 'Super admin',
                    nl: 'Super admin',
                  },
                  value: 'super-admin',
                },
                {
                  label: {
                    en: 'User',
                    nl: 'Gebruiker',
                  },
                  value: 'user',
                },
                {
                  label: {
                    en: 'Admin',
                    nl: 'Admin',
                  },
                  value: 'admin',
                },
                {
                  label: {
                    en: 'Editor',
                    nl: 'Redacteur',
                  },
                  value: 'editor',
                },
              ],
              required: true,
              type: 'select',
            },
          ],
          label: {
            en: 'Access',
            nl: 'Toegang',
          },
        },
      ],
      type: 'tabs',
    },

  ],
  slug: 'users',
}

import type { Icon } from '@wisemen/vue-core-components'

export interface SocialInfo {
  icon: Icon
  label: string
  url: string
}

export const SOCIAL_INFO = [
  {
    icon: 'linkedIn',
    label: 'linkedin',
    url: 'https://www.linkedin.com/',
  },
  {
    icon: 'facebook',
    label: 'facebook',
    url: 'https://www.facebook.com/',
  },
  {
    icon: 'instagram',
    label: 'instagram',
    url: 'https://www.instagram.com/',
  },
  {
    icon: 'twitter',
    label: 'twitter',
    url: 'https://www.twitter.com/',
  },
] satisfies SocialInfo[]

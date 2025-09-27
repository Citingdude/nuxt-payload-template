import type { Tab } from 'payload'

export const settingsHubspotTab: Tab = {
  name: 'hubspot',
  fields: [
    {
      name: 'portalId',
      label: 'Portal ID',
      type: 'text',
    },
    {
      name: 'accessToken',
      label: 'Access Token',
      type: 'text',
    },
  ],
  label: 'Hubspot',
}

import type {
  UploadField,
} from 'payload'

export interface GetIconFieldOptions {
  name: string
  label: string
}

export function getIconField({ name, label }: GetIconFieldOptions): UploadField {
  return {
    name,
    label,
    relationTo: 'icons',
    required: true,
    type: 'upload',
  }
}

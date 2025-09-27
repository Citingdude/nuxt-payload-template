import type {
  UploadField,
} from 'payload'

export interface GetImageFieldOptions {
  name: string
  label: string
}

export function getImageField({ name, label }: GetImageFieldOptions): UploadField {
  return {
    name,
    label,
    relationTo: 'images',
    required: true,
    type: 'upload',
  }
}

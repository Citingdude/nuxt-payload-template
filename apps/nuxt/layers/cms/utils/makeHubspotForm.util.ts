import type { HubspotField, HubspotForm } from '@cms/types/hubspotForm.type'
import type { ZodSchema } from 'zod'
import {
  z,
  ZodAny,
  ZodString,
} from 'zod'

export function getFieldValidation(field: HubspotField) {
  if (field.fieldType === 'single_line_text') {
    return z.string()
  }

  if (field.fieldType === 'email') {
    return z.string().email()
  }

  if (field.fieldType === 'phone') {
    return z.string()
  }

  if (field.fieldType === 'multi_line_text') {
    return z.string()
  }

  return z.any()
}

export function setRequiredFields({
  field,
  zodShape,
}: { field: HubspotField, zodShape: ZodAny | ZodString }) {
  if (field.required && zodShape instanceof ZodString) {
    return zodShape.min(1)
  }
  if (field.required && zodShape instanceof ZodAny) {
    return zodShape
  }

  return zodShape.optional()
}

export function makeHubspotFormZodSchema(form: HubspotForm): ZodSchema {
  let groupCounter = 0

  const fields = form.fieldGroups.reduce<Record<string, ZodSchema>>((reducedFieldGroup, fieldGroup) => {
    const group = fieldGroup.fields.reduce<Record<string, ZodSchema>>((reducedField, field) => {
      const fieldValidation = getFieldValidation(field)
      const isRequiredField = setRequiredFields({
        field,
        zodShape: fieldValidation,
      })

      reducedField[field.name] = isRequiredField

      return reducedField
    }, {})

    reducedFieldGroup[`group${groupCounter}`] = z.object(group)
    groupCounter++

    return reducedFieldGroup
  }, {})

  return z.object(fields)
}

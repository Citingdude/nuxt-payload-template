import { z } from 'zod'

export const updateCurrentUserFormSchema = z.object({
  darkMode: z.enum([
    'light',
    'dark',
    'system',
  ]).optional(),
  firstName: z.string().nullable(),
  lastName: z.string().nullable(),
})

export type UpdateCurrentUserForm = z.infer<typeof updateCurrentUserFormSchema>

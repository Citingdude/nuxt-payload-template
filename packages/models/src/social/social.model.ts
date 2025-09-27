import { z } from 'zod'

export const socialSchema = z.object({
  name: z.string(),
  icon: z.string(),
  url: z.string().nullable(),
})

export type Social = z.infer<typeof socialSchema>

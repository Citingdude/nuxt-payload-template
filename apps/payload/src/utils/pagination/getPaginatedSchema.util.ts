import type { ZodSchema } from 'zod'
import { z } from 'zod'

export function getPaginatedSchema<T extends ZodSchema>(schema: T) {
  return z.object({
    hasNextPage: z.boolean(),
    hasPrevPage: z.boolean(),
    docs: z.array(schema),
    limit: z.number(),
    nextPage: z.number().nullish(),
    page: z.number().optional(),
    pagingCounter: z.number(),
    prevPage: z.number().nullish(),
    totalDocs: z.number(),
    totalPages: z.number(),
  })
}

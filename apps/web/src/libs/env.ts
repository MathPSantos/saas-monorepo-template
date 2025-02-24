import { z } from 'zod'

const envSchema = z.object({
  VITE_API_URL: z.string().url(),
})

const result = envSchema.safeParse(import.meta.env)

if (!result.success) throw new Error('Invalid env')

export const env = result.data

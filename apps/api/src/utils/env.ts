import { z } from 'zod'

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  DATABASE_URL: z.string().url(),

  JWT_SECRET: z.string(),
})

const result = envSchema.safeParse(process.env)

if (!result.success) {
  throw new Error('Invalid environment variables')
}

export const env = result.data

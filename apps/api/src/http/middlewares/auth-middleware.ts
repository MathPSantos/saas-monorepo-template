import { FastifyInstance } from 'fastify'
import { fastifyPlugin } from 'fastify-plugin'

import { UnauthorizedError } from '../routes/_errors/unauthorized-error'

export const authMiddleware = fastifyPlugin(async (app: FastifyInstance) => {
  app.addHook('preHandler', async (request) => {
    request.getCurrentUserId = async () => {
      try {
        const { sub, wallet } = await request.jwtVerify<{
          sub: string
          wallet: string
        }>()
        return { userId: sub, wallet }
      } catch {
        throw new UnauthorizedError('Invalid auth token')
      }
    }
    request.getOptionalCurrentUserId = async () => {
      try {
        const { sub, wallet } = await request.jwtVerify<{
          sub: string
          wallet: string
        }>()
        return { userId: sub, wallet }
      } catch {
        return {}
      }
    }
  })
})

import 'fastify'

declare module 'fastify' {
  export interface FastifyRequest {
    getCurrentUserId(): Promise<{ userId: string; wallet: string }>
    getOptionalCurrentUserId(): Promise<{ userId?: string; wallet?: string }>
  }
}

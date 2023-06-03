import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default {
  adapter: PrismaAdapter(prisma),
  providers: [
    // Add your authentication providers here
  ],
}
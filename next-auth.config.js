import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import CredentialsProvider from "next-auth/providers/credentials"

const prisma = new PrismaClient()

export default {
  adapter: PrismaAdapter(prisma),
  providers: [
    // Add your authentication providers here
  ],
}
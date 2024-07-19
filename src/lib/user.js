import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getUserAll() {
  return prisma.user.findMany()
}

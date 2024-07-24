'use server'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getUserAll() {
  return prisma.user.findMany()
}

export async function getUserByEmailAndPassword({ email, password }) {
  return prisma.user.findFirst({
    where: {
      email,
      password,
    },
  })
}

export async function getUserAndPosts() {
  return prisma.user.findMany({
    relationLoadStrategy: 'join',
    include: {
      posts: true,
    },
  })
}

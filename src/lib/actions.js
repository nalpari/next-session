'use server'

import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { getIronSession } from 'iron-session'

import { defaultSession, sessionOptions } from '@/lib/lib'
import { getUserByEmailAndPassword } from '@/lib/user'

export async function logout() {
  const session = await getSession()
  session.destroy()
  redirect('/login')
}

export async function getSession() {
  let session
  session = await getIronSession(cookies(), sessionOptions)

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn
  }

  return session
}

export async function login(formData) {
  const session = await getSession()

  const email = formData.get('email')
  const password = formData.get('password')

  console.log('email:', email)
  console.log('password:', password)

  // const user = {
  //   id: 1,
  //   name: 'jinsoo Kim',
  //   email: 'jinsoo.kim@example.com',
  // }
  const user = await getUserByEmailAndPassword({ email, password })

  if (!user) {
    throw Error('Wrong Credentials!')
  }

  session.isLoggedIn = true
  session.id = user.id
  session.email = user.email

  await session.save()
  redirect('/')
}

import Link from 'next/link'
import { redirect } from 'next/navigation'

// import { getUserAll } from '@/lib/user'

import { Button } from '@nextui-org/react'
import { getSession, logout } from '@/lib/actions'
import Users from '@/components/user/Users'
import { getUserAndPosts } from '@/lib/user'

export default async function Home() {
  // const users = await getUserAll()
  // console.log(users)
  const session = await getSession()
  if (!session.email) {
    redirect('/login')
  }

  const users = await getUserAndPosts()
  console.log(users)

  return (
    <>
      <div>page</div>
      <Link href={'/login'}>
        <Button color={'primary'}>Login</Button>
      </Link>
      {/*<div>*/}
      {/*  {users.map((user) => (*/}
      {/*    <div key={user.id}>{user.name}</div>*/}
      {/*  ))}*/}
      {/*</div>*/}
      <form action={logout}>
        <Button type="submit">Logout</Button>
      </form>
      <div>{session && <p>{session.email}</p>}</div>

      {/*<Users />*/}
    </>
  )
}

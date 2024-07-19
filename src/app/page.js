import Link from 'next/link'

import { getUserAll } from '@/lib/user'

import { Button } from '@nextui-org/react'

export default async function Home() {
  const users = await getUserAll()
  console.log(users)

  return (
    <>
      <div>page</div>
      <Link href={'/login'}>
        <Button color={'primary'}>Login</Button>
      </Link>
      <div>
        {users.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    </>
  )
}

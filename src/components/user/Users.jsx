'use client'

import { Button } from '@nextui-org/react'
import { getUserAndPosts } from '@/lib/user'

export default async function Users() {
  let users = []
  const handleUsers = async () => {
    users = await getUserAndPosts()
    console.log(users)
  }

  return (
    <>
      <p>
        <Button onClick={handleUsers}>Get Users</Button>
      </p>

      {users.map((user) => (
        <div>{user.user_id}</div>
      ))}
    </>
  )
}

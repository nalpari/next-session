import { redirect } from 'next/navigation'
import { getSession } from '@/lib/actions'
import LoginForm from '@/components/login/LoginForm'

export default async function LoginPage() {
  const session = await getSession()

  if (session.isLoggedIn) {
    redirect('/')
  }

  return (
    <>
      <LoginForm />
    </>
  )
}

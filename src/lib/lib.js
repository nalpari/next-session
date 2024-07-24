export const defaultSession = {
  name: '',
  email: '',
  isLoggedIn: false,
}

export const sessionOptions = {
  password: process.env.SESSION_SECRET,
  cookieName: 'lama-session',
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  },
}

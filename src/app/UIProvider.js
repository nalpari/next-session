'use client'

import { NextUIProvider } from '@nextui-org/react'

export default function UIProvier({ children }) {
  return (
    <>
      <NextUIProvider>{children}</NextUIProvider>
    </>
  )
}

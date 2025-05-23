import React from 'react'
import './styles.scss'
export const metadata = {
  description: "All about Kim and Christian's wedding!",
  title: "Kim & Christian's Wedding",
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}

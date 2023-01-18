import Head from 'next/head'
import React from 'react'

function UserLayout({ children }) {
  return (
    <>
     <Head>
        <title>My user App</title>
      </Head>
      <>
        {children}
      </>
    </>
  )
}

export default UserLayout
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const redirect = () => {
  return (
    <div>
      <Head>
        <title>Redirecting</title>
         
      </Head>
      <div className="flex-auto items-center ">
        <h2 className="text-center text-zinc-799 font-mono text-4xl">Redirecting to Web🍯</h2>
        <Link href='https://hunn.web.app'>Go </Link>
      </div>
    </div>
  )
}

export default redirect
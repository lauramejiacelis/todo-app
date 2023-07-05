import Head from 'next/head'
import Todos from '@/components/Todos'

export default function Home() {
  return (
    <>
      <Head>
        <title>To Do App| Home</title>
        <meta name="keywords" content="characters" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>
        <h1>Home</h1>
      </main>
    </>
  )
}

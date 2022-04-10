import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Christoph Laier!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome!" />
        <p className="description">
          Hello and welcome for stumbling onto my website. I'm trying how to get this thing running at the moment.</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}

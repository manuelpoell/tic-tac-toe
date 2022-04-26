import Head from 'next/head'
import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Tic Tac Toe | Manuel Pöll</title>
      </Head>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout

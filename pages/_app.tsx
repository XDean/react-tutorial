import {AppProps} from "next/dist/pages/_app";
import '../styles/global.css'
import Head from 'next/head'
import '@fortawesome/fontawesome-free/css/all.min.css'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>XDean的React教程</title>
      </Head>
      <Component {...pageProps}/>
    </>
  )
}

export default MyApp

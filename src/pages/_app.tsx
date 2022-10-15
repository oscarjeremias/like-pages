import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";
import { apolloClient  } from "../ultis/apolloClient";
import { ApolloProvider } from "@apollo/client";

function MyApp({ Component, pageProps }: AppProps) {
  const url_cms = `${process.env.NEXT_PUBLIC_URL_CMS}`
  const client = apolloClient(url_cms)
  return (
    <>
      <Head>
    <link rel="icon" type="image/x-icon" href="https://media.graphassets.com/BkRHETG7SUyhax7NK4d4" />
      </Head>
    <ApolloProvider client={client}>
    <Component {...pageProps} />
    </ApolloProvider>
    </>
  )
}

export default MyApp

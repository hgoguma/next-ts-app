import '@/styles/globals.scss'
import type { ReactElement, ReactNode } from 'react'
import wrapper from '@/redux/store'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
// layouts
import AppLayout from '@/components/layouts/AppLayout'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps, router }: AppPropsWithLayout) {
  const isLoginRoute = router.route === '/login'

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      { isLoginRoute
        ? (<Component {...pageProps} />)
        : (<AppLayout><Component {...pageProps} /></AppLayout>)
      }
    </>
  )
}

export default wrapper.withRedux(MyApp)

import '@/styles/globals.scss'
import { useState } from 'react'
import type { ReactElement, ReactNode } from 'react'
// import wrapper from '@/redux/store'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
// layouts
import AppLayout from '@/components/layouts/AppLayout'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'

import { RecoilRoot } from 'recoil';


type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps, router }: AppPropsWithLayout) {
  const isLoginRoute = router.route === '/login'
  const [queryClient] = useState(() => new QueryClient())
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
            { isLoginRoute ? <Component {...pageProps} /> : <AppLayout><Component {...pageProps} /></AppLayout> }
        </Hydrate>
        </QueryClientProvider>

      </RecoilRoot>
      
    </>
  )
}

export default MyApp
// export default wrapper.withRedux(MyApp)

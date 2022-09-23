import React from 'react'
import Head from 'next/head'
import { func, object } from 'prop-types'
import { Provider } from 'react-redux'
import 'normalize.css'

import store from '../store'

const App = ({ Component, pageProps }) => {
  return (
    <Provider {...{ store }}>
      <Head>
        <title>Dream Team - Ford Network</title>
        <meta content="Dream Team Ford Network" name="description" />
        <link href="/favicon.png" rel="shortcut icon" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  )
}

App.propTypes = {
  Component: func,
  pageProps: object
}

export default App

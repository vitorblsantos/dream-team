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
        <title>Vitorblsantos - template portal</title>
        <meta content="A sua fonte segura de informação, SBT 40 anos, Brasil, Coronavirus, Congresso, Governo, Economia, Justica, Mundo, Esportes, Eleicoes, SBT Mulher, Analise, Podcast, Tudo Sobre, Videos, Redacao, Noticia" name="description" />
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

import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class OddDocument extends Document {
  render () {
    return (
      <Html lang="pt-br">
        <Head>
          <link href="https://fonts.googleapis.com" rel="preconnect" />
          <link crossOrigin="crossorigin" href="https://fonts.gstatic.com" rel="preconnect" />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default OddDocument

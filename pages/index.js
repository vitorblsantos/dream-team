import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import TopHeader from '../components/TopHeader'

import GlobalStyles from '../styles'

const Home = () => {
  return (
    <>
      <GlobalStyles />
      <TopHeader />
      <Header />
      <Footer />
    </>
  )
}

export default Home

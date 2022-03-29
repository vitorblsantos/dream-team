import React from 'react'
import AdsHeader from '../AdsHeader'
import Hamburguer from '../Hamburguer'
import Interactors from '../Interactors'
import Logo from '../Logo'
import Menu from '../Menu'

import { Container, Wrapper } from './style'

const Header = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <Hamburguer />
          <Logo Height="41px" MarginDesktop="0 0 0 40px" Width="101px" />
          <Menu />
          <Interactors />
        </Container>
      </Wrapper>
      <AdsHeader />
    </>
  )
}

export default Header

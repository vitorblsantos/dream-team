import React from 'react'

import Login from '../Login'
import ThemeSwitcher from '../ThemeSwitcher'

import { Container, Wrapper } from './style'

const TopHeader = () => {
  return (
    <Wrapper>
      <Container>
        <Login />
        <ThemeSwitcher />
      </Container>
    </Wrapper>
  )
}

export default TopHeader

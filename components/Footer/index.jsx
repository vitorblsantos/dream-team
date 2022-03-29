import React from 'react'
import Logo from '../Logo'
import { Container, Span } from './style'

const Footer = () => {
  return (
    <Container>
      <Span>© Copyright {new Date().getFullYear()} vitorblsantos - Todos os direitos reservados</Span>
      <Logo Height="63px" MarginDesktop="0" Width="165px" />
    </Container>
  )
}

export default Footer

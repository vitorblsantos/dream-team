import React from 'react'
import { Container, Span } from './style'

const Footer = () => {
  return (
    <Container>
      <Span>© Copyright {new Date().getFullYear()} - Dream Team</Span>
    </Container>
  )
}

export default Footer

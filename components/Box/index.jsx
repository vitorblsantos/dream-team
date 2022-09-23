import React from 'react'
import { node, string } from 'prop-types'

import { Container } from './style'

const Box = ({ children, id }) => {
  return (
    <Container id={id}>
      {children}
    </Container>
  )
}

Box.propTypes = {
  children: node,
  id: string
}

export default Box

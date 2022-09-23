import React from 'react'
import { string } from 'prop-types'

import { Container } from './style'

const Title = ({ align, children, id, fontSize, marginBottom }) => {
  return (
    <Container {...{ align, fontSize, id, marginBottom }}>
      {children}
    </Container>
  )
}

Title.propTypes = {
  align: string,
  children: string,
  id: string,
  fontSize: string,
  marginBottom: string

}

export default Title

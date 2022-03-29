import React from 'react'

import Loupe from '../Loupe'
import Notification from '../Notification'
import Switcher from '../Switcher'

import { Container } from './style'

const Interactors = () => {
  return (
    <Container>
      <Loupe />
      <Switcher />
      <Notification />
    </Container>
  )
}

export default Interactors

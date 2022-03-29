import React from 'react'
import Image from 'next/image'
import AdsImage from '../../images/ads.jpg'

import { Container } from './style'

const AdsHeader = () => (
  <Container>
    <Image alt="" src={AdsImage} />
  </Container>
)

export default AdsHeader

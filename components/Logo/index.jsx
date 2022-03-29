import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { string } from 'prop-types'

import LogoImage from '../../images/logo.png'

import { Container } from './style'

const Logo = ({ Height, MarginDesktop, Width }) => {
  return (
    <Container {... { Height, MarginDesktop, Width }}>
      <Link href="/">
        <a>
          <Image alt="Logo SBT News" height={Height} src={LogoImage} width={Width} />
        </a>
      </Link>
    </Container>
  )
}

Logo.propTypes = {
  Height: string,
  MarginDesktop: string,
  Width: string
}

export default Logo

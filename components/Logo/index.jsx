import React from 'react'
import { bool } from 'prop-types'

import Image from 'next/image'
import Link from 'next/link'

import { Container } from './style'

const Logo = ({ fixed }) => {
  return (
    <Container {...{ fixed }}>
      <Link href="/">
        <a>
          <Image alt="Logo Ford" height="40" src="/logo-ford.png" width="80" />
        </a>
      </Link>
    </Container>
  )
}

Logo.propTypes = {
  fixed: bool
}

export default Logo

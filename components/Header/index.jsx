import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setHeaderFixed } from '../../store/ducks/config'

import Logo from '../Logo'
import Menu from '../Menu'

import { Container, Wrapper } from './style'

const Header = () => {
  const { config: { header: { fixed } } } = useSelector(state => state)
  const dispatch = useDispatch()

  const [scrollTop, setScrollTop] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', e => setScrollTop(e.target.documentElement.scrollTop))
  }, [])

  useEffect(() => {
    if (scrollTop > 152 && !fixed) return dispatch(setHeaderFixed(true))
    if (scrollTop < 152 && fixed) return dispatch(setHeaderFixed(false))
  }, [dispatch, fixed, scrollTop])

  return (
    <>
      <Wrapper>
        <Container>
          <Logo {... { fixed }} />
          <Menu {... { fixed }} />
        </Container>
      </Wrapper>
    </>
  )
}

export default Header

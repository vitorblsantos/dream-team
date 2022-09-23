import React from 'react'
import { bool } from 'prop-types'

import { Item, List } from './style'

const Menu = ({ fixed }) => {
  const scrollTo = (ref) => {
    ref = document.querySelector(ref)
    const y = ref.getBoundingClientRect().top + window.pageYOffset - 100
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  return (
    <List {...{ fixed }}>
      <Item {...{ fixed }} onClick={() => scrollTo('#problem')}>Problem</Item>
      <Item {...{ fixed }} onClick={() => scrollTo('#solution')}>Our Solution</Item>
      <Item {...{ fixed }} onClick={() => scrollTo('#product')}>Product</Item>
      <Item {...{ fixed }} onClick={() => scrollTo('#tech')} >Technologies</Item>
    </List>
  )
}

Menu.propTypes = {
  fixed: bool
}

export default Menu

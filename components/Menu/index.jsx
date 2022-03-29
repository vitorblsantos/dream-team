import React from 'react'
import Link from 'next/link'

import { Anchor, Item, List, Nav } from './style'

const arr = [
  {
    color: '#EDBE19',
    content: 'Editoria 1',
    link: '#'
  }, {
    color: '#56258F',
    content: 'Editoria 2',
    link: '#'
  }, {
    color: '#A7264A',
    content: 'Editoria 3',
    link: '#'
  }, {
    color: '#3467C7',
    content: 'Editoria 4',
    link: '#'
  }, {
    color: '#4EB150',
    content: 'Editoria 5',
    link: '#'
  }, {
    color: '#D62A33',
    content: 'Editoria 6',
    link: '#'
  }, {
    color: '#696969',
    content: 'Editoria 7',
    link: '#'
  }, {
    color: '#E44E38',
    content: 'Editoria 8',
    link: '#'
  }, {
    color: '#C42EA8',
    content: 'Editoria 9',
    link: '#'
  }
]

const Menu = () => {
  return (
    <Nav>
      <List>
        {
          arr.map(({ color, content, link }, i) => (
            <Item Color={color} key={i}>
              <Link href={link} passHref>
                <Anchor>
                  {content}
                </Anchor>
              </Link>
            </Item>
          ))
        }
      </List>
    </Nav>
  )
}

export default Menu

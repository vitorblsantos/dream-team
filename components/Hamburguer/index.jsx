import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Rect } from './style'
import { setMenu } from '../../store/ducks/config'

const Hamburguer = () => {
  const { config: { menu } } = useSelector(state => state)
  const dispatch = useDispatch()

  const handleAnimation = () => {
    dispatch(setMenu())
  }

  return (
    <Button aria-label="Abrir menu fixo" onClick={() => handleAnimation()}>
      <Rect Transform={menu.active} />
      <Rect Hidden={menu.active} />
      <Rect Transform={menu.active} />
    </Button>
  )
}

export default Hamburguer

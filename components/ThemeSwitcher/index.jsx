import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { handleTheme, setTheme } from '../../store/ducks/config'

import { Button, Container, IconThemeDark, IconThemeLight } from './style.js'

const ThemeSwitcher = () => {
  const { config: { theme } } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    function handleUserTheme () {
      const { localStorage } = window
      const userTheme = localStorage.getItem('current-user-theme')
      if (!userTheme) return false
      return dispatch(setTheme(userTheme))
    }
    handleUserTheme()
  }, [dispatch])

  return (
    <Container onClick={() => dispatch(handleTheme())}>
      {theme === 'dark' ? <IconThemeLight /> : <IconThemeDark />}
      <Button>Alterar para {theme === 'dark' ? 'claro' : 'escuro'}</Button>
    </Container>
  )
}

export default ThemeSwitcher

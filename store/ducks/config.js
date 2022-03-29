const INITIAL_STATE = {
  menu: {
    active: false
  },
  theme: 'default'
}

export const Types = {
  SET_MENU: 'SET_MENU',
  SET_THEME: 'SET_THEME'
}

export default function reducer (state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case Types.SET_THEME:
      return { ...state, ...payload }

    case Types.SET_MENU:
      return { ...state, menu: { ...state.menu, ...payload } }
    default:
      return state
  }
}

export function handleTheme () {
  return (dispatch, getState) => {
    const { localStorage } = window
    const { config: { theme } } = getState()
    let draftTheme = ''

    switch (theme) {
      case 'default':
        draftTheme = 'dark'
        document.body.classList.add('theme-dark')
        break
      default:
        draftTheme = 'default'
        document.body.classList.remove('theme-dark')
        break
    }

    localStorage?.setItem('current-user-theme', draftTheme)

    dispatch({
      payload: {
        theme: draftTheme
      },
      type: Types.SET_THEME
    })
  }
}

export function setMenu () {
  return (dispatch, getState) => {
    const { config: { menu: { active } } } = getState()
    dispatch({
      payload: {
        active: !active
      },
      type: Types.SET_MENU
    })
  }
}

export function setTheme (theme) {
  if (theme === 'dark') document.body.classList.add('theme-dark')
  if (theme !== 'dark') document.body.classList.remove('theme-dark')
  return {
    type: Types.SET_THEME,
    payload: {
      theme
    }
  }
}

const INITIAL_STATE = {
  header: {
    fixed: false
  }
}

export const Types = {
  SET_HEADER_FIXED: 'SET_HEADER_FIXED'
}

export default function reducer (state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case Types.SET_HEADER_FIXED:
      return { ...state, header: { ...state.header, ...payload } }
    default:
      return state
  }
}

export function setHeaderFixed (bool) {
  return (dispatch) => dispatch({
    payload: {
      fixed: bool
    },
    type: Types.SET_HEADER_FIXED
  })
}

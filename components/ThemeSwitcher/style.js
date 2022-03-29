import styled from 'styled-components'

import IconLight from '../../images/icone-tema-claro.svg'
import IconDark from '../../images/icone-tema-escuro.svg'

export const Button = styled.button`
  background: #0000;
  border: 0;
  color: #FFF;
  cursor: pointer;
  font-size: .6875rem;
  font-weight: 500;
`

export const Container = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-wrap: nowrap;
  user-select: none;
`

export const IconThemeDark = styled(IconDark)`
  margin: 0 12px 0 0;
`

export const IconThemeLight = styled(IconLight)`
  margin: 0 12px 0 0;
`

import styled from 'styled-components'

import IconSwitcher from '../../images/icone-trocar-app.svg'

export const Button = styled.button`
  background: #0000;
  border: 0;
  cursor: pointer;
  height: 24px;
  margin: 0 24px;
  position: relative;
  width: 24px;
`

export const Icon = styled(IconSwitcher)`
  display: flex;
  flex: 1;
`

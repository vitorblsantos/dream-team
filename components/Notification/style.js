import styled from 'styled-components'

import IconNotification from '../../images/icone-notificacoes.svg'

export const Button = styled.button`
  background: #0000;
  border: 0;
  cursor: pointer;
  height: 28px;
  position: relative;
  width: 28px;
  &:after {
    align-items: center;
    background: red;
    border-radius: 10px;
    color: #fff;
    content: '9+';
    display: flex;
    font-size: .5rem;
    height: 12px;
    justify-content: center;
    padding: 1px;
    position: absolute;
    right: 0px;
    top: -3px;
    width: 12px;
  }
`

export const Icon = styled(IconNotification)`
  display: flex;
  flex: 1;
`

import styled from 'styled-components'
import IconArrow from '../../images/icone-seta-direita.svg'

const Sign = styled.div`
  display: inline-flex;
`

export const Arrow = styled(IconArrow)`
  margin: 0 12px 0 0;
`

export const Button = styled.button`
  background: #0000;
  border: 0;
  color: #FFF;
  cursor: pointer;
  font-size: .6875rem;
  font-weight: 500;
`

export const Container = styled.div`
  align-items: flex-end;
  display: flex;
`

export const SignIn = styled(Sign)`
  margin: 0 20px 0 0;
`

export const SignUp = styled(Sign)`
  margin: 0 0 0 20px;
  position: relative;
  &:before {
    background: #fff;
    content: '';
    display: block;
    height: 100%;
    left: -20px;
    position: absolute;
    width: 1px;
  }
`

import styled, { css } from 'styled-components'

export const Rect = styled.div`
  background: #fff;
  border-radius: 12px;
  display: flex;
  height: 2px;
  margin: 0 0 6px;
  width: 28px;

  &:last-of-type {
    margin: 0;
  }

  ${({ Hidden }) => Hidden && css`
    transition: none;
    opacity: 0;
    visibility: hidden;
  `}

  ${({ Transform }) => Transform && css`
    transition: all .1s ease-in-out;
    :first-of-type {
      left: 7px;
      position: absolute;
      top: 20px;
      transform: rotate(45deg);
    }

    :last-of-type {
      position: absolute;
      right: 4px;
      top: 20px;
      transform: rotate(-45deg);
    }
  `}
`

export const Button = styled.button`
  background: #0000;
  border: 0;
  cursor: pointer;
  display: flex;
  flex-flow: column nowrap;
  height: 40px;
  justify-content: center;
  padding: 4px 6px;
  position: relative;
  width: 40px;
`

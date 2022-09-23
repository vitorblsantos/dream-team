import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ fixed }) => fixed ? '#454895' : 'rgba(255, 255, 255, .05)'};
  border-radius: 32px;
  cursor: pointer;
  display: inline-flex;
  padding: 8px;
  transition: all .3s ease-in-out;
  width: fit-content;
`

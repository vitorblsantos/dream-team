import styled from 'styled-components'

export const Container = styled.div`
  cursor: pointer;
  height: ${({ Height }) => Height};
  margin: ${({ MarginDesktop }) => MarginDesktop};
  width: ${({ Width }) => Width};
`

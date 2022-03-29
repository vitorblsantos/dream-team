import styled from 'styled-components'

export const Anchor = styled.a`
  color: inherit;
  text-decoration: none;
`

export const Item = styled.li`
  align-items: center;
  color: #FFFDFD;
  display: flex;
  font-size: 1rem;
  font-weight: 500;
  height: 100%;
  justify-content: center;
  position: relative;
  width: 140px;

  &:after {
    background: ${({ Color }) => Color};
    bottom: 0;
    content: '';
    height: 4px;
    position: absolute;
    width: 100%;
  }
`

export const List = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  height: 100%;
  list-style: none;
`

export const Nav = styled.nav`
  height: 100%;
  margin: 0 auto;
`

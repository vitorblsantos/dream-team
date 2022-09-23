import styled from 'styled-components'

export const Item = styled.li`
  color: ${({ fixed }) => fixed ? '#fff' : 'hsla(0, 0%, 100%, .48);'};
  cursor: pointer;
  padding: 4px;
  transition: all .3s ease-in-out;

  &:hover {
    color: #fff;
  }
`

export const List = styled.ul`
  background: ${({ fixed }) => fixed ? '#454895' : 'rgba(255, 255, 255, .05)'};
  border-radius: 20px;
  display: inline-flex;
  list-style: none;
  transition: all .3s ease-in-out;
  padding: 12px;

  @media (max-width: 992px) {
    display: none;
  }
`

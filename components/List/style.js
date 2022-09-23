import styled from 'styled-components'

export const Content = styled.span`
  font-size: 14px;
`

export const Li = styled.li`
  align-items: center;
  background: #00000073;
  border-radius: 200px;
  display: inline-flex;
  flex-flow: column nowrap;
  height: 260px;
  justify-content: center;
  padding: 0 20px;
  text-align: center;
  width: 260px;

  @media (max-width: 992px) {
    margin: 0 0 12px;
  }
`

export const Title = styled.span`
  font-size: 22px;
  margin: 0 0 12px;
`

export const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;

  @media (max-width: 992px) {
    align-items: center;
    flex-flow: column nowrap;
    justify-content: center;
  }
`

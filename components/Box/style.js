import styled from 'styled-components'

export const Container = styled.div`
  background: hsla(0, 0%, 100%, .15);
  border-radius: 12px;
  font-size: 1.4rem;
  margin: 0 0 40px;
  padding: 20px;

  @media (max-width: 992px) {
    margin: 0 auto 40px;
    width: 95%;
  }
`

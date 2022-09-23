import styled from 'styled-components'

export const Container = styled.div`
  font-size: ${({ fontSize }) => fontSize};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  text-align: ${({ align }) => align};

  @media (max-width: 992px) {
    font-size: 32px;
  }
`

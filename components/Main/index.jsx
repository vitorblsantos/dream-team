import React from 'react'
import Image from 'next/image'

import { Background, Circle, Container, ContainerImage, Content, WrapperCircles, WrapperImages } from './style'

import Box from '../Box'
import Title from '../Title'
import List from '../List'

const Main = () => {
  return (
    <Container>
      <Background />
      <Title align="center" fontSize="4rem" marginBottom="32px">Ford Network</Title>
      <Box id="about">
        <ContainerImage>
          <Image alt="" height="96px" src="/icone-about-3.svg" width="96px" />
        </ContainerImage>
        <Title fontSize="3rem" marginBottom="8px">About</Title>
        <Content>
          Atualmente, a maior parte das nossas interações são feitas através de redes sociais. Essas, são algumas estruturas estabelecidas dentro e fora da internet por usuários que se conectam a partir de interesses em comum.
        </Content>
      </Box>

      <Box id="problem">
        <ContainerImage>
          <Image alt="" height="96px" src="/icone-problem.png" width="96px" />
        </ContainerImage>
        <Title fontSize="3rem" marginBottom="8px">Problem</Title>
        <Content>
          Utilizar soluções tecnológicas para melhorar a Experiência de Usuário ao longo de todo o ciclo de vida do veículo (Aquisição, Uso, Serviço, Troca).
        </Content>
      </Box>

      <Box id="solution">
        <ContainerImage>
          <Image alt="" height="96px" src="/icone-about.svg" width="96px" />
        </ContainerImage>
        <Title fontSize="3rem" marginBottom="8px">Our Solution</Title>
        <Content>
          O  Ford Network, introduz experiências de ajuda inteiramente novas com interações naturais para os usuários. Esse, vai funcionar como uma rede social para a empresa.
        </Content>
      </Box>

      <Box>
        <Title fontSize="3rem" id="product" marginBottom="36px">Product</Title>
        <List />
      </Box>

      <Box>
        <Title fontSize="3rem" id="product-demo" marginBottom="36px">Product - Demo</Title>

        <WrapperImages>
          <Image alt="" height="400px" src="/product-0.png" width="220px" />
          <Image alt="" height="400px" src="/product.png" width="220px" />
          <Image alt="" height="400px" src="/product-1.png" width="220px" />
          <Image alt="" height="400px" src="/product-2.png" width="220px" />
          <Image alt="" height="400px" src="/product-3.png" width="220px" />
        </WrapperImages>
      </Box>

      <Box id="tech">
        <Title fontSize="3rem" marginBottom="36px">Technologies</Title>

        <WrapperCircles>
          <Circle>
            <Image alt="" height="100px" src="/logo-nodejs.png" width="140px" />
          </Circle>
          <Circle>
            <Image alt="" height="100px" src="/logo-ts.png" width="100px" />
          </Circle>
          <Circle>
            <Image alt="" height="100px" src="/logo-react.png" width="120px" />
          </Circle>
          <Circle>
            <Image alt="" height="80px" src="/logo-mongo.svg" width="160px" />
          </Circle>
        </WrapperCircles>
      </Box>
    </Container>
  )
}

export default Main

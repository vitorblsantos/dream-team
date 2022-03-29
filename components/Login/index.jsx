import React from 'react'
import { Arrow, Button, Container, SignIn, SignUp } from './style'

const Login = () => (
  <Container>
    <SignIn>
      <Arrow />
      <Button>Entrar</Button>
    </SignIn>
    <SignUp>
      <Button>Cadastrar-se</Button>
    </SignUp>
  </Container>
)

export default Login

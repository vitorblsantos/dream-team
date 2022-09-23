import React from 'react'
import { Content, Li, Title, Ul } from './style'

const List = () => {
  return (
    <Ul>
      <Li>
        <Title>Contato Social</Title>
        <Content>Possibilidade de adicionar novos amigos e verificar os rankings de outros usuários</Content>
      </Li>
      <Li>
        <Title>Sistema de Ranking</Title>
        <Content>Esse vai ser responsável por gerar as recompensas dos clientes conforme ele vai concluindo as metas pré-definidas</Content>
      </Li>
      <Li>
        <Title>Ford Coin</Title>
        <Content>De acordo com o avanco do cliente no sistema de ranking, ele recebe Ford Coins para trocar por produtos/serviços</Content>
      </Li>
    </Ul>
  )
}

export default List

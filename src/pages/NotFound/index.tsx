import React from 'react'
import { Link } from 'react-router-dom'

import Question from '../../assets/question.svg'

import { Container, Content } from './styles'

export const NotFound: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={Question} alt="?" draggable="false" />
        <div>
          <h1>Página não encontrada</h1>
          <Link id="HomeLink" to="/">Voltar para página principal</Link>
        </div>
      </Content>
    </Container>
  )
}

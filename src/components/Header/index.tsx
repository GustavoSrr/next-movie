import React from 'react'

import { Container, Content } from './styles'

export const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <h1>Movies</h1>
        <form>
          <input type="text" />
        </form>
      </Content>
    </Container>
  )
}

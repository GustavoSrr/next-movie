import React from 'react'

import { Header } from '../../components/Header'
import { Trending } from '../../components/Trending'

import { Container, Content, Explore } from './styles'

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <Explore>
            <h1>Explorar</h1>
            <form>
              <input type="text" placeholder="Filmes e séries" />
            </form>
          </Explore>
          <Trending />
        </Content>
      </Container>
    </>
  )
}

import React from 'react'

import { Header } from '../../components/Header'
import { Explore } from '../../components/Explore'
import { Trending } from '../../components/Trending'
import { Popular } from '../../components/Popular'
import { Footer } from '../../components/Footer'

import { Container, Content } from './styles'

export const Home: React.FC = () => {
  return (
    <>
      <Header fixed />
      <Container>
        <Content>
          <Explore />
          <Trending />
          <Popular title="Filmes populares" type="movie" />
          <Popular title="Séries populares" type="tv" />
        </Content>
      </Container>
      <Footer />
    </>
  )
}

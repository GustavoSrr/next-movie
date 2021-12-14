import React from 'react'

import { Header } from '../../components/Header'
import { PopularMovies } from '../../components/PopularMovies'
import { NowPlaying } from '../../components/NowPlaying'
import { Footer } from '../../components/Footer'

import { Container, Content } from './styles'

export const MovieHome: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <h1>Filmes</h1>
          <PopularMovies title="Populares"/>
          <NowPlaying title="Em cartaz" type="movie"/>
        </Content>
      </Container>
      <Footer />
    </>
  )
}

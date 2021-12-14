import React from 'react'

import { Header } from '../../components/Header'
import { Explore } from '../../components/Explore'
import { Trending } from '../../components/Trending'
import { PopularMovies } from '../../components/PopularMovies'
import { PopularTvSeries } from '../../components/PopularTvSeries'
import { Footer } from '../../components/Footer'

import { Container, Content } from './styles'

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <Explore />
          <Trending />
          <PopularMovies title="Filmes populares" />
          <PopularTvSeries title="Séries populares"/>
        </Content>
      </Container>
      <Footer />
    </>
  )
}

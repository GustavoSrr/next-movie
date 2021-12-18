import React from 'react'

import { Header } from '../../components/Header'
import { Popular } from '../../components/Popular'
import { NowPlaying } from '../../components/NowPlaying'
import { Upcoming } from '../../components/Upcoming'
import { Footer } from '../../components/Footer'

import { Container, Content } from './styles'

export const MovieHome: React.FC = () => {
  return (
    <>
      <Header fixed />
      <Container>
        <Content>
          <h1>Filmes</h1>
          <Popular title="Populares" type="movie" />
          <NowPlaying title="Em cartaz" type="movie"/>
          <Upcoming />
        </Content>
      </Container>
      <Footer />
    </>
  )
}

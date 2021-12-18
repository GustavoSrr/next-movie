import React from 'react'

import { Header } from '../../components/Header'
import { Popular } from '../../components/Popular'
import { NowPlaying } from '../../components/NowPlaying'
import { AiringToday } from '../../components/AiringToday'
import { Footer } from '../../components/Footer'

import { Container, Content } from './styles'

export const TvHome: React.FC = () => {
  return (
    <>
      <Header fixed />
      <Container>
        <Content>
          <h1>Séries</h1>
          <Popular title="Populares" type="tv"/>
          <NowPlaying title="Em exibição" type="tv"/>
          <AiringToday />
        </Content>
      </Container>
      <Footer />
    </>
  )
}

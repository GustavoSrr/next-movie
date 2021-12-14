import React from 'react'

import { Header } from '../../components/Header'
import { Popular } from '../../components/Popular'
import { NowPlaying } from '../../components/NowPlaying'
import { Footer } from '../../components/Footer'

import { Container, Content } from './styles'

export const TvHome: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <h1>Séries</h1>
          <Popular title="Populares" type="tv"/>
          <NowPlaying title="Em exibição" type="tv"/>
        </Content>
      </Container>
      <Footer />
    </>
  )
}

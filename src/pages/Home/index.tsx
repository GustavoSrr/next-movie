import React, { useEffect } from 'react'

import { Header } from '../../components/Header'
import { useMovie } from '../../hooks/useMovie'

import { Container } from './styles'

export const Home: React.FC = () => {
  const { movie } = useMovie()
  useEffect(() => {
    console.log(movie)
  })

  return (
    <Container>
      <Header />
      <h1>Home</h1>
    </Container>
  )
}

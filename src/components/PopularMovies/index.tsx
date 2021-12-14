import React, { useCallback, useEffect, useState } from 'react'
import { useGet } from '../../hooks/useGet'

import { Row } from '../Row'

import Popcorn from '../../assets/popcorn.svg'

import type { PopularType } from '../../contexts/get'

import { Container } from './styles'

type PopularMoviesProps = {
  title: string;
}

export const PopularMovies: React.FC<PopularMoviesProps> = ({
  title
}: PopularMoviesProps) => {
  const { getPopularMovies } = useGet()
  const [popularMovies, setPopularMovies] = useState({} as PopularType)

  const getData = useCallback(async () => {
    const { data } = await getPopularMovies()

    if (data) setPopularMovies(data)
  }, [])

  useEffect(() => {
    getData()
  }, [0, getData])

  return (
    <Container>
      {
        popularMovies
          ? (
            <>
              <h2><img src={Popcorn} alt="🍿" draggable="false" /> {title}</h2>
              <Row
                data={popularMovies}
                type="movie"
              />
            </>
            )
          : ''
      }
    </Container>
  )
}

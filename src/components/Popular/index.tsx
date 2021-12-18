import React, { useCallback, useEffect, useState } from 'react'
import { useGet } from '../../hooks/useGet'

import { Row } from '../Row'

import Popcorn from '../../assets/popcorn.svg'
import Camera from '../../assets/camera.svg'

import type { PopularType } from '../../contexts/get'

import { Container } from './styles'

type PopularMoviesProps = {
  title: string;
  type: 'movie' | 'tv';
}

export const Popular: React.FC<PopularMoviesProps> = ({
  title,
  type
}: PopularMoviesProps) => {
  const { getPopular } = useGet()
  const [popular, setPopular] = useState({} as PopularType)

  const getData = useCallback(async () => {
    const { data } = await getPopular(type)

    if (data) setPopular(data)
  }, [])

  useEffect(() => {
    getData()
  }, [0, getData])

  return (
    <Container>
      {
        popular
          ? (
            <>
              {type === 'movie'
                ? <h2><img src={Popcorn} alt="🍿" draggable="false" /> {title}</h2>
                : <h2><img src={Camera} alt="🎥" draggable="false" /> {title}</h2>}
              <Row
                data={popular}
                type={type}
              />
            </>
            )
          : ''
      }
    </Container>
  )
}

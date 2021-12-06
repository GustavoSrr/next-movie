import React, { useCallback, useEffect, useState } from 'react'
import { useGet } from '../../hooks/useGet'

import { Row } from '../Row'

import Collision from '../../assets/collision.svg'

import type { TrendingType } from '../../contexts/get'

import { Container } from './styles'

export const Trending: React.FC = () => {
  const { getTrending } = useGet()
  const [trending, setTrending] = useState({} as TrendingType)

  const getData = useCallback(async () => {
    const { data } = await getTrending()

    if (data) setTrending(data)
  }, [])

  useEffect(() => {
    getData()
  }, [0, getData])

  return (
    <Container>
      {
        trending
          ? (
            <>
              <h2><img src={Collision} alt="💥" draggable="false" /> Bombando</h2>
              <Row
                data={trending}
                type="trending"
              />
            </>
            )
          : ''
      }
    </Container>
  )
}

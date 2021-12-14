import React, { useCallback, useEffect, useState } from 'react'
import { useGet } from '../../hooks/useGet'

import { Row } from '../Row'

import Camera from '../../assets/camera.svg'

import type { PopularType } from '../../contexts/get'

import { Container } from './styles'

type PopularTvSeriesProps = {
  title: string;
}

export const PopularTvSeries: React.FC<PopularTvSeriesProps> = ({
  title
}: PopularTvSeriesProps) => {
  const { getPopularTvSeries } = useGet()
  const [popularTvSeries, setPopularTvSeries] = useState({} as PopularType)

  const getData = useCallback(async () => {
    const { data } = await getPopularTvSeries()

    if (data) setPopularTvSeries(data)
  }, [])

  useEffect(() => {
    getData()
  }, [0, getData])

  return (
    <Container>
      {
        popularTvSeries
          ? (
            <>
              <h2><img src={Camera} alt="🎥" draggable="false" /> {title}</h2>
              <Row
                data={popularTvSeries}
                type="tv"
              />
            </>
            )
          : ''
      }
    </Container>
  )
}

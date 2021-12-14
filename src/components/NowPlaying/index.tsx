import React, { useCallback, useEffect, useState } from 'react'
import { useGet } from '../../hooks/useGet'

import type { NowPlayingType } from '../../contexts/get'

import Ticket from '../../assets/ticket.svg'

import { Container } from './styles'
import { Row } from '../Row'

type NowPlayingComponentType = {
  title: string;
  type: 'movie' | 'tv';
}

export const NowPlaying: React.FC<NowPlayingComponentType> = ({
  title,
  type
}: NowPlayingComponentType) => {
  const { getNowPlaying } = useGet()
  const [nowPlaying, setNowPlaying] = useState({} as NowPlayingType)

  const getData = useCallback(async () => {
    const { data } = await getNowPlaying(type)

    if (data) setNowPlaying(data)
  }, [])

  useEffect(() => {
    getData()
  }, [0, getData])

  return (
    <Container>
      {
        nowPlaying
          ? (
            <>
              <h2><img src={Ticket} alt="🎫" draggable="false" /> {title}</h2>
              <Row
                data={nowPlaying}
                type={type}
              />
            </>
            )
          : ''
      }
    </Container>
  )
}

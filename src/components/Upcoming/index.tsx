import React, { useCallback, useEffect, useState } from 'react'
import { useGet } from '../../hooks/useGet'

import { Row } from '../Row'

import type { UpcomingType } from '../../contexts/get'

import Calendar from '../../assets/calendar.svg'

import { Container } from './styles'

export const Upcoming: React.FC = () => {
  const { getUpcoming } = useGet()
  const [upcoming, setUpcoming] = useState({} as UpcomingType)

  const getData = useCallback(async () => {
    const { data } = await getUpcoming()

    if (data) setUpcoming(data)
  }, [])

  useEffect(() => {
    getData()
  }, [0, getData])

  return (
    <Container>
      {
        upcoming
          ? (
            <>
              <h2><img src={Calendar} alt="📅" draggable="false" /> Em breve</h2>
              <Row
                data={upcoming}
                type="movie"
              />
            </>
            )
          : ''
      }
    </Container>
  )
}

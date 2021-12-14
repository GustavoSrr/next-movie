import React, { useCallback, useEffect, useState } from 'react'
import { useGet } from '../../hooks/useGet'

import { Row } from '../Row'

import type { AiringTodayType } from '../../contexts/get'

import AlarmClock from '../../assets/alarmclock.svg'

import { Container } from './styles'

export const AiringToday: React.FC = () => {
  const { getAiringToday } = useGet()
  const [upcoming, setUpcoming] = useState({} as AiringTodayType)

  const getData = useCallback(async () => {
    const { data } = await getAiringToday()

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
              <h2><img src={AlarmClock} alt="⏰" draggable="false" /> Exibidas hoje</h2>
              <Row
                data={upcoming}
                type="tv"
              />
            </>
            )
          : ''
      }
    </Container>
  )
}

import React, { useCallback, useEffect, useState } from 'react'
import { useGet } from '../../hooks/useGet'

import { Header } from '../../components/Header'
import { Row } from '../../components/Row'

import Collision from '../../assets/collision.svg'

import type { TrendingType } from '../../contexts/get'

import { Container, Content, Explore, Trending } from './styles'

export const Home: React.FC = () => {
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
    <>
      <Header />
      <Container>
        <Content>
          <Explore>
            <h1>Explorar</h1>
            <form>
              <input type="text" placeholder="Filmes e séries" />
            </form>
          </Explore>
          <Trending>
            {
              trending
                ? (
                  <>
                    <h2><img src={Collision} alt="💥" draggable="false" /> Bombando</h2>
                    <Row
                      page={trending.page}
                      results={trending.results}
                      total_pages={trending.total_pages}
                      total_results={trending.total_results}
                    />
                  </>
                  )
                : ''
            }
          </Trending>
        </Content>
      </Container>
    </>
  )
}

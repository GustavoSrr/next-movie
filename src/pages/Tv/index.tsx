import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useGet } from '../../hooks/useGet'

import { Header } from '../../components/DesktopHeader'

import type { TvDetailsType } from '../../contexts/get'

import { Container, Content, TvInfo, TitleDiv, RatingDiv, OverviewDiv } from './styles'

export const Tv: React.FC = () => {
  const params = useParams()
  const tvId = params.id

  const navigate = useNavigate()

  const { getTv } = useGet()
  const [tv, setTv] = useState({} as TvDetailsType)

  const getData = useCallback(async () => {
    const { ok, data } = await getTv(tvId)

    if (ok === false) navigate('/')

    if (data) setTv(data)
  }, [])

  useEffect(() => {
    getData()
  }, [0, tvId, getData])

  const genresArray = [] as any

  if (tv.genres) {
    tv.genres.forEach((genre) => genresArray.push(genre.name))
  }

  const tvGenres = genresArray.join(', ')
  const tvFirstAirDate = new Date(tv.first_air_date)

  function hasVoteCount (voteCount: number, voteAverage: number) {
    if (voteCount === 0) return 'NA'
    return voteAverage
  }

  return (
    <>
      <Header />
      <Container>
        {
          tv.backdrop_path
            ? <div id="Cover">
                <img
                  src={'https://www.themoviedb.org/t/p/original' + tv.backdrop_path}
                  alt="Imagem"
                />
              </div>
            : ''
        }
        <Content>
          {
            tv.poster_path
              ? <img
                  src={'https://www.themoviedb.org/t/p/w300_and_h450_bestv2' + tv.poster_path}
                  alt="Imagem"
                />
              : ''
          }
          <TvInfo>
            <div id="TvInfoWrapper">
              <TitleDiv>
                <h1>{tv.name}</h1>
                <p>{tvFirstAirDate.getUTCFullYear()} - {tvGenres} - {tv.number_of_seasons} temporadas</p>
              </TitleDiv>
              <RatingDiv
                id="RatingDiv"
                voteAverage={tv.vote_average}
                voteCount={tv.vote_count}
              >
                <h3>{hasVoteCount(tv.vote_count, tv.vote_average)}</h3>
              </RatingDiv>
            </div>
            {
              tv.overview
                ? <OverviewDiv>
                    <h3>Sinopse:</h3>
                    <p>{tv.overview}</p>
                  </OverviewDiv>
                : ''
            }
          </TvInfo>
        </Content>
      </Container>
    </>
  )
}

import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { TvDetailsType } from '../../contexts/get'
import { useGet } from '../../hooks/useGet'

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

    console.log(data)

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

  let tvRating: number | string = tv.vote_average

  if (tvRating > 7) {
    const ratingDiv = document.getElementById('RatingDiv')
    if (ratingDiv) {
      ratingDiv!.style.backgroundColor = '#45ce6e30'
      ratingDiv!.style.color = '#45ce6e'
      ratingDiv!.style.border = '1px solid #45ce6e30'
    }
  }

  if (tvRating < 7) {
    const ratingDiv = document.getElementById('RatingDiv')
    if (ratingDiv) {
      ratingDiv.style.backgroundColor = '#e6be0e30'
      ratingDiv.style.color = '#e6be0e'
      ratingDiv.style.border = '1px solid #e6be0e30'
    }
  }

  if (tvRating < 5) {
    const ratingDiv = document.getElementById('RatingDiv')
    if (ratingDiv) {
      ratingDiv.style.backgroundColor = '#ee2a2a30'
      ratingDiv.style.color = '#ee2a2a'
      ratingDiv.style.border = '1px solid #ee2a2a30'
    }
  }

  if (tv.vote_count === 0) {
    const ratingDiv = document.getElementById('RatingDiv')
    tvRating = 'NA'
    if (ratingDiv) {
      ratingDiv.style.backgroundColor = '#79797930'
      ratingDiv.style.color = '#797979'
      ratingDiv.style.border = '1px solid #79797930'
    }
  }

  return (
    <Container>
      {
        tv.backdrop_path
          ? <img
              id="Cover"
              src={'https://www.themoviedb.org/t/p/original' + tv.backdrop_path}
              alt="Imagem"
            />
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
            <RatingDiv id="RatingDiv">
              <h3>{tvRating}</h3>
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
  )
}

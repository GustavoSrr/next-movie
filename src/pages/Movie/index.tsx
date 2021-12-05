import React, { useCallback, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useGet } from '../../hooks/useGet'

import type { MovieDetailsType } from '../../contexts/get'

import { Container, Content, MovieInfo, TitleDiv, RatingDiv, OverviewDiv } from './styles'
import { Header } from '../../components/Header'

export const Movie: React.FC = () => {
  const params = useParams()
  const movieId = params.id

  const navigate = useNavigate()

  const { getMovie } = useGet()
  const [movie, setMovie] = useState({} as MovieDetailsType)

  const getData = useCallback(async () => {
    const { ok, data } = await getMovie(movieId)

    if (ok === false) navigate('/')

    console.log(data)

    if (data) setMovie(data)
  }, [])

  useEffect(() => {
    getData()
  }, [0, movieId, getData])

  const genresArray = [] as any

  if (movie.genres) {
    movie.genres.forEach((genre) => genresArray.push(genre.name))
  }

  const movieGenres = genresArray.join(', ')
  const movieReleaseDate = new Date(movie.release_date)

  function convertMinutesTooHours () {
    if (movie.runtime) {
      const minutes = movie.runtime % 60
      const hours = Math.floor(movie.runtime / 60)

      if (hours === 0) {
        return minutes + 'm'
      }

      return hours + 'h' + minutes + 'm'
    }
  }

  function hasVoteCount (voteCount: number, voteAverage: number) {
    if (voteCount === 0) return 'NA'
    return voteAverage
  }

  return (
    <>
      <Header />
      <Container>
        {
          movie.backdrop_path
            ? (
              <div id="Cover">
                <img
                  src={'https://www.themoviedb.org/t/p/original' + movie.backdrop_path}
                  alt="Imagem"
                />
              </div>
              )
            : ''
        }
        <Content>
          {
            movie.poster_path
              ? <img
                  src={'https://www.themoviedb.org/t/p/w300_and_h450_bestv2' + movie.poster_path}
                  alt="Imagem"
                />
              : ''
          }
          <MovieInfo>
            <div id="MovieInfoWrapper">
              <TitleDiv>
                <h1>{movie.title}</h1>
                <p>{movieReleaseDate.getUTCFullYear()} - {movieGenres} - {convertMinutesTooHours()}</p>
              </TitleDiv>
              <RatingDiv
                voteAverage={movie.vote_average}
                voteCount={movie.vote_count}
              >
                <h3>{hasVoteCount(movie.vote_count, movie.vote_average)}</h3>
              </RatingDiv>
            </div>
            {
              movie.overview
                ? <OverviewDiv>
                    <h3>Sinopse:</h3>
                    <p>{movie.overview}</p>
                  </OverviewDiv>
                : ''
            }
          </MovieInfo>
        </Content>
      </Container>
    </>
  )
}

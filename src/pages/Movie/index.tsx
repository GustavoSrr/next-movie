import React, { useCallback, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useGet } from '../../hooks/useGet'

import type { MovieDetailsType } from '../../contexts/get'

import { Container, Content, MovieInfo, TitleDiv, RatingDiv, OverviewDiv } from './styles'

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

  let movieRating: number | string = movie.vote_average

  if (movieRating > 7) {
    const ratingDiv = document.getElementById('RatingDiv')
    if (ratingDiv) {
      ratingDiv!.style.backgroundColor = '#45ce6e30'
      ratingDiv!.style.color = '#45ce6e'
      ratingDiv!.style.border = '1px solid #45ce6e30'
    }
  }

  if (movieRating < 7) {
    const ratingDiv = document.getElementById('RatingDiv')
    if (ratingDiv) {
      ratingDiv.style.backgroundColor = '#e6be0e30'
      ratingDiv.style.color = '#e6be0e'
      ratingDiv.style.border = '1px solid #e6be0e30'
    }
  }

  if (movieRating < 5) {
    const ratingDiv = document.getElementById('RatingDiv')
    if (ratingDiv) {
      ratingDiv.style.backgroundColor = '#ee2a2a30'
      ratingDiv.style.color = '#ee2a2a'
      ratingDiv.style.border = '1px solid #ee2a2a30'
    }
  }

  if (movie.vote_count === 0) {
    const ratingDiv = document.getElementById('RatingDiv')
    movieRating = 'NA'
    if (ratingDiv) {
      ratingDiv.style.backgroundColor = '#79797930'
      ratingDiv.style.color = '#797979'
      ratingDiv.style.border = '1px solid #79797930'
    }
  }

  return (
    <Container>
      {
        movie.backdrop_path
          ? <img
              id="Cover"
              src={'https://www.themoviedb.org/t/p/original' + movie.backdrop_path}
              alt="Imagem"
            />
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
            <RatingDiv id="RatingDiv">
              <h3>{movieRating}</h3>
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
  )
}

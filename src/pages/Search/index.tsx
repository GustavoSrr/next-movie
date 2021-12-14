import React, { useCallback, useEffect, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { useSearch } from '../../hooks/useSearch'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

import type { PopularType } from '../../contexts/get'

import { Container, Content, MovieInfo, RatingDiv } from './styles'

export const Search: React.FC = () => {
  const [searchParams] = useSearchParams()
  const q = searchParams.get('q')

  const { search } = useSearch()
  const [searchData, setSearchData] = useState({} as PopularType)

  const getData = useCallback(async () => {
    if (q) {
      const { ok, data } = await search(q)

      if (ok === false) console.log('error')

      if (data) setSearchData(data)
      console.log(data)
    }
  }, [0, q, searchParams])

  useEffect(() => {
    getData()
  }, [0, q, searchParams])

  const { results } = searchData

  return (
    <>
      <Header />
      <Container>
        <Content>
          { results
            ? results.filter(movie => movie.media_type !== 'person').map((movie) => {
              return (
                <Link
                  to={`/${movie.media_type}/${movie.id}`}
                  key={movie.id}
                  id="MovieRectangle"
                >
                  <img
                    src={movie.poster_path ? `https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}` : 'http://localhost:3000/src/assets/defaultPoster.jpg'}
                    alt="Poster"
                  />
                  <MovieInfo>
                    <h3 id="MovieTitle">{movie.title || movie.name}</h3>
                    <RatingDiv
                      voteCount={movie.vote_count}
                      voteAverage={movie.vote_average}
                    >
                      <h3>{movie.vote_average}</h3>
                    </RatingDiv>
                    {
                      movie.overview
                        ? <p>{movie.overview}</p>
                        : ''
                    }
                  </MovieInfo>
                </Link>
              )
            })
            : ''}

        </Content>
      </Container>
      <Footer />
    </>
  )
}

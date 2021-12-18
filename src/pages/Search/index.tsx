import React, { useCallback, useEffect, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { useSearch } from '../../hooks/useSearch'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

import Popcorn from '../../assets/popcorn.svg'
import Camera from '../../assets/camera.svg'
import Monocle from '../../assets/monocle.svg'

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

  // eslint-disable-next-line camelcase
  const { results, total_results } = searchData

  return (
    <>
      <Header fixed />
      <Container>
        <Content>
          { results
            ? results.filter(movie => movie.media_type !== 'person' && movie.media_type !== 'tv').length > 0
              ? <h1><img src={Popcorn} alt="🍿" draggable="false" /> Filmes</h1>
              : ''
            : ''}
          { results
            ? results.filter(movie => movie.media_type !== 'person' && movie.media_type !== 'tv').map((movie) => {
              return (
                <Link
                  to={`/${movie.media_type}/${movie.id}`}
                  id="MovieRectangle"
                  key={movie.id}
                >
                  <img
                    src={movie.poster_path ? `https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}` : 'http://localhost:3000/public/assets/defaultPoster.jpg'}
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
            { results
              ? results.filter(movie => movie.media_type !== 'person' && movie.media_type !== 'movie').length > 0
                ? <h1><img src={Camera} alt="🎥" draggable="false" /> Séries</h1>
                : ''
              : ''}
            { results
              ? results.filter(movie => movie.media_type !== 'person' && movie.media_type !== 'movie').map((tv) => {
                return (
                  <Link
                    to={`/${tv.media_type}/${tv.id}`}
                    id="MovieRectangle"
                    key={tv.id}
                  >
                    <img
                      src={tv.poster_path ? `https://www.themoviedb.org/t/p/w220_and_h330_face${tv.poster_path}` : 'http://localhost:3000/public/assets/defaultPoster.jpg'}
                      alt="Poster"
                    />
                    <MovieInfo>
                      <h3 id="MovieTitle">{tv.title || tv.name}</h3>
                      <RatingDiv
                        voteCount={tv.vote_count}
                        voteAverage={tv.vote_average}
                      >
                        <h3>{tv.vote_average}</h3>
                      </RatingDiv>
                      {
                        tv.overview
                          ? <p>{tv.overview}</p>
                          : ''
                      }
                    </MovieInfo>
                  </Link>
                )
              })
              : ''}
            {
            // eslint-disable-next-line camelcase
            total_results === 0
              ? (
                <>
                  <img id="NoResultsImg" src={Monocle} alt="🧐" draggable={false} />
                  <h1 style={{ textAlign: 'center' }}>Nenhum resultado encontrado.</h1>
                </>
                )
              : ''}
        </Content>
      </Container>
      <Footer />
    </>
  )
}

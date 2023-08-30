import React from 'react'
import { Link } from 'react-router-dom'

import type { TrendingType, PopularType, NowPlayingType, AiringTodayType } from '../../contexts/get'

import defaultPoster from '../../assets/defaultPoster.jpg'

import { Container, MovieCard, RatingDiv } from './styles'

type RowProps = {
  data: TrendingType | PopularType | NowPlayingType | AiringTodayType;
  type: 'trending' | 'movie' | 'tv';
}

export const Row: React.FC<RowProps> = ({ data, type }: RowProps) => {
  function hasVoteCount (voteCount: number, voteAverage: number) {
    if (voteCount === 0) return 'NA'
    return voteAverage.toFixed(1)
  }

  const { results } = data

  return (
    <Container>
      {
      results
        ? results.filter(movie => movie.media_type !== 'person').map((movie) => {
          return (
            <MovieCard key={movie.id}>
              <div>
                <Link to={`/${movie.media_type ? movie.media_type : type}/${movie.id}`}>
                  <div id="PosterDiv">
                    <img
                      src={movie.poster_path ? `https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}` : defaultPoster}
                      alt="Poster"
                    />
                  </div>
                </Link>
                <RatingDiv
                  id="RatingDiv"
                  voteAverage={movie.vote_average}
                  voteCount={movie.vote_count}
                >
                <h3>{hasVoteCount(movie.vote_count, movie.vote_average)}</h3>
                </RatingDiv>
              </div>
              <Link to={`/${movie.media_type ? movie.media_type : type}/${movie.id}`} style={{ textDecoration: 'none' }}>
                <h3 id="MovieTitle">{movie.name || movie.title}</h3>
              </Link>
            </MovieCard>
          )
        })
        : ''
      }
    </Container>
  )
}

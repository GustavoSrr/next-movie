import React from 'react'
import { Link } from 'react-router-dom'

import type { TrendingType } from '../../contexts/get'

import { Container, MovieCard, RatingDiv } from './styles'

export const Row: React.FC<TrendingType> = ({ results }: TrendingType) => {
  function hasVoteCount (voteCount: number, voteAverage: number) {
    if (voteCount === 0) return 'NA'
    return voteAverage
  }

  return (
    <Container>
      {
      results
        ? results.map((trending) => {
          return (
            <MovieCard key={trending.id}>
              {
                trending.poster_path
                  ? <div>
                      <Link to={`/${trending.media_type}/${trending.id}`}>
                        <div id="PosterDiv">
                          <img
                            src={'https://www.themoviedb.org/t/p/w220_and_h330_face' + trending.poster_path}
                            alt="Poster"
                          />
                        </div>
                      </Link>
                      <RatingDiv
                        id="RatingDiv"
                        voteAverage={trending.vote_average}
                        voteCount={trending.vote_count}
                      >
                      <h3>{hasVoteCount(trending.vote_count, trending.vote_average)}</h3>
                      </RatingDiv>
                    </div>
                  : ''
              }
              <Link to={`/${trending.media_type}/${trending.id}`} style={{ textDecoration: 'none' }}>
                <h3 id="MovieTitle">{trending.name || trending.title}</h3>
              </Link>
            </MovieCard>
          )
        })
        : ''
      }
    </Container>
  )
}

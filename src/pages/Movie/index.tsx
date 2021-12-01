import React from 'react'
import { useParams } from 'react-router-dom'

export const Movie: React.FC = () => {
  const params = useParams()
  const movieId = params.id

  return (
    <h1>{movieId}</h1>
  )
}

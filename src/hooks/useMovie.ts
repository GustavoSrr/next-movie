import { useContext } from 'react'
import { movieContext } from '../contexts/movie'

export function useMovie () {
  const value = useContext(movieContext)
  return value
}

import { useContext } from 'react'
import { getContext } from '../contexts/movie'

export function useGet () {
  const value = useContext(getContext)
  return value
}

import { useContext } from 'react'
import { searchContext } from '../contexts/search'

export function useSearch () {
  const value = useContext(searchContext)
  return value
}

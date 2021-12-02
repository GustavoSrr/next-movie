import { useContext } from 'react'
import { getContext } from '../contexts/get'

export function useGet () {
  const value = useContext(getContext)
  return value
}

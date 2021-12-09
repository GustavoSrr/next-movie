import axios from 'axios'
import React, { createContext, ReactNode, useState } from 'react'

import type { PopularType } from './get'

type SearchContextType = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  search: (query: string) => Promise<{ ok: boolean; data: any; } | { ok: boolean; data?: undefined; }>
};

type SearchContextProviderProps = {
  children: ReactNode;
};

export const searchContext = createContext({} as SearchContextType)

export function SearchContextProvider (props: SearchContextProviderProps) {
  const [query, setQuery] = useState('')

  async function search (searchQuery: string) {
    const apiKey = import.meta.env.VITE_MOVIE_API
    const url = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=pt-BR&query=${searchQuery}`

    try {
      const { data } = await axios.get<PopularType>(url)

      return {
        ok: true,
        data
      }
    } catch (e) {
      return {
        ok: false
      }
    }
  }

  return (
    <searchContext.Provider value={{ query, setQuery, search }}>
      {props.children}
    </searchContext.Provider>
  )
}

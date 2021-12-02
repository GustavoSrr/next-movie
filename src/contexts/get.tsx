/* eslint-disable camelcase */
import React, { createContext, ReactNode } from 'react'

import axios from 'axios'

type Int = number & { __int__: void };

export type MovieType = {
  page: Int;
  results: [
    poster_path: string | null,
    adult: boolean,
    overview: string,
    release_date: string,
    genre_ids: any,
    id: Int,
    original_title: string,
    original_language: string,
    title: string,
    backdrop_path: string | null,
    popularity: number,
    vote_count: Int,
    video: boolean,
    vote_average: number
  ];
  total_results: Int;
  total_pages: Int;
}

export type MovieDetailsType = {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: null | object;
  budget: Int;
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  homepage: string | null;
  id: Int;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: any;
  production_countries: any;
  release_date: string;
  revenue: Int;
  runtime: Int | null;
  title: string;
  video: boolean;
  vote_count: Int;
  vote_average: number;
  success?: boolean;
}

type GetContextType = {
  getMovie: (id: string | undefined) => Promise<{ ok: boolean; data: MovieDetailsType; } | { ok: boolean; data?: undefined; }>;
};

type GetContextProviderProps = {
  children: ReactNode;
};

export const getContext = createContext({} as GetContextType)

export function GetContextProvider (props: GetContextProviderProps) {
  async function getMovie (id: string | undefined) {
    const movieApi = import.meta.env.VITE_MOVIE_API
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${movieApi}&language=pt-BR`

    try {
      const { data } = await axios.get<MovieDetailsType>(url)

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
    <getContext.Provider value={{ getMovie }}>
      {props.children}
    </getContext.Provider>
  )
}

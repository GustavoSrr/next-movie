/* eslint-disable camelcase */
import React, { createContext, ReactNode } from 'react'

import axios from 'axios'

type Int = number & { __int__: void };

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
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: [
    {
      name: string;
      id: Int;
      logo_path: string | null;
      origin_country: string;
    }
  ];
  production_countries: [
    {
      name: string;
    }
  ];
  release_date: string;
  revenue: Int;
  runtime: Int | null;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_count: Int;
  vote_average: number;
}

export type TvDetailsType = {
  backdrop_path: string | null;
  created_by: [
    {
      id: Int;
      credit_id: string;
      name: string;
      gender: Int;
      profile_path: string | null;
    }
  ];
  episode_run_time: [Int];
  first_air_date: string;
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  homepage: string;
  id: Int;
  in_production: boolean;
  languages: [string];
  last_air_date: string;
  last_episode_to_air: {
    air_date: string;
    episode_number: Int;
    id: Int;
    name: string;
    overview: string;
    production_code: string;
    season_number: Int;
    still_path: string | null;
    vote_average: number;
    vote_count: Int;
  };
  name: string;
  networks: [
    {
      name: string;
      id: Int;
      logo_path: string | null;
      origin_country: string;
    }
  ];
  number_of_episodes: Int;
  number_of_seasons: Int;
  origin_country: [string];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: [
    {
      id: Int;
      logo_path: string | null;
      name: string;
      origin_country: string;
    }
  ];
  production_countries: [
    {
      name: string;
    }
  ];
  seasons: [
    {
      air_date: string;
      episode_count: Int;
      id: Int;
      name: string;
      overview: string;
      poster_path: string;
      season_number: Int;
    }
  ];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: Int;
}

type GetContextType = {
  getMovie: (id: string | undefined) => Promise<{ ok: boolean; data: MovieDetailsType; } | { ok: boolean; data?: undefined; }>;
  getTv: (id: string | undefined) => Promise<{ ok: boolean; data: TvDetailsType; } | { ok: boolean; data?: undefined; }>;
};

type GetContextProviderProps = {
  children: ReactNode;
};

export const getContext = createContext({} as GetContextType)

export function GetContextProvider (props: GetContextProviderProps) {
  async function getMovie (id: string | undefined) {
    const apiKey = import.meta.env.VITE_MOVIE_API
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=pt-BR`

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

  async function getTv (id: string | undefined) {
    const apiKey = import.meta.env.VITE_MOVIE_API
    const url = `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=pt-BR`

    try {
      const { data } = await axios.get<TvDetailsType>(url)

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
    <getContext.Provider value={{ getMovie, getTv }}>
      {props.children}
    </getContext.Provider>
  )
}

import React, { createContext, ReactNode } from 'react'

type Int = number & { __int__: void };

type Movie = {
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
  // eslint-disable-next-line camelcase
  total_results: Int;
  // eslint-disable-next-line camelcase
  total_pages: Int;
} | {
  // eslint-disable-next-line camelcase
  status_message: string;
  // eslint-disable-next-line camelcase
  status_code: number;
}

type MovieContextType = {
  movie: Movie;
};

type MovieContextProviderProps = {
  children: ReactNode;
};

export const movieContext = createContext({} as MovieContextType)

export function MovieContextProvider (props: MovieContextProviderProps) {
  const movie = {
    status_message: 'testando',
    status_code: 200
  }
  return (
    <movieContext.Provider value={{ movie }}>
      {props.children}
    </movieContext.Provider>
  )
}

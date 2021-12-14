import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home'
import { MovieHome } from '../pages/MovieHome'
import { TvHome } from '../pages/TvHome'
import { Movie } from '../pages/Movie'
import { Tv } from '../pages/Tv'
import { Search } from '../pages/Search'

import { Global } from '../styles/global'

export function AppRoutes () {
  return (
    <BrowserRouter>
      <Global />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<MovieHome />} />
        <Route path="/tv" element={<TvHome />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/tv/:id" element={<Tv />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  )
}

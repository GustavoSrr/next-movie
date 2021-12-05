import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Movie } from '../pages/Movie'
import { Tv } from '../pages/Tv'

import { Global } from '../styles/global'

export function AppRoutes () {
  return (
    <BrowserRouter>
      <Global />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/tv/:id" element={<Tv />} />
      </Routes>
    </BrowserRouter>
  )
}

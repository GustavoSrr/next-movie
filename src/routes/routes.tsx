import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Movie } from '../pages/Movie'

import { Global } from '../styles/global'

export function AppRoutes () {
  return (
    <BrowserRouter>
      <Global />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  )
}

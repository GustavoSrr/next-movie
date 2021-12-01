import React from 'react'
import { MovieContextProvider } from './contexts/movie'

import { AppRoutes } from './routes/routes'

export const App: React.FC = () => {
  return (
    <MovieContextProvider>
      <AppRoutes />
    </MovieContextProvider>
  )
}

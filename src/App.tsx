import React from 'react'
import { GetContextProvider } from './contexts/get'
import { SearchContextProvider } from './contexts/search'

import { AppRoutes } from './routes/routes'

export const App: React.FC = () => {
  return (
    <GetContextProvider>
      <SearchContextProvider>
        <AppRoutes />
      </SearchContextProvider>
    </GetContextProvider>
  )
}

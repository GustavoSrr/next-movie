import React from 'react'
import { GetContextProvider } from './contexts/get'

import { AppRoutes } from './routes/routes'

export const App: React.FC = () => {
  return (
    <GetContextProvider>
      <AppRoutes />
    </GetContextProvider>
  )
}

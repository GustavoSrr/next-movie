import React, { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSearch } from '../../hooks/useSearch'

import { Container } from './styles'

export const Explore: React.FC = () => {
  const [inputValue, setInputValue] = useState('')
  const { setQuery } = useSearch()
  const navigate = useNavigate()

  function handleOnSubmit (event: FormEvent) {
    event.preventDefault()

    if (!inputValue) return

    setQuery(inputValue)

    navigate({
      pathname: '/search',
      search: `?q=${inputValue}`
    })
  }

  return (
    <Container>
      <h1>Explorar</h1>
      <form onSubmit={handleOnSubmit}>
          <input
            type="text"
            placeholder="Filmes e séries"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
        </form>
    </Container>
  )
}

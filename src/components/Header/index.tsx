import React, { FormEvent, useState } from 'react'
import { useSearch } from '../../hooks/useSearch'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

import Icon from '../../assets/icon.svg'

import { Container, Content } from './styles'

export const Header: React.FC = () => {
  const [inputValue, setInputValue] = useState('')
  const { setQuery } = useSearch()
  const navigate = useNavigate()

  function handleOnSubmit (event: FormEvent) {
    event.preventDefault()

    if (!inputValue) return
    setQuery(inputValue)
    navigate('/search')
  }

  return (
    <Container>
      <Content>
        <div>
          <Link to="/">
            <img src={Icon} alt="🎬" draggable="false" />
          </Link>
          <ul>
            <li>
              <Link to="/">Filmes</Link>
            </li>
            <li>
              <Link to="/">Séries</Link>
            </li>
          </ul>
        </div>
        <form onSubmit={handleOnSubmit}>
          <input
            type="text"
            placeholder="Pesquisar"
            onChange={(event) => setInputValue(event.target.value)}
          />
        </form>
      </Content>
    </Container>
  )
}

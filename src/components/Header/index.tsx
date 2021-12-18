import React, { FormEvent } from 'react'
import { useSearch } from '../../hooks/useSearch'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

import { slide as Menu } from 'react-burger-menu'

import { FaBars, FaTimes } from 'react-icons/fa'
import Icon from '../../assets/icon.svg'

import { Container, Desktop, Mobile } from './styles'

export const Header: React.FC = () => {
  const { query, setQuery } = useSearch()
  const navigate = useNavigate()

  function handleOnSubmit (event: FormEvent) {
    event.preventDefault()

    if (!query) return

    navigate({
      pathname: '/search',
      search: `?q=${query}`
    })
  }

  return (
    <Container>
      <Desktop>
        <div>
          <Link to="/">
            <img src={Icon} alt="🎬" draggable="false" />
          </Link>
          <ul>
            <li>
              <Link to="/movie">Filmes</Link>
            </li>
            <li>
              <Link to="/tv">Séries</Link>
            </li>
          </ul>
        </div>
        <form onSubmit={handleOnSubmit}>
          <input
            type="text"
            placeholder="Pesquisar"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </form>
      </Desktop>
      <Mobile>
        <Menu
          customBurgerIcon={<FaBars size="20" />}
          customCrossIcon={<FaTimes size="20" />}
          styles={{
            bmOverlay: {
              background: 'rgba(24, 24, 24, 0.8)',
              transition: '.2s opacity'
            },
            bmMenuWrap: {
              transition: '.4s'
            },
            bmCrossButton: {
              top: '0',
              right: '0'
            }
          }}
        >
          <Link className="menu-item" to="/">Home</Link>
          <Link className="menu-item" to="/movie">Filmes</Link>
          <Link className="menu-item" to="/tv">Séries</Link>
        </Menu>
        <Link to="/">
          <img src={Icon} alt="🎬" draggable="false" />
        </Link>
        <p>a</p>
      </Mobile>
    </Container>
  )
}

import React, { FormEvent, useState } from 'react'
import { useSearch } from '../../hooks/useSearch'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

import { slide as Menu } from 'react-burger-menu'

import { FaBars, FaSearch, FaTimes } from 'react-icons/fa'
import Icon from '../../assets/icon.svg'

import { Container, Desktop, Mobile, SearchDiv } from './styles'

type HeaderProps = {
  fixed?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  fixed = false
}: HeaderProps) => {
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

  const [isEnabled, setIsEnabled] = useState(false)

  return (
    <Container style={{ position: `${fixed ? 'sticky' : 'relative'}` }}>
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
        <SearchDiv>
          { isEnabled
            ? <FaTimes size="20" onClick={() => setIsEnabled(isEnabled !== true)} />
            : <FaSearch size="20" onClick={() => setIsEnabled(true)} />}
          <form
            onSubmit={handleOnSubmit}
            style={{
              display: `${isEnabled ? 'flex' : 'none'}`
            }}
          >
            <input
              type="text"
              placeholder="Pesquisar"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </form>
        </SearchDiv>
      </Mobile>
    </Container>
  )
}

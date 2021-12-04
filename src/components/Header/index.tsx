import React from 'react'
import { Link } from 'react-router-dom'

import Icon from '../../assets/icon.svg'

import { Container, Content } from './styles'

export const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <div>
          <Link to="/">
            <img src={Icon} alt="Movies Icon" draggable="false" />
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
        <form>
          <input type="text" placeholder="Pesquisar" />
        </form>
      </Content>
    </Container>
  )
}

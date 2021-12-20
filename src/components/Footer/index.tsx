import React from 'react'
import { Link } from 'react-router-dom'

import Icon from '../../assets/icon.svg'

import { Container } from './styles'

export const Footer: React.FC = () => {
  return (
    <Container>
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
        <li>
          <a href="https://github.com/GustavoSrr/find-movies">GitHub</a>
        </li>
      </ul>
      <p>Este produto usa a <a href="https://developers.themoviedb.org/3">API TMDB</a>, mas não é endossado ou certificado por <a href="https://www.themoviedb.org/">TMDB</a>.</p>
    </Container>
  )
}

<h1 align="center">🎬 Next Movie</h1>

<img align="center" src="https://the-next-movie.vercel.app/cover.png"/>

> Um projeto para conferir as notas dos filmes, pesquisar e encontrar o próximo filme para assistir.

## 📃 Conteúdo
  1. [Tecnologias](#-tecnologias)
  2. [Ideia](#-ideia)
  3. [Como funciona](#-como-funciona)
  4. [Veja o projeto](#-teste-o-projeto)
  5. [Instalação](#-instalação)

## 📡 Tecnologias

  - [React](https://reactjs.org/)
  - [Vite](https://vitejs.dev/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Styles Components](https://styled-components.com/)
  - [Axios](https://axios-http.com/)
  - [React Router Dom](https://reactrouter.com/)

## 💡 Ideia

  Ideia tirada do repositório [app-ideas](https://github.com/florinpop17/app-ideas).

## 🤔 Como funciona?

  - Na home, com um useEffect, um get do Axios é executado para buscar os principais filmes.
  - Na busca de filmes e séries, a string digitada no input é salva em um useState e requisitada via API com Axios.

## 🚀 Teste o projeto

  O projeto está hospedado na [Vercel](https://vercel.com), clique [aqui](https://the-next-movie.vercel.app) para visitar.

## ⬇ Instalação

  ```bash
  # Clone este repositório
  git clone git@github.com:GustavoSrr/next-movie.git
  # Entre na pasta gerada
  cd next-movie
  # Baixe as dependências
  npm i
  # ou
  yarn
  # Inicie o projeto
  npm start
  # ou
  yarn dev
```

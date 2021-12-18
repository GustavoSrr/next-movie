import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Content = styled.div`
  width: 100%;
  max-width: 1220px;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  gap: 30px;

  background-color: var(--backgroundColor);

  img {
    width: 80px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
      margin: 20px;
      color: var(--titleColor);
    }

    #HomeLink {
      color: var(--textColor);
      text-decoration: none;
      transition: .2s;

      &:hover {
        color: var(--titleColor)
      }
    }
  }
`

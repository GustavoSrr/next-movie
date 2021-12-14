import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-top: 80px;
  margin-bottom: 80px;
`

export const Content = styled.div`
  width: 100%;
  max-width: 1220px;
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  gap: 80px;

  background-color: var(--backgroundColor);

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    color: var(--titleColor);

    img {
      width: 35px;
    }
  }
`

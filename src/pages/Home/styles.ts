import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-top: 80px;
`

export const Content = styled.div`
  width: 100%;
  max-width: 1220px;
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  gap: 80px;

  background-color: var(--backgroundColor);
`

export const Explore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 20px;

  h1 {
    color: var(--titleColor);
  }

  form {
    height: 40px;
    width: 450px;

    input {
      height: 100%;
      width: 100%;

      padding: 0 15px 0 15px;

      border: 1px solid transparent;
      outline: 0;
      border-radius: 5px;
      color: var(--titleColor);
      background-color: var(--complementaryColor);
      transition: .2s;

      &:focus {
        border-color: var(--primaryColor);
        background-color: var(--backgroundColor);
      }
    }
  }
`

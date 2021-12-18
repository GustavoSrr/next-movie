import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 20px;
  margin-left: 20px;
  margin-right: 20px;

  h1 {
    color: var(--titleColor);
  }

  form {
    height: 40px;
    width: 450px;
    max-width: 100%;

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

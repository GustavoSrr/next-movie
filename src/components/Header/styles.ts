import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px;

  background-color: var(--darkerColor);
`

export const Content = styled.div`
  width: 100%;
  max-width: 1220px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 25px;
    color: var(--titleColor);
  }

  form {
    height: 25px;
    width: 250px;

    input {
      height: 100%;
      width: 100%;

      padding: 0 15px 0 15px;

      border-radius: 3px;
      border: 0;
      outline: 0;
    }
  }
`

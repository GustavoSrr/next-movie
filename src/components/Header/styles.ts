import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 80px;
  padding: 20px;

  background-color: var(--complementaryColor);
`

export const Content = styled.div`
  width: 100%;
  max-width: 1220px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 40px;
    width: auto;
  }

  form {
    height: 40px;
    width: 350px;

    input {
      height: 100%;
      width: 100%;

      padding: 0 15px 0 15px;

      border: 1px solid transparent;
      outline: 0;
      border-radius: 5px;
      color: var(--titleColor);
      background-color: var(--backgroundColor);
      transition: .2s;

      &:focus {
        border-color: var(--primaryColor);
        background-color: var(--complementaryColor);
      }
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 50px;

    ul {
      display: flex;

      gap: 35px;

      list-style: none;
      font-size: 18px;

      li a {
        color: var(--textColor);
        text-decoration: none;
        transition: .2s;

        &:hover {
          color: var(--titleColor);
        }
      }
    }
  }
`

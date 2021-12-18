import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  top: 0;
  left: 0;

  padding: 20px;

  background-color: var(--complementaryColor);
  z-index: 10;
`

export const Desktop = styled.div`
  width: 100%;
  max-width: 1220px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 40px;
    width: auto;

    transition: .2s;

    &:hover {
      filter: brightness(0.9)
    }
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

  @media only screen and (max-width: 1019px) {
    display: none;
  }
`

export const Mobile = styled.div`
  width: 100%;
  max-width: 1220px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 30px;
    width: auto;

    transition: .2s;

    &:hover {
      filter: brightness(0.9)
    }
  }

  .bm-overlay {
    width: 100%;
    height: 100%;

    top: 0;
    left: 0;
  }

  .bm-menu-wrap {
    height: 100vh;
    position: fixed;

    top: 0;
    left: 0;
  }

  .bm-menu {
    background: var(--complementaryColor);
  }

  .bm-burger-button {
    position: relative;
  }

  .bm-cross-button {
    margin: 20px;
  }

  .bm-item-list {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 30px;
  }

  .menu-item {
    font-size: 18px;
    color: var(--textColor);
    text-decoration: none;
    transition: .2s;

    &:hover {
      color: var(--titleColor);
    }
  }

  @media only screen and (min-width: 1020px) {
    display: none;
  }
`

export const SearchDiv = styled.div`
  svg {
    cursor: pointer;
  }

  form {
    height: 40px;
    width: 100%;

    position: absolute;

    margin-top: 20px;

    right: 0;
    left: 0;

    input {
      height: 100%;
      width: 100%;

      margin: 20px;
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
`

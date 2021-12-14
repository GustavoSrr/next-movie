import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 30px;
  padding: 30px;

  background-color: var(--complementaryColor);

  img {
    height: 40px;
    width: auto;
  }

  ul {
      display: flex;

      gap: 30px;

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
`

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 30px;

  h2 {
    display: flex;
    align-items: center;
    gap: 8px;

    margin-left: 20px;

    color: var(--titleColor);

    img {
      width: 30px;

      @media only screen and (max-width: 1020px) {
        width: 24px;
      }
    }
  }
`

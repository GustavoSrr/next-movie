import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: black;

  #Cover {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    object-fit: cover;
    filter: opacity(0.15);
  }
`

export const Content = styled.div`
  display: flex;

  gap: 30px;

  margin: 20px;
  padding: 20px;

  border-radius: 6px;
  z-index: 2;

  img {
    border-radius: 5px;
  }

  @media only screen and (max-width: 800px) {
    flex-direction: column;

    img {
      max-width: 150px;
    }
  }

  @media only screen and (max-width: 450px) {
    img {
      max-width: 100px;
    }
  }
`

export const MovieInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  gap: 20px;

  max-width: 800px;

  #MovieInfoWrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    gap: 20px;
  }
`

export const TitleDiv = styled.div`
  h1 {
    font-size: 30px;
    color: var(--lightTitleColor);
  }

  p {
    color: var(--lightTextColor);
  }

  @media only screen and (max-width: 800px) {
    h1 {
      font-size: 25px;
    }

    p {
      font-size: 15px;
    }
  }

  @media only screen and (max-width: 450px) {
    h1 {
      font-size: 20px;
    }

    p {
      font-size: 13px;
    }
  }
`

export const RatingDiv = styled.div`
  width: 45px;
  height: 45px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px;

  border-radius: 50%;

  transition: .2s;

  @media only screen and (max-width: 800px) {
    width: 40px;
    height: 40px;

    h3 {
      font-size: 15px;
    }
  }

  @media only screen and (max-width: 450px) {
    width: 35px;
    height: 35px;

    h3 {
      font-size: 13px;
    }
  }
`

export const OverviewDiv = styled.div`
  h3 {
    color: var(--lightTitleColor);
    margin-bottom: 5px;
  }

  p {
    color: var(--lightTextColor);
    line-height: 20px;
  }

  @media only screen and (max-width: 800px) {
    h3 {
      font-size: 18px;
    }

    p {
      font-size: 15px;
      line-height: 15px;
    }
  }

  @media only screen and (max-width: 450px) {
    p {
      font-size: 13px;
      line-height: normal;
    }
  }
`

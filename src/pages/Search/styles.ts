import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 80px;
  margin-bottom: 80px;

  background-color: var(--backgroundColor);
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1220px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 40px;

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 8px;
    margin-top: 20px;
    margin-bottom: 20px;

    color: var(--titleColor);

    img {
      height: 35px;
    }

    &:first-child {
      margin-top: 0;
    }
  }

  .MovieContent {
    width: 100%;
  }

  #MovieRectangle {
    width: 100%;

    display: flex;
    align-items: center;

    gap: 35px;
    padding: 20px;

    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 5px;
    background-color: var(--complementaryColor);
    transition: .2s;
    cursor: pointer;

    img {
      max-width: 140px;

      border-radius: 5px;
    }

    &:hover {
      border-color: var(--primaryColor);
      background-color: transparent;

      #MovieTitle {
        color: var(--titleColor);
      }
    }
  }
`

export const MovieInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  gap: 20px;

  #MovieTitle {
    font-size: 18px;
    font-weight: 500;
    color: var(--textColor);
    transition: .2s;
    cursor: pointer;
  }

  p {
    font-size: 15px;
    color: var(--textColor);
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    max-width: 100%;
  }
`

function ratingTransparentColor (voteAverage: number | string, voteCount: number) {
  if (voteCount === 0) {
    return 'var(--grayColorTransparent)'
  }
  if (voteAverage <= 5) {
    return 'var(--redColorTransparent)'
  }
  if (voteAverage < 7) {
    return 'var(--yellowColorTransparent)'
  }
  if (voteAverage >= 7) {
    return 'var(--greenColorTransparent)'
  }
}

function ratingColor (voteAverage: number | string, voteCount: number) {
  if (voteCount === 0) {
    return 'var(--grayColor)'
  }
  if (voteAverage <= 5) {
    return 'var(--redColor)'
  }
  if (voteAverage < 7) {
    return 'var(--yellowColor)'
  }
  if (voteAverage >= 7) {
    return 'var(--greenColor)'
  }
}

export const RatingDiv = styled.div<{ voteAverage: number, voteCount: number }>`
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px;

  border-radius: 50%;
  border: 1px solid ${props => ratingTransparentColor(props.voteAverage, props.voteCount)};
  background-color: ${props => ratingTransparentColor(props.voteAverage, props.voteCount)};
  color: ${props => ratingColor(props.voteAverage, props.voteCount)};
  transition: .2s;

  z-index: 1;

  h3 {
    font-size: 15px;
  }

  @media only screen and (max-width: 800px) {
    width: 35px;
    height: 35px;

    h3 {
      font-size: 13px;
    }
  }
`

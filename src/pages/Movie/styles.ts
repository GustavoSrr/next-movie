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
    color: var(--title);
  }

  p {
    color: var(--textColor);
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
  width: 45px;
  height: 45px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px;

  border-radius: 50%;
  border: 1px solid ${props => ratingTransparentColor(props.voteAverage, props.voteCount)};
  background-color: ${props => ratingTransparentColor(props.voteAverage, props.voteCount)};
  color: ${props => ratingColor(props.voteAverage, props.voteCount)};
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
    color: var(--titleColor);
    margin-bottom: 5px;
  }

  p {
    color: var(--textColor);
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

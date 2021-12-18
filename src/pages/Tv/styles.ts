import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: var(--backgroundColor);

  #Cover {
    width: 100%;
    height: 100%;

    img {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      object-fit: cover;
      object-position: top;
      filter: opacity(0.3);
    }

    &::after {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 1px;
      z-index: 2;
      display: block;
      content: '';
      background-image: linear-gradient(to bottom, transparent 20%, var(--backgroundColor) 60%);
    }
  }
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1220px;

  display: flex;

  gap: 30px;

  margin: 20px;
  padding: 20px;

  border-radius: 6px;
  z-index: 2;

  img {
    border-radius: 5px;
  }

  @media only screen and (max-width: 1020px) {
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

export const TvInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  gap: 20px;

  max-width: 800px;

  #TvInfoWrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    gap: 20px;
  }
`

export const TitleDiv = styled.div`
  h1 {
    font-size: 30px;
    color: var(--titleColor);
  }

  p {
    color: var(--textColor);
  }

  @media only screen and (max-width: 1020px) {
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

  @media only screen and (max-width: 1020px) {
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

  @media only screen and (max-width: 1020px) {
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

import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100vw;

  display: flex;
  flex-direction: row;

  gap: 40px;
  padding-bottom: 20px;

  overflow-x: scroll;

  scrollbar-width: thin;
  scrollbar-color: #4A88C1 #1C1C1C;

  &::-webkit-scrollbar {
    height: 10px;
  }

  &::-webkit-scrollbar-track {
    background: var(--complementaryColor);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    border: 3px solid var(--complementaryColor);
    background-color: var(--primaryColor);
  }
`

export const MovieCard = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;

  &:first-child {
    margin-left: 20px;
  }

  &:last-child {
    margin-right: 20px;
  }

  #MovieTitle {
    font-size: 18px;
    font-weight: 500;
    color: var(--textColor);
    transition: .2s;
    cursor: pointer;

    &:hover{
      color: var(--titleColor);
    }
  }

  div {
    display: flex;
    flex-direction: column;

    #PosterDiv {
      cursor: pointer;

      img {
        max-width: 160px;

        border-radius: 5px;
      }

      &::after {
        height: 150px;
        width: 100%;

        content: '';
        position: relative;
        display: block;

        margin-top: -140px;

        transition: .2s;
      }

      &:hover {
        &::after {
          background-image: linear-gradient(to bottom, transparent 0, var(--backgroundColor) 100%);
          overflow: hidden;
          margin-top: -150px;
        }
      }

      @media only screen and (max-width: 800px) {
        img {
          max-width: 130px;
        }
      }

      @media only screen and (max-width: 450px) {
        img {
          max-width: 100px;
        }
      }
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
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: -25px;
  margin-left: 10px;
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

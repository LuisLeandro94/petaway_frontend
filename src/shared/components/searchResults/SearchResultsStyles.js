import styled from 'styled-components'

import {
  BorderColor,
  DarkGray,
  PrimaryColor,
  TextColor,
  White
} from '../../styles/_colors'
import {device} from '../../styles/_responsive'
import {ButtonText, FilterTitle, Poppins} from '../../styles/_texts'

export const ResultsWrapper = styled.div`
  height: 85vh;
  top: 105px;
  width: 69%;
  background-color: ${White};
  position: absolute;
  bottom: 10px;
  right: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: row no-wrap;

  @media ${device.tablet} {
    width: 60%;
    right: 0;
    bottom: 0;
  }
`

export const ResultsContainer = styled.div`
  height: 100%;
  width: 50%;
  overflow: scroll;
`

export const DetailsContainer = styled.div`
  height: 100%;
  width: 50%;
`

export const CardWrapper = styled.div`
  width: 90%;
  height: 25%;
  margin: 2%;
  border: 1px solid ${BorderColor};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`

export const AvatarWrapper = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
`

export const DetailsWrapper = styled.div`
  width: 70%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const NameContainer = styled.h1`
  font-size: 18px;
  font-family: ${Poppins};
  font-weight: 500;
  color: ${TextColor};
`

export const CityContainer = styled.h2`
  font-size: 14px;
  font-family: ${Poppins};
  font-weight: 400;
  color: ${DarkGray};
  font-style: italic;
`

export const NumberContainer = styled.p`
  font-size: 16px;
  font-family: ${Poppins};
  font-weight: 400;
  color: ${DarkGray};
`

export const EmailContainer = styled.p`
  font-size: 15px;
  font-family: ${Poppins};
  font-weight: 400;
  color: ${DarkGray};
`

export const NoResultsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NoResultsContainer = styled.div`
  width: 100%;
  height: 30%;
  text-align: center;
`

export const NoResultsHeader = styled.h1`
  font-family: ${Poppins};
  font-weight: 600;
  font-size: ${ButtonText};
  color: ${PrimaryColor};
`

export const NoResultsText = styled.p`
  font-family: ${Poppins};
  font-weight: 400;
  font-size: ${FilterTitle};
  color: ${DarkGray};
  font-style: italic;
`

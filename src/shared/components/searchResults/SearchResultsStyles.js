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
    width: ${({showFilters}) => (showFilters ? '0%' : '100%')};
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

  @media ${device.tabletL} {
    flex-direction: column;
  }
`

export const AvatarWrapper = styled.div`
  width: 35%;
  display: flex;
  justify-content: center;

  @media ${device.tabletL} {
    height: 20%;
    display: none;
  }
`

export const DetailsWrapper = styled.div`
  width: 35%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media ${device.tabletL} {
    width: 100%;
    height: 70%;
  }
`

export const NameContainer = styled.h1`
  font-size: 18px;
  font-family: ${Poppins};
  font-weight: 500;
  color: ${TextColor};

  @media ${device.tabletL} {
    margin: 0;
    font-size: 14px;
  }
`

export const CityContainer = styled.h2`
  font-size: 14px;
  font-family: ${Poppins};
  font-weight: 400;
  color: ${DarkGray};
  font-style: italic;

  @media ${device.tabletL} {
    margin: 0;
    font-size: 12px;
  }
`

export const NumberContainer = styled.p`
  font-size: 16px;
  font-family: ${Poppins};
  font-weight: 400;
  color: ${DarkGray};

  @media ${device.tabletL} {
    margin: 0;
    font-size: 14px;
  }
`

export const EmailContainer = styled.p`
  font-size: 15px;
  font-family: ${Poppins};
  font-weight: 400;
  color: ${DarkGray};

  @media ${device.tabletL} {
    margin: 0;
    font-size: 13px;
  }
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

  @media ${device.tabletL} {
    height: 70%;
  }
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

export const RequestWrapper = styled.div`
  width: 30%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  @media ${device.tabletL} {
    width: 60%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
`

export const RequestService = styled.button`
  height: 100%;
  width: 100%;
  margin-bottom: 10%;
  margin-right: 10%;
  border: none;
  border-radius: 10px;
  border: 3px solid ${PrimaryColor};
  background-color: transparent;
  color: ${TextColor}
  font-family: 'Poppins';
  font-size: 22px;
  cursor: pointer;
  transition: all 1s ease;

  &:hover {
    background-color: ${PrimaryColor};
    color: white;
  }

  @media ${device.tabletL} {
    margin-bottom: 0;
    line-height: 1;
    height: 70%;
    margin-right: 0;
    font-size: 12px;
  }
`

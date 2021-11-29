import styled from 'styled-components'

import {
  PrimaryColor,
  SecondaryColor,
  White
} from '../../shared/styles/_colors'
import {device} from '../../shared/styles/_responsive'
import {ButtonText, Poppins, SignUpText} from '../../shared/styles/_texts'

export const StyledNotFoundContainer = styled.div`
  width: 100%;
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${SecondaryColor};
`

export const StyledNotFoundGroup = styled.div`
  max-width: 800px;
  height: 500px;
  position: relative;
`

export const StyledTitle = styled.h2`
  display: inline-block;
  width: 100%;
  font-size: 50px;
  line-height: 1;
  margin: 0px;
  font: ${Poppins};
  text-align: center;
  color: ${PrimaryColor};

  @media ${device.tablet} {
    font-size: ${SignUpText};
  }
`

export const StyledDescription = styled.h5`
  display: block;
  width: 100%;
  font-size: 15px;
  text-align: center;
  font: ${Poppins};
`

export const StyledNotFoundLogo = styled.img`
  display: block;
  width: 500px;
  margin-left: auto;
  margin-right: auto;

  @media ${device.tablet} {
    width: 300px;
  }
`

export const StyledNotFound = styled.h1`
  display: inline-block;
  width: 100%;
  color: #fff;
  font-size: 70px;
  line-height: 1;
  text-align: center;
`
export const MarginBackNotFound = styled.div`
  display: block;
  width: 300px;
  margin-left: auto;
  margin-right: auto;

  @media ${device.tablet} {
    margin-left: 0;
    margin-right: 0;
    width: 100%;
    text-align: center;
  }
`

export const Margin = styled.div`
  height: ${({size}) => size || 0}px;
`

export const BackButton = styled.button`
  background: ${PrimaryColor};
  max-width: 270px;
  width: 100%;
  height: 60px;
  border: 3px solid ${PrimaryColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  font-family: ${Poppins};
  font-weight: 600;
  font-size: ${ButtonText};
  line-height: 36px;
  letter-spacing: 0.1em;
  color: ${White};
  cursor: pointer;
  &:hover {
    background: rgba(0, 166, 170, 0.8);
    border: none;
    color: ${White};
    transition: all 0.5s ease;
  }
`

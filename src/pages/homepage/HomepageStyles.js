import styled from 'styled-components'

import background from '../../assets/matt-nelson-aI3EBLvcyu4-unsplash.jpg'
import {
  DarkGray,
  PrimaryColor,
  SecondaryColor,
  White
} from '../../shared/styles/_colors'
import {device} from '../../shared/styles/_responsive'
import {Subtitle, Poppins, ButtonText} from '../../shared/styles/_texts'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${DarkGray};
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

export const BackgroundContainer = styled.div`
  background-image: url(${background});
  background-position: center;
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.4;
`

export const PetawayLogo = styled.img`
  position: relative;
  max-width: 600px;
  width: 100%;
  z-index: 2;
  margin-top: 150px;
`

export const Quote = styled.h1`
  font-family: ${Poppins};
  font-style: italic;
  font-weight: bold;
  font-size: ${Subtitle};
  line-height: 54px;
  letter-spacing: 0.03em;
  color: ${SecondaryColor};
  z-index: 2;
  margin-top: -150px;
`

export const FindMoreButton = styled.button`
  z-index: 2;
  background: transparent;
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
  @media ${device.laptopS} {
    width: 70%;
    height: 50px;
  }
  &:hover {
    background: ${PrimaryColor};
    border: none;
    color: ${White};
    transition: all 0.5s ease;
  }
`

export const ButtonContainer = styled.div`
  width: 100%;
  text-align: center;
  bottom: 0;
  z-index: 2;
`

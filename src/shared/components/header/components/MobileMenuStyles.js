import styled, {keyframes} from 'styled-components'

import {
  DarkGray,
  PrimaryColor,
  SecondaryColor
} from '../../../styles/_colors'
import {device} from '../../../styles/_responsive'
import {ButtonText, Poppins, Subtitle} from '../../../styles/_texts'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${DarkGray};
  padding: 50px 0;
  position: absolute;
  left: 0;
  transform: ${({toggled}) =>
    toggled ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 1s ease;
  z-index: 1000;
  top: 95px;
`

export const List = styled.ul`
  list-style: none;
  padding: 0 15px;
`

export const ListItem = styled.li`
  font-family: ${Poppins};
  font-weight: bold;
  color: ${PrimaryColor};
  font-size: ${Subtitle};
  text-align: center;
  width: auto;

  @media ${device.tablet} {
    font-size: ${ButtonText};
  }
`

export const Underline = styled.div`
  opacity: 0;
  width: 0;
  height: 3px;
  background-color: ${SecondaryColor};
  border: 1px solid ${SecondaryColor};
  border-radius: 50px;
`

export const ListLink = styled.a`
  color: ${PrimaryColor};

  &:hover {
    color: ${SecondaryColor};

    ${Underline} {
      width: 100%;
      opacity: 1;
      transition: all 1s ease;
    }
  }
`

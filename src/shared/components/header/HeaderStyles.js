import {Sling as Hamburger} from 'hamburger-react'
import styled, {keyframes} from 'styled-components'

import {PrimaryColor, SecondaryColor, White} from '../../styles/_colors'
import {device} from '../../styles/_responsive'
import {HeaderMenus, Poppins, SignUpText} from '../../styles/_texts'

export const Container = styled.nav`
  width: 100%;
  height: 95px;
  background-color: ${PrimaryColor};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`

export const LogoContainer = styled.a`
  width: 33%;
  align-items: center;
  text-align: center;

  @media ${device.tabletL} {
    width: 100%;
    text-align: left;
  }
`

export const Logo = styled.img`
  width: 94px;
  margin-left: 5%;
`

export const LinksWrapper = styled.div`
  width: 100%;
  font-family: ${Poppins};
  font-size: ${HeaderMenus};
  height: 100%;
  align-items: center;
  display: flex;

  @media ${device.tabletL} {
    display: none;
  } ;
`

export const LinksList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: nowrap;
`

export const ListItem = styled.li`
  display: inline;
`

export const ItemImage = styled.img`
  width: 21px;
  transform: rotate(-12deg);
  margin-left: 15px;
  margin-right: 6px;
`

export const OperationWrapper = styled.div`
  font-family: ${Poppins};
  font-weight: bold;
  color: ${White};
  font-size: ${SignUpText};
  width: 53%;

  @media ${device.tabletL} {
    width: 100%;
    display: none;
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

export const Grow = keyframes`
  from {
    width: 0%;
    opacity: 0;
  }
  to {
    width: 100%;
    opacity: 1;
  }
`

export const Operations = styled.a`
  color: ${White};
  text-decoration: none;
  float: right;
  margin-right: 5%;

  &:hover {
    ${Underline} {
      width: 100%;
      opacity: 1;
      transition: all 1s ease;
    }

    color: ${SecondaryColor};
    transition: color 0.5s ease;
  }
`

export const MenuUnderline = styled(Underline)`
  opacity: 0;
  width: 0;
  height: 3px;
  background-color: ${White};
  border: 1px solid ${White};
  border-radius: 50px;
`

export const LinkItem = styled.a`
  color: ${SecondaryColor};
  text-decoration: none;

  &:hover {
    ${MenuUnderline} {
      opacity: 1;
      width: 100%;
      transition: all 1s ease;
    }

    color: ${White};
    transition: color 0.5s ease;
  }
`

export const HamburgerIcon = styled(Hamburger)``

export const HamburgerContainer = styled.div`
  display: none;
  padding: 15px;

  @media ${device.tabletL} {
    display: block;
  }
`

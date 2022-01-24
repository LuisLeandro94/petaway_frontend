import {Menu, MenuItem} from '@szhsin/react-menu'
import {Avatar, Button, Drawer} from 'antd'
import {Sling as Hamburger} from 'hamburger-react'
import styled, {keyframes} from 'styled-components'

import {
  PrimaryColor,
  SecondaryColor,
  White,
  TextColor,
  BorderColor,
  DarkGray,
  ErrorColor
} from '../../styles/_colors'
import {device} from '../../styles/_responsive'
import {
  BoldFontWeight,
  FilterTitle,
  FormText,
  HeaderMenus,
  Poppins,
  SignUpText,
  Subtitle
} from '../../styles/_texts'

export const Container = styled.nav`
  width: 100%;
  height: 95px;
  background-color: ${PrimaryColor};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: none;
  position: fixed;
  z-index: 3;
  top: 0;
`

export const LogoContainer = styled.a`
  width: 33%;
  align-items: center;
  text-align: center;

  @media ${device.tabletL} {
    width: 33%;
    order: 2;
    padding: 15px;
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
  display: flex;

  @media ${device.tabletL} {
    width: 33%;
    order: 3;
    display: none;
  }
`

export const UserWrapper = styled(OperationWrapper)`
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 33%;
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

  /* &:first-of-type {
    border: 1px solid ${SecondaryColor};
    border-radius: 15px;
  } */
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
    width: 33%;
    order: 1;
    display: block;
  }
`

export const UserAvatar = styled(Avatar)`
  margin-left: 30px;
  cursor: pointer;
`

export const Notifications = styled.a``

export const UserMenuWrapper = styled.div`
  width: calc(auto + 105px);
  background-color: ${White};
  border-radius: 30px;
  height: auto;
  padding: 10px;
  position: absolute;
  z-index: 2;
  padding-right: 20px;
  right: 5%;
`

export const UserMenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  width: 100%;
  margin: 0;
  padding: 0;
`

export const UserMenuItem = styled.li`
  font-family: ${Poppins};
  font-size: ${FormText};
  font-weight: normal;
  color: ${TextColor};
`

export const MenuLinks = styled.a`
  font-family: ${Poppins};
  font-size: ${FilterTitle};
  color: ${TextColor};
  font-weight: 500;
  display: block;

  &:hover {
    color: ${PrimaryColor};
    transition: all 1s ease;
    transform: skewX(-20deg);
  }

  &:last-of-type {
    position: absolute;
    bottom: 15px;
  }
`

export const LineSeparator = styled.span`
  position: absolute;
  right: 0;
  width: 256px;
  bottom: 50px;
  border: 1px solid ${SecondaryColor};
`

export const UserMenu = styled(Menu)`
  .szh-menu {
    background-color: ${SecondaryColor};
    color: ${PrimaryColor};
    min-width: 6rem;
    left: -100px !important;

    @media ${device.tabletL} {
      left: -200px !important;
    }
  }
`

export const UserMenuListItem = styled(MenuItem)`
  font-size: 16px;
  color: ${PrimaryColor};
`

export const GoToProfileBtn = styled(Button)`
  .ant-btn {
    background-color: ${PrimaryColor} !important;
  }
`

export const GoBackBtn = styled(Button)``

export const NotificationDrawer = styled(Drawer)`
  .ant-drawer-header {
    text-align: center;

    .ant-drawer-title {
      font-size: 18px;
      font-weight: ${BoldFontWeight};
    }
  }
`

export const NotificationTabs = styled.span`
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: ${PrimaryColor} !important;
    font-weight: 500;

    &:hover {
      color: ${PrimaryColor} !important;
    }
  }
`

export const EventCard = styled.div`
  border-bottom: 2px solid ${BorderColor};
  width: 100%;
  height: 100px;
  margin-bottom: 10pxpx;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`

export const EventDetails = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 5px;
  font-family: ${Poppins};
  font-size: 14px;
`

export const EventRightSide = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  text-align: end;
`

export const EventDate = styled.p`
  width: 50%;
  margin: 0;
  color: ${BorderColor};
  font-size: 10px;
  font-style: italic;
  margin-right: 10px;
`

export const EventButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  margin: 10px;
  width: 100%;
  height: 100%;
`

export const RejectButton = styled.button`
  background-color: ${White};
  border: 2px solid ${ErrorColor};
  height: 50%;
  cursor: pointer;
  margin-right: 10px;
  border-radius: 10px;
  transition: all 1s ease;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #ff000075;
  }
`

export const AcceptButton = styled.button`
  background-color: ${PrimaryColor};
  border: 2px solid ${PrimaryColor};
  height: 50%;
  cursor: pointer;
  border-radius: 10px;
  transition: all 1s ease;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #00a7aa7b;
    border: 2px solid ${PrimaryColor};
  }
`

export const DetailsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 10px;
`

export const EventName = styled.p`
  height: 25%;
  width: 100%;
  margin: 0;
  font-size: 15px;
`
export const EventPet = styled.p`
  height: 25%;
  width: 100%;
  margin: 0;
`
export const EventService = styled.p`
  height: 25%;
  width: 100%;
  margin: 0;
`
export const EventSender = styled.span`
  height: 25%;
  width: 100%;
  margin: 0;
  font-weight: ${BoldFontWeight};
  color: ${DarkGray};
`

export const ItalicSpan = styled.span`
  font-style: italic;
`
export const LanguageSelec = styled.select`
  margin-right: 55px;
  border: none;
  float: right;
  margin-top: -24px;
  width: 42px;
  word-wrap: normal;
  font-family: 'Campton';
  font-size: ${FormText};
  overflow: visible;
  text-transform: uppercase;
  margin: auto;
  font-family: 'Poppins';
  border-radius: 10px;
  background-color: transparent;
  color: ${White};
  font-size: ${HeaderMenus};
`

export const LangOption = styled.option`
  color: ${TextColor};
`

export const LanguageSelector = styled(LanguageSelec)`
  margin-right: 0;
  margin-right: 10px;
`

export const MobileLanguageSelector = styled(LanguageSelec)`
  font-size: ${Subtitle};
  width: 75px;
`

export const LanguageWrapper = styled.div`
  width: 30%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: auto;
`

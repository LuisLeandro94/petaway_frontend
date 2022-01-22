import {Button, Menu} from 'antd'
import styled from 'styled-components'

import {
  DarkGray,
  ErrorColor,
  PrimaryColor,
  SecondaryColor,
  TextColor,
  White
} from '../../shared/styles/_colors'
import {device} from '../../shared/styles/_responsive'
import {
  ButtonText,
  DisclaimerText,
  HeaderMenus,
  Poppins
} from '../../shared/styles/_texts'

const {Item} = Menu

export const Content = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${SecondaryColor};
  display: flex;
  justify-content: center;
`

export const EditButtonDiv = styled.div`
  margin: 10px;
`

export const EditButton = styled(Button)`
  background-color: ${PrimaryColor};
  border: 1px solid ${PrimaryColor};

  &:hover {
    background-color: ${SecondaryColor};
    border: 1px solid ${SecondaryColor};
    transition: all 0.5s ease;
  }
`

export const Wrapper = styled.div`
  width: 75%;
  background-color: ${White};
  margin: auto;
  margin-top: 80px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: 0;
    width: 100%;
  }
`

export const HalfPage = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:last-of-type {
    background-color: ${SecondaryColor};
    height: 580px;
    margin: 10px;
    border-radius: 10px;

    @media ${device.tabletL} {
      width: 100%;
      margin: 0;
    }
  }

  @media ${device.tabletL} {
    margin-top: 20px;
  }
`

export const UserName = styled.h1`
  font-family: ${Poppins};
  font-size: ${ButtonText};
  font-weight: 500;
  font-style: italic;
  color: ${TextColor};
  margin: 0;
  margin-top: 20px;

  @media ${device.tabletL} {
    margin-top: 10px;
  }
`

export const UserEmail = styled.p`
  font-family: ${Poppins};
  font-size: ${DisclaimerText};
  font-weight: 400;
  color: ${DarkGray};
  margin: 0;
`

export const MenuItem = styled(Item)`
  .ant-menu-item-active.customclass {
    &:hover {
      color: green !important;
    }
  }
`

export const MenuWrapper = styled.span`
  .ant-menu-item {
    font-family: ${Poppins};
    font-weight: 500;
    font-size: ${HeaderMenus};
    padding: 0px 50px !important;
  }
  .ant-menu-item-active,
  .ant-menu-item-selected {
    color: #00a6aa !important;
  }
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item:hover::after,
  .ant-menu-horizontal:not(.ant-menu-dark)
    > .ant-menu-item-selected::after {
    border-bottom: 2px solid #00a6aa;
  }
`

export const DeletePopUp = styled.span`
  .ant-btn-primary {
    background: ${ErrorColor} !important;
    border-color: ${ErrorColor} !important;
  }
`

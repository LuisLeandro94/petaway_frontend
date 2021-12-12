import {Button} from 'antd'
import styled from 'styled-components'

import {
  DarkGray,
  PrimaryColor,
  SecondaryColor,
  TextColor,
  White
} from '../../shared/styles/_colors'
import {device} from '../../shared/styles/_responsive'
import {
  ButtonText,
  DisclaimerText,
  Poppins
} from '../../shared/styles/_texts'

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
  min-height: 580px;
  background-color: ${White};
  margin: auto;
  margin-top: 140px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;

  @media ${device.tablet} {
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
`

export const UserEmail = styled.p`
  font-family: ${Poppins};
  font-size: ${DisclaimerText};
  font-weight: 400;
  color: ${DarkGray};
  margin: 0;
`

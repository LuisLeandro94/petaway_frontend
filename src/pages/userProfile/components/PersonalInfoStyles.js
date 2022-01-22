import styled from 'styled-components'

import {
  SecondaryColor,
  TextColor,
  White
} from '../../../shared/styles/_colors'
import {device} from '../../../shared/styles/_responsive'
import {
  FilterTitle,
  HeaderMenus,
  Poppins
} from '../../../shared/styles/_texts'

export const EachFieldWrapper = styled.div`
  padding-top: 10px;
  padding-left: 10px;
  border-bottom: 1px solid ${SecondaryColor};

  @media ${device.tabletL} {
    display: flex;
    flex-direction: column;
  }

  &:first-of-type {
    border-bottom: none;
  }

  &:last-of-type {
    border-bottom: none;
  }

  &:first-of-type {
    justify-self: center;
    align-self: center;
  }
`

export const Wrapper = styled.div`
  position: relative;
  width: 95%;
  height: 50%;
  margin: 10px;
  background-color: ${White};
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  @media ${device.tabletL} {
    overflow: scroll;
  }
`

export const BlackText = styled.h1`
  font-family: ${Poppins};
  font-size: ${FilterTitle};
  color: ${TextColor};
  font-weight: bold;
  display: inline-block;
  font-style: normal;
`

export const Title = styled(BlackText)`
  font-size: ${HeaderMenus};
  font-style: normal;
  text-decoration: underline;
`

export const Text = styled.span`
  font-family: ${Poppins};
  font-size: ${FilterTitle};
  color: ${TextColor};
  font-weight: normal;
  position: absolute;
  left: 150px;
  padding-left: 10px;
  border-left: 1px solid ${SecondaryColor};

  @media ${device.tabletL} {
    left: 0;
    padding-left: 0;
    border-left: 0;
    position: relative;
  }
`

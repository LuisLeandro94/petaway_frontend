import styled from 'styled-components'

import {TextColor, White} from '../../../shared/styles/_colors'
import {device} from '../../../shared/styles/_responsive'
import {
  FilterTitle,
  Poppins,
  ResultTitle
} from '../../../shared/styles/_texts'

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

export const FormWrapper = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`

export const Separator = styled.div`
  width: 100%;
  height: 20px;
`

export const Title = styled.p`
  font-family: ${Poppins};
  font-weight: bold;
  font-size: ${FilterTitle};
  color: ${TextColor};
  margin: 0;
  align-self: flex-start;
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 30px;
`

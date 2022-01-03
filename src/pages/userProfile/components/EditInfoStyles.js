import styled from 'styled-components'

import {
  PrimaryColor,
  TextColor,
  White
} from '../../../shared/styles/_colors'
import {device} from '../../../shared/styles/_responsive'
import {
  ButtonText,
  FilterTitle,
  Poppins
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

export const SubmitButton = styled.button`
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
  @media ${device.laptopS} {
    width: 70%;
    height: 50px;
  }
  &:hover {
    background: rgba(0, 166, 170, 0.8);
    border: none;
    color: ${White};
    transition: all 0.5s ease;
  }
`

export const ButtonContainer = styled.div`
  width: 100%;
  position: relative;
  text-align: center;
  margin-top: 30px;
`

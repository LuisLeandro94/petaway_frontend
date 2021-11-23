import {Input} from 'antd'
import styled from 'styled-components'

import {
  BorderColor,
  DarkGray,
  PrimaryColor,
  SecondaryColor,
  TextColor,
  White
} from '../../shared/styles/_colors'
import {
  ButtonText,
  FormText,
  Poppins,
  PoppinsBold,
  Subtitle
} from '../../shared/styles/_texts'

export const Container = styled.div`
  background-color: ${SecondaryColor};
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
  margin-top: -5%;
`

export const FormWrapper = styled.div`
  max-height: 550px;
  max-width: 550px;
  width: 100%;
  height: 100%;
  background-color: ${White};
  position: relative;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const Title = styled.h1`
  font-family: ${Poppins};
  font-weight: bold;
  font-size: ${Subtitle};
  line-height: 54px;
  color: ${TextColor};
  padding-top: 15px;
`

export const InputContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 0px 40px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;

  &:nth-of-type(2) {
    padding-top: 20px;
  }
`

export const InputTitle = styled.p`
  font-family: ${Poppins};
  font-weight: 500;
  font-size: ${FormText};
  line-height: 21px;
  color: ${TextColor};
  width: 100%;
  margin: 0;
`

export const LoginInput = styled(Input)`
  height: 50px;
  background: ${White};
  border: 1px solid ${BorderColor};
  box-sizing: border-box;
  border-radius: 10px;
`

export const PasswordInput = styled(Input.Password)`
  height: 50px;
  background: ${White};
  border: 1px solid ${BorderColor};
  box-sizing: border-box;
  border-radius: 10px;
`

export const SignInButton = styled.button`
  background: ${PrimaryColor};
  width: 270px;
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
`

export const ButtonContainer = styled.div`
  width: 100%;
  position: relative;
  text-align: center;
  margin-top: 70px;
`

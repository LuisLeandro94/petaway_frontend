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
import {device} from '../../shared/styles/_responsive'
import {
  ButtonText,
  DisclaimerText,
  FormText,
  Poppins,
  PoppinsBold,
  SignUpText,
  Subtitle
} from '../../shared/styles/_texts'

export const Container = styled.div`
  background-color: ${SecondaryColor} !important;
  width: 100%;
  height: 100vh;
  border-collapse: collapse;
  background-color: transparent;
  border-spacing: 0;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`

export const FormWrapper = styled.div`
  max-height: 650px;
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
  z-index: 1;
`

export const Title = styled.h1`
  font-family: ${Poppins};
  font-weight: bold;
  font-size: ${Subtitle};
  line-height: 54px;
  color: ${TextColor};
  padding-top: 15px;
  position: relative;
  text-align: center;

  @media ${device.tablet} {
    font-size: ${SignUpText};
  }
`

export const FormContainer = styled.form`
  width: 100%;
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

  .ant-input {
    background: ${White};
  }
`

export const SignInButton = styled.button`
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

  @media ${device.tabletS} {
    width: 50%;
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
  margin-top: 40px;
`

export const Disclaimer = styled.div`
  position: relative;
  font-family: ${Poppins};
  font-size: ${DisclaimerText};
  line-height: 18px;
  text-align: center;
  color: ${DarkGray};
  padding: 30px;

  @media ${device.tablet} {
    padding: 5px 30px;
  }
`

export const DisclaimerLinks = styled.a`
  color: ${PrimaryColor};
  text-decoration: underline;

  &:hover {
    color: ${SecondaryColor};
  }
`

export const ForgotPassword = styled.a`
  color: ${PrimaryColor};
  font-family: ${Poppins};
  font-weight: 500;
  font-size: ${FormText};
  line-height: 21px;
  text-align: center;
  margin-bottom: 30px;

  &:hover {
    color: ${SecondaryColor};
  }

  @media ${device.tabletS} {
    margin-bottom: 10px;
  }
`

export const Separator = styled.div`
  border: 1px solid ${SecondaryColor};
  margin: 0;
  width: 90%;
  border-radius: 50px;
`

export const LoginRedirect = styled.div`
  font-family: ${Poppins};
  font-size: ${FormText};
  line-height: 21px;
  letter-spacing: 0.1em;
  color: ${DarkGray};
  margin-top: 30px;
  text-align: center;

  @media ${device.tablet} {
    margin-top: 10px;
  }
`

export const LoginRedirectLink = styled.a`
  color: ${PrimaryColor};
  text-decoration: underline;

  &:hover {
    color: ${SecondaryColor};
  }
`

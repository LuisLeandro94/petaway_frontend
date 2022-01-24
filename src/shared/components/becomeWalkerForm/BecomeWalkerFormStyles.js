import {Input} from 'antd'
import {Field} from 'react-final-form'
import styled from 'styled-components'

import {
  DarkGray,
  ErrorColor,
  PrimaryColor,
  SecondaryColor,
  TextColor,
  White
} from '../../styles/_colors'
import {device} from '../../styles/_responsive'
import {
  ButtonText,
  DisclaimerText,
  FormText,
  Poppins,
  SignUpText,
  Subtitle
} from '../../styles/_texts'

export const BodyWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: ${SecondaryColor};
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 130px;
  padding-bottom: 50px;
`

export const FormWrapper = styled.div`
  width: 40%;
  height: auto;
  background-color: ${White};
  position: relative;
  text-align: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.laptop} {
    width: 100%;
  }
`

export const FormContainer = styled.form`
  width: 90%;
`

export const FormTitle = styled.h1`
  font-family: ${Poppins};
  font-weight: bold;
  font-size: ${Subtitle};
  line-height: 54px;
  color: ${TextColor};
  padding-bottom: 20px;

  @media ${device.laptop} {
    margin: 0;
    padding-bottom: 5px;
    font-size: ${SignUpText};
    padding-top: 40px;
  }

  @media ${device.tabletL} {
    font-size: 22px;
  }
`

export const InputWrapper = styled.div`
  padding-bottom: 20px;

  @media ${device.laptop} {
    padding-bottom: 5px;
  }
`

export const InputTitle = styled.p`
  float: left;
  font-family: ${Poppins};
  font-weight: 500;
  font-size: ${FormText};
  line-height: 21px;
  color: ${TextColor};
  margin: 0;
`

export const InputField = styled(Field)`
  border: 1px solid ${SecondaryColor};
  border-radius: 10px;
`

export const SignupInput = styled(Input)`
  background: ${White};
  border: ${({meta}) =>
    meta.touched && !meta.valid
      ? `1px solid ${ErrorColor}`
      : `1px solid ${SecondaryColor}`};
  box-sizing: border-box;
  border-radius: 10px;
  .ant-input {
    background: ${White};
  }
`

export const PasswordInput = styled(Input.Password)`
  background: ${White};
  box-sizing: border-box;
  border-radius: 10px;
  border: ${({meta}) =>
    meta.touched && !meta.valid
      ? `1px solid ${ErrorColor}`
      : `1px solid ${SecondaryColor}`};
  .ant-input {
    background: ${White};
  }
`

export const SignUpButton = styled.button`
  background: ${PrimaryColor};
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
  @media ${device.tabletL} {
    font-size: 14px;
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
  margin-top: 10px;
`

export const Disclaimer = styled.div`
  position: relative;
  font-family: ${Poppins};
  font-size: ${DisclaimerText};
  line-height: 18px;
  text-align: center;
  color: ${DarkGray};
  padding: 30px;
  @media ${device.laptop} {
    padding: 5px 0px;
  }
`

export const DisclaimerLinks = styled.a`
  color: ${PrimaryColor};
  text-decoration: underline;
  &:hover {
    color: ${SecondaryColor};
  }
`

export const Separator = styled.div`
  border: 1px solid ${SecondaryColor};
  margin: 0;
  width: 90%;
  border-radius: 50px;
  margin-top: 30px;
`

export const LoginRedirect = styled.div`
  font-family: ${Poppins};
  font-size: ${FormText};
  line-height: 21px;
  letter-spacing: 0.1em;
  color: ${DarkGray};
  margin-top: 30px;
  text-align: center;
  @media ${device.laptop} {
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

export const Selection = styled.span`
  .ant-select  {
    width: 100% !important;
  }
`

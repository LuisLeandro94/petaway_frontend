import React from 'react'

import {Input} from 'antd'
import {Field, Form} from 'react-final-form'
import {Translate} from 'react-localize-redux'
import {useHistory} from 'react-router'

import FormValidator from '../../infra/services/validations/FormValidator'
import {Login} from '../../shared/client/Auth'
import Header from '../../shared/components/header/Header'
import {
  ButtonContainer,
  Container,
  Disclaimer,
  DisclaimerLinks,
  ForgotPassword,
  FormContainer,
  FormWrapper,
  InputContainer,
  InputTitle,
  LoginInput,
  LoginRedirect,
  LoginRedirectLink,
  PasswordInput,
  Separator,
  SignInButton,
  Testestestes,
  Title
} from './AuthStyles'

const onSubmit = (values) => {
  console.log(values)
}

const validate = FormValidator.make({
  email: 'required',
  password: 'required'
})

// TODO Form appears to be non-selectable, have to change it
// TODO create custom inputs to use with react-final-form
const LoginPage = () => {
  const history = useHistory()

  const responseLogin = async (response) => {
    try {
      const data = {
        email: response.email,
        password: response.password
      }

      const result = await Login(data)

      if (result) {
        // userSave({
        //   ...result.data
        // })
        history.push('/')
      }
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <Header />
      <Container>
        <FormWrapper>
          <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({handleSubmit, submitting}) => (
              <FormContainer
                onSubmit={handleSubmit}
                style={{position: 'relative'}}
              >
                <Title>
                  <Translate id='LOGIN_TITLE' />
                </Title>
                <InputContainer>
                  <InputTitle>E-mail</InputTitle>
                  <Field name='email' component={LoginInput} />
                </InputContainer>
                <InputContainer>
                  <InputTitle>Password</InputTitle>
                  <Field name='password' component={PasswordInput} />
                </InputContainer>
                <ButtonContainer>
                  <SignInButton type='submit' disabled={submitting}>
                    Sign In
                  </SignInButton>
                </ButtonContainer>
              </FormContainer>
            )}
          />
          <Disclaimer>
            By signing in or signing up, I agree to PetAway.com's{' '}
            <DisclaimerLinks href='/'>Terms of Service</DisclaimerLinks>{' '}
            and <DisclaimerLinks href='/'>Privacy Policy</DisclaimerLinks>,
            confirm that I am 18 years of age or older, and consent to
            receiving email communication. This site is protected by
            reCAPTCHA and the Google{' '}
            <DisclaimerLinks href='/'>Privacy Policy</DisclaimerLinks> and{' '}
            <DisclaimerLinks href='/'>Terms of Service</DisclaimerLinks>{' '}
            apply.
          </Disclaimer>
          <ForgotPassword href='/'>Forgot your password?</ForgotPassword>
          <Separator />
          <LoginRedirect>
            Don't have a PetAway account?{' '}
            <LoginRedirectLink href='/'>Sign up now!</LoginRedirectLink>
          </LoginRedirect>
        </FormWrapper>
      </Container>
    </>
  )
}

export default LoginPage

import React from 'react'

import {sha256} from 'js-sha256'
import {Field, Form} from 'react-final-form'
import {Translate} from 'react-localize-redux'
import {useHistory} from 'react-router'

import {AuthTokenKey} from '../../infra/config/LocalStorageKeys'
import {Login} from '../../infra/requests/AuthRequests'
import FormValidator from '../../infra/services/validations/FormValidator'
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
  Title
} from './AuthStyles'

const validate = FormValidator.make({
  email: 'required',
  password: 'required'
})

const LoginPage = () => {
  const history = useHistory()

  const formData = {}

  const LoginResponse = async (response) => {
    try {
      const pwd = sha256(response.password + process.env.SECRET)
      const data = {
        ...response,
        password: pwd
      }
      const result = await Login(data)

      if (result.success) {
        localStorage.setItem(AuthTokenKey, result.data.result)
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
            onSubmit={LoginResponse}
            validate={validate}
            initialValues={formData}
            render={({handleSubmit, submitting}) => (
              <FormContainer
                onSubmit={handleSubmit}
                style={{position: 'relative'}}
              >
                <Title>
                  <Translate id='LOGIN_TITLE' />
                </Title>
                <Field name='email'>
                  {({input, meta}) => (
                    <InputContainer>
                      <InputTitle>E-mail</InputTitle>
                      <LoginInput
                        {...input}
                        type='text'
                        placeholder='First Name'
                        meta={meta}
                      />
                    </InputContainer>
                  )}
                </Field>
                <Field name='password'>
                  {({input, meta}) => (
                    <InputContainer>
                      <InputTitle>Password</InputTitle>
                      <PasswordInput
                        {...input}
                        type='password'
                        placeholder='First Name'
                        meta={meta}
                      />
                    </InputContainer>
                  )}
                </Field>
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
            <LoginRedirectLink href='/signup'>
              Sign up now!
            </LoginRedirectLink>
          </LoginRedirect>
        </FormWrapper>
      </Container>
    </>
  )
}

export default LoginPage

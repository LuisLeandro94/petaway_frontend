import React from 'react'

import {sha256} from 'js-sha256'
import {Form} from 'react-final-form'
import {Translate} from 'react-localize-redux'
import {useHistory} from 'react-router'

import {SignUp} from '../../../infra/requests/AuthRequests'
import FormValidator from '../../../infra/services/validations/FormValidator'
import {
  BodyWrapper,
  ButtonContainer,
  Disclaimer,
  DisclaimerLinks,
  FormContainer,
  FormTitle,
  FormWrapper,
  InputField,
  InputTitle,
  InputWrapper,
  LoginRedirect,
  LoginRedirectLink,
  PasswordInput,
  Separator,
  SignUpButton,
  SignupInput
} from './SignupFormStyles'

const validate = FormValidator.make({
  email: 'required|email',
  password: 'required',
  firstName: 'required',
  lastName: 'required',
  postalCode: 'required'
})

const SignUpForm = () => {
  const history = useHistory()

  const SignUpResponse = (values) => {
    try {
      const pwd = sha256(values.password + process.env.SECRET)
      const data = {
        ...values,
        password: pwd
      }
      SignUp(data).then((res) => {
        if (res.success) {
          history.push('/login')
        }
      })
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <BodyWrapper>
      <FormWrapper>
        <FormTitle>
          <Translate id='SIGN_UP_PETAWAY' />
        </FormTitle>
        <Form
          onSubmit={SignUpResponse}
          validate={validate}
          render={({handleSubmit, submitting}) => (
            <FormContainer onSubmit={handleSubmit}>
              <InputField name='firstName'>
                {({input, meta}) => (
                  <InputWrapper>
                    <InputTitle>
                      <Translate id='FIRST_NAME' />
                    </InputTitle>
                    <SignupInput {...input} type='text' meta={meta} />
                  </InputWrapper>
                )}
              </InputField>
              <InputField name='lastName'>
                {({input, meta}) => (
                  <InputWrapper>
                    <InputTitle>
                      <Translate id='LAST_NAME' />
                    </InputTitle>
                    <SignupInput {...input} type='text' meta={meta} />
                  </InputWrapper>
                )}
              </InputField>
              <InputField name='postalCode'>
                {({input, meta}) => (
                  <InputWrapper>
                    <InputTitle>
                      <Translate id='POSTAL_CODE' />
                    </InputTitle>
                    <SignupInput {...input} type='text' meta={meta} />
                  </InputWrapper>
                )}
              </InputField>
              <InputField name='email'>
                {({input, meta}) => (
                  <InputWrapper>
                    <InputTitle>
                      <Translate id='EMAIL' />
                    </InputTitle>
                    <SignupInput {...input} type='text' meta={meta} />
                  </InputWrapper>
                )}
              </InputField>
              <InputField name='password'>
                {({input, meta}) => (
                  <InputWrapper>
                    <InputTitle>
                      <Translate id='CREATE_PASSWORD' />
                    </InputTitle>
                    <PasswordInput {...input} meta={meta} />
                  </InputWrapper>
                )}
              </InputField>
              <Disclaimer>
                <Translate id='TERMS1' />{' '}
                <DisclaimerLinks>
                  <Translate id='TERMS2' />
                </DisclaimerLinks>{' '}
                <Translate id='TERMS3' />{' '}
                <DisclaimerLinks>
                  <Translate id='TERMS4' />
                </DisclaimerLinks>
                <Translate id='TERMS5' />
              </Disclaimer>
              <ButtonContainer>
                <SignUpButton disabled={submitting}>
                  <Translate id='SIGNUP' />
                </SignUpButton>
              </ButtonContainer>
            </FormContainer>
          )}
        />
        <Separator />
        <LoginRedirect>
          <Translate id='ALREADY_HAVE_ACCOUNT' />{' '}
          <LoginRedirectLink href='/login'>
            <Translate id='SIGNIN_NOW' />
          </LoginRedirectLink>
        </LoginRedirect>
      </FormWrapper>
    </BodyWrapper>
  )
}

export default SignUpForm

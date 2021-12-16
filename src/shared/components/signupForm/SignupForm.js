import React from 'react'

import {message} from 'antd'
import {Form} from 'react-final-form'
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

const onSubmit = (values) => {
  console.log(values)
}

const validate = FormValidator.make({
  email: 'required|email',
  password: 'required',
  firstName: 'required',
  lastName: 'required',
  postalCode: 'required'
})

const SignUpForm = () => {
  const history = useHistory()
  const SignUpResponse = async (data) => {
    try {
      const response = await SignUp(data)

      if (response.success) {
        history.push('/')
      }
    } catch (e) {
      console.error(e)
    }
  }

  const failure = (error) => {
    message.error({
      content: `${error}`,
      className: 'custom-class',
      style: {
        marginTop: '20vh'
      },
      maxCount: 1
    })
  }

  return (
    <BodyWrapper>
      <FormWrapper>
        <FormTitle>Sign up for PetAway</FormTitle>
        <Form
          onSubmit={SignUpResponse}
          validate={validate}
          render={({handleSubmit, submitting, values}) => (
            <FormContainer onSubmit={handleSubmit}>
              <InputField name='firstName'>
                {({input, meta}) => (
                  <InputWrapper>
                    <InputTitle>First Name</InputTitle>
                    <SignupInput {...input} type='text' meta={meta} />
                  </InputWrapper>
                )}
              </InputField>
              <InputField name='lastName'>
                {({input, meta}) => (
                  <InputWrapper>
                    <InputTitle>Last Name</InputTitle>
                    <SignupInput {...input} type='text' meta={meta} />
                  </InputWrapper>
                )}
              </InputField>
              <InputField name='postalCode'>
                {({input, meta}) => (
                  <InputWrapper>
                    <InputTitle>Postal Code</InputTitle>
                    <SignupInput {...input} type='text' meta={meta} />
                  </InputWrapper>
                )}
              </InputField>
              <InputField name='email'>
                {({input, meta}) => (
                  <InputWrapper>
                    <InputTitle>E-Mail</InputTitle>
                    <SignupInput {...input} type='text' meta={meta} />
                  </InputWrapper>
                )}
              </InputField>
              <InputField name='password'>
                {({input, meta}) => (
                  <InputWrapper>
                    <InputTitle>Create Password</InputTitle>
                    <PasswordInput {...input} meta={meta} />
                  </InputWrapper>
                )}
              </InputField>
              <Disclaimer>
                By signing in or signing up, I agree to PetAway.com's{' '}
                <DisclaimerLinks>Terms of Service</DisclaimerLinks> and{' '}
                <DisclaimerLinks>Privacy Policy</DisclaimerLinks>, confirm
                that I am 18 years of age or older, and consent to
                receiving email communication.
              </Disclaimer>
              <ButtonContainer>
                <SignUpButton disabled={submitting}>Sign Up</SignUpButton>
              </ButtonContainer>
              <pre>{JSON.stringify(values, 0, 2)}</pre>
            </FormContainer>
          )}
        />
        <Separator />
        <LoginRedirect>
          Already have a PetAway account?{' '}
          <LoginRedirectLink href='/login'>Sign in now.</LoginRedirectLink>
        </LoginRedirect>
      </FormWrapper>
    </BodyWrapper>
  )
}

export default SignUpForm

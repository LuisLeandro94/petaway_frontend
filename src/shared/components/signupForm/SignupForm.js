import React from 'react'

import {Form} from 'react-final-form'

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

const validate = (values) => {
  if (!values) {
    console.log('erro')
  } else {
    console.log('ok')
  }
}

const SignUpForm = () => (
  <BodyWrapper>
    <FormWrapper>
      <FormTitle>Sign up for PetAway</FormTitle>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({handleSubmit, submitting}) => (
          <FormContainer onSubmit={handleSubmit}>
            <InputWrapper>
              <InputTitle>First Name</InputTitle>
              <InputField
                name='firstName'
                component={SignupInput}
                type='text'
              />
            </InputWrapper>
            <InputWrapper>
              <InputTitle>Last Name</InputTitle>
              <InputField
                name='lastName'
                component={SignupInput}
                type='text'
              />
            </InputWrapper>
            <InputWrapper>
              <InputTitle>Postal Code</InputTitle>
              <InputField
                name='postalCode'
                component={SignupInput}
                type='text'
              />
            </InputWrapper>
            <InputWrapper>
              <InputTitle>E-Mail</InputTitle>
              <InputField
                name='email'
                component={SignupInput}
                type='text'
              />
            </InputWrapper>
            <InputWrapper>
              <InputTitle>Create Password</InputTitle>
              <InputField
                name='password'
                component={PasswordInput}
                type='text'
              />
            </InputWrapper>
            <Disclaimer>
              By signing in or signing up, I agree to PetAway.com's{' '}
              <DisclaimerLinks>Terms of Service</DisclaimerLinks> and{' '}
              <DisclaimerLinks>Privacy Policy</DisclaimerLinks>, confirm
              that I am 18 years of age or older, and consent to receiving
              email communication.
            </Disclaimer>
            <ButtonContainer>
              <SignUpButton disabled={submitting}>Sign Up</SignUpButton>
            </ButtonContainer>
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

export default SignUpForm

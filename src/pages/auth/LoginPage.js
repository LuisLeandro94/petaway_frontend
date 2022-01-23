import React from 'react'

import {sha256} from 'js-sha256'
import {values} from 'lodash'
import {PropTypes} from 'prop-types'
import {Field, Form} from 'react-final-form'
import {Translate, withLocalize} from 'react-localize-redux'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router'

import {AuthTokenKey} from '../../infra/config/LocalStorageKeys'
import {Login} from '../../infra/requests/AuthRequests'
import {GetUserByJwt} from '../../infra/requests/UserRequests'
import FormValidator from '../../infra/services/validations/FormValidator'
import {userSave} from '../../redux/data/user/UserActions'
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

const LoginPage = ({translate}) => {
  const formData = {}
  const history = useHistory()
  const dispatch = useDispatch()

  const LoginResponse = async (response) => {
    try {
      const pwd = sha256(response.password + process.env.SECRET)
      const userValues = {
        ...response,
        password: pwd
      }
      const result = await Login(userValues)

      if (result.success) {
        localStorage.setItem(AuthTokenKey, result.data.result)
        const GetUser = async () => {
          const {data, success} = await GetUserByJwt()

          if (success) {
            dispatch(userSave(data.result))
            localStorage.setItem('user', JSON.stringify(data.result))
          }
        }
        GetUser()
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
                      <InputTitle>
                        <Translate id='EMAIL' />
                      </InputTitle>
                      <LoginInput
                        {...input}
                        type='text'
                        placeholder={translate('EMAIL')}
                        meta={meta}
                      />
                    </InputContainer>
                  )}
                </Field>
                <Field name='password'>
                  {({input, meta}) => (
                    <InputContainer>
                      <InputTitle>
                        <Translate id='PASSWORD' />
                      </InputTitle>
                      <PasswordInput
                        {...input}
                        type='password'
                        placeholder={translate('PASSWORD')}
                        meta={meta}
                      />
                    </InputContainer>
                  )}
                </Field>
                <ButtonContainer>
                  <SignInButton type='submit' disabled={submitting}>
                    <Translate id='SIGNIN' />
                  </SignInButton>
                </ButtonContainer>
              </FormContainer>
            )}
          />
          <Disclaimer>
            <Translate id='TERMS1' />{' '}
            <DisclaimerLinks href='/'>
              <Translate id='TERMS2' />
            </DisclaimerLinks>{' '}
            <Translate id='TERMS3' />{' '}
            <DisclaimerLinks href='/'>
              <Translate id='TERMS4' />
            </DisclaimerLinks>
            <Translate id='TERMS5' />
          </Disclaimer>
          <ForgotPassword href='/'>
            <Translate id='FORGOT_PASSWORD' />
          </ForgotPassword>
          <Separator />
          <LoginRedirect>
            <Translate id='NO_ACCOUNT' />{' '}
            <LoginRedirectLink href='/signup'>
              <Translate id='SIGNUP_NOW' />
            </LoginRedirectLink>
          </LoginRedirect>
        </FormWrapper>
      </Container>
    </>
  )
}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default withLocalize(LoginPage)

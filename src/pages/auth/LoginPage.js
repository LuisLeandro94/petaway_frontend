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
  FormWrapper,
  InputContainer,
  InputTitle,
  LoginInput,
  PasswordInput,
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
            render={({handleSubmit}) => (
              <form onSubmit={handleSubmit}>
                <Title>
                  <Translate id='LOGIN_TITLE' />
                </Title>
                <InputContainer>
                  <InputTitle>E-mail</InputTitle>
                  <Field name='email' component='input' />
                </InputContainer>
                <InputContainer>
                  <InputTitle>Password</InputTitle>
                  <Field name='password' component='input' />
                </InputContainer>
                <ButtonContainer>
                  <SignInButton type='submit'>Sign In</SignInButton>
                </ButtonContainer>
              </form>
            )}
          />
        </FormWrapper>
      </Container>
    </>
  )
}

export default LoginPage

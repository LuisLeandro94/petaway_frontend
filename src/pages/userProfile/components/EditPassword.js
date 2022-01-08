import React, {useEffect, useState} from 'react'

import {Input} from 'antd'
import {Field, Form} from 'react-final-form'

import {EditUser, GetUserByJwt} from '../../../infra/requests/UserRequests'
import {
  ButtonContainer,
  Container,
  FormWrapper,
  HalfScreen,
  PasswordWrapper,
  Separator,
  SubmitButton,
  Title
} from './EditInfoStyles'

const EditPassword = () => {
  const [user, setUser] = useState({})

  useEffect(() => {
    GetUserByJwt().then((result) => setUser(result.data.result))
  }, [])

  const UserEdit = (values) => {
    try {
      EditPassword(values.password)
      window.location.reload(false)
    } catch (e) {
      console.error(e)
    }
  }

  const required = (value) => (value ? undefined : 'Required')
  const minValue = (min) => (value) =>
    isNaN(value) || value >= min
      ? undefined
      : `Should be at least ${min} characters long`
  const composeValidators =
    (...validators) =>
    (value) =>
      validators.reduce(
        (error, validator) => error || validator(value),
        undefined
      )

  return (
    <PasswordWrapper>
      <Container>
        <Form
          style={{margin: '20px'}}
          onSubmit={UserEdit}
          render={({handleSubmit, submitting, form, values}) => (
            <FormWrapper
              onSubmit={async (event) => {
                await handleSubmit(event)
                form.reset()
              }}
            >
              <HalfScreen>
                <Field name='email'>
                  {({input, meta}) => (
                    <>
                      <Title>E-Mail</Title>
                      <Input
                        {...input}
                        type='text'
                        value={user.email}
                        disabled
                      />
                      {meta.error && meta.touched && (
                        <span>{meta.error}</span>
                      )}
                    </>
                  )}
                </Field>
                <Separator />
                <Field name='current_password' validate={required}>
                  {({input, meta}) => (
                    <>
                      <Title>Password</Title>
                      <Input
                        {...input}
                        type='text'
                        placeholder='Current Password'
                      />
                      {meta.error && meta.touched && (
                        <span>{meta.error}</span>
                      )}
                    </>
                  )}
                </Field>
                <Separator />
                <Field name='password'>
                  {({input, meta}) => (
                    <>
                      <Title>New Password</Title>
                      <Input
                        {...input}
                        type='text'
                        placeholder='New Password'
                      />
                      {meta.error && meta.touched && (
                        <span>{meta.error}</span>
                      )}
                    </>
                  )}
                </Field>
                <Separator />
                <Field name='confirm_password'>
                  {({input, meta}) => (
                    <>
                      <Title>Confirm Password</Title>
                      <Input
                        {...input}
                        type='text'
                        placeholder='Confirm Password'
                      />
                      {meta.error && meta.touched && (
                        <span>{meta.error}</span>
                      )}
                    </>
                  )}
                </Field>
              </HalfScreen>
              <ButtonContainer>
                <SubmitButton disabled={submitting}>Submit</SubmitButton>
              </ButtonContainer>
              <pre>{JSON.stringify(values, 0, 2)}</pre>
            </FormWrapper>
          )}
        />
      </Container>
    </PasswordWrapper>
  )
}

export default EditPassword

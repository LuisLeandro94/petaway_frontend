import React, {useEffect, useState} from 'react'

import {Input} from 'antd'
import {Field, Form} from 'react-final-form'

import {EditPwd, GetUserByJwt} from '../../../infra/requests/UserRequests'
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

  const PasswordEdit = (values) => {
    try {
      if (
        values.password !== values.confirm_password &&
        values.current_password === user.password
      ) {
        alert("Passwords don't match")
        return
      }
      const pwd = {
        password: values.password
      }
      EditPwd(pwd).then((res) => {
        if (res.data.success) {
          window.location.reload(false)
        }
      })
    } catch (e) {
      console.error(e)
    }
  }

  const required = (value) => (value ? undefined : 'Required')
  const minValue = (min) => (value) =>
    value >= min ? undefined : `Should be at least ${min} characters long`
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
          onSubmit={PasswordEdit}
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
                <Field
                  name='current_password'
                  validate={composeValidators(required, minValue(9))}
                >
                  {({input, meta}) => (
                    <>
                      <Title>Password</Title>
                      <Input.Password
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
                <Field
                  name='password'
                  validate={composeValidators(required, minValue(9))}
                >
                  {({input, meta}) => (
                    <>
                      <Title>New Password</Title>
                      <Input.Password
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
                <Field
                  name='confirm_password'
                  validate={composeValidators(required, minValue(9))}
                >
                  {({input, meta}) => (
                    <>
                      <Title>Confirm Password</Title>
                      <Input.Password
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
            </FormWrapper>
          )}
        />
      </Container>
    </PasswordWrapper>
  )
}

export default EditPassword

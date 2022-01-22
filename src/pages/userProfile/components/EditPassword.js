import React, {useEffect, useState} from 'react'

import {Input} from 'antd'
import {Field, Form} from 'react-final-form'
import {Translate, withLocalize} from 'react-localize-redux'

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

const EditPassword = ({translate}) => {
  const [user, setUser] = useState({})

  useEffect(() => {
    GetUserByJwt().then((result) => setUser(result.data.result))
  }, [])

  const PasswordEdit = (values) => {
    try {
      if (values.password !== values.confirm_password) {
        alert(translate('PASSWORDS_NO_MATCH'))
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

  const required = (value) => (value ? undefined : translate('REQUIRED'))
  const minValue = (min) => (value) =>
    value >= min
      ? undefined
      : `${translate('MIN_CHARS_1')} ${min} ${translate('MIN_CHARS_2')}`
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
          render={({handleSubmit, submitting, form}) => (
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
                      <Title>
                        <Translate id='EMAIL' />
                      </Title>
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
                  name='password'
                  validate={composeValidators(required, minValue(9))}
                >
                  {({input, meta}) => (
                    <>
                      <Title>
                        <Translate id='NEW_PASSWORD' />
                      </Title>
                      <Input.Password
                        {...input}
                        type='text'
                        placeholder={translate('NEW_PASSWORD')}
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
                      <Title>
                        <Translate id='CONFIRM_PASSWORD' />
                      </Title>
                      <Input.Password
                        {...input}
                        type='text'
                        placeholder={translate('CONFIRM_PASSWORD')}
                      />
                      {meta.error && meta.touched && (
                        <span>{meta.error}</span>
                      )}
                    </>
                  )}
                </Field>
              </HalfScreen>
              <ButtonContainer>
                <SubmitButton disabled={submitting}>
                  <Translate id='SUBMIT' />
                </SubmitButton>
              </ButtonContainer>
            </FormWrapper>
          )}
        />
      </Container>
    </PasswordWrapper>
  )
}

export default withLocalize(EditPassword)

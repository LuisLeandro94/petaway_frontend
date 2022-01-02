import React, {useEffect, useState} from 'react'

import {Input, message} from 'antd'
import {Field, Form} from 'react-final-form'

import {EditUser, GetUserByJwt} from '../../../infra/requests/UserRequests'
import {
  ButtonContainer,
  Container,
  FormWrapper,
  Separator,
  SubmitButton,
  Title,
  Wrapper
} from './EditInfoStyles'
import FileField from './FileFieldInput'

const EditInfo = () => {
  const [user, setUser] = useState({})

  useEffect(() => {
    GetUserByJwt().then((result) => setUser(result.data.result))
  }, [])
  console.log(user)

  const UserEdit = (values) => {
    try {
      EditUser(values)
      window.location.reload(false)
    } catch (e) {
      console.error(e)
    }
  }

  const validate = (values) => {
    if (!values) {
      return console.log('ERRO')
    }
    return console.log(values)
  }

  return (
    <Wrapper>
      <Container>
        <Form
          style={{margin: '20px'}}
          onSubmit={UserEdit}
          validate={validate}
          render={({handleSubmit, submitting, form}) => (
            <FormWrapper
              onSubmit={async (event) => {
                await handleSubmit(event)
                form.reset()
              }}
            >
              {/* profilePhoto must be object */}
              {/* <Field name='profilePhoto' component={FileField} /> */}
              <Field name='profilePhoto'>
                {({input, meta}) => (
                  <>
                    <Title>Profile Photo</Title>
                    <Input
                      {...input}
                      type='text'
                      placeholder={user.userData?.profilePhoto}
                    />
                    {meta.error && meta.touched && (
                      <span>{meta.error}</span>
                    )}
                  </>
                )}
              </Field>
              <Separator />
              <Field name='firstName'>
                {({input, meta}) => (
                  <>
                    <Title>First Name</Title>
                    <Input
                      {...input}
                      type='text'
                      placeholder={user.userData?.firstName}
                    />
                    {meta.error && meta.touched && (
                      <span>{meta.error}</span>
                    )}
                  </>
                )}
              </Field>
              <Separator />
              <Field name='lastName'>
                {({input, meta}) => (
                  <>
                    <Title>Last Name</Title>
                    <Input
                      {...input}
                      type='text'
                      placeholder={user.userData?.lastName}
                    />
                    {meta.error && meta.touched && (
                      <span>{meta.error}</span>
                    )}
                  </>
                )}
              </Field>
              <Separator />
              <Field name='email'>
                {({input, meta}) => (
                  <>
                    <Title>E-Mail</Title>
                    <Input
                      {...input}
                      type='text'
                      placeholder={user.email}
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
                    <Title>Password</Title>
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
              <Field name='address_1'>
                {({input, meta}) => (
                  <>
                    <Title>Address Line 1</Title>
                    <Input
                      {...input}
                      type='text'
                      placeholder={user.userData?.address_1}
                    />
                    {meta.error && meta.touched && (
                      <span>{meta.error}</span>
                    )}
                  </>
                )}
              </Field>
              <Separator />
              <Field name='address_2'>
                {({input, meta}) => (
                  <>
                    <Title>Address Line 2</Title>
                    <Input
                      {...input}
                      type='text'
                      placeholder={user.userData?.address_2}
                    />
                    {meta.error && meta.touched && (
                      <span>{meta.error}</span>
                    )}
                  </>
                )}
              </Field>
              <Separator />
              <Field name='city'>
                {({input, meta}) => (
                  <>
                    <Title>City</Title>
                    <Input
                      {...input}
                      type='text'
                      placeholder={user.userData?.city}
                    />
                    {meta.error && meta.touched && (
                      <span>{meta.error}</span>
                    )}
                  </>
                )}
              </Field>
              <Separator />
              <Field name='state'>
                {({input, meta}) => (
                  <>
                    <Title>State</Title>
                    <Input
                      {...input}
                      type='text'
                      placeholder={user.userData?.state}
                    />
                    {meta.error && meta.touched && (
                      <span>{meta.error}</span>
                    )}
                  </>
                )}
              </Field>
              <Separator />
              <Field name='zip'>
                {({input, meta}) => (
                  <>
                    <Title>Zip Code</Title>
                    <Input
                      {...input}
                      type='text'
                      placeholder={user.userData?.zip}
                    />
                    {meta.error && meta.touched && (
                      <span>{meta.error}</span>
                    )}
                  </>
                )}
              </Field>
              <Separator />
              <Field name='country'>
                {({input, meta}) => (
                  <>
                    <Title>Country</Title>
                    <Input
                      {...input}
                      type='text'
                      placeholder={user.userData?.country}
                    />
                    {meta.error && meta.touched && (
                      <span>{meta.error}</span>
                    )}
                  </>
                )}
              </Field>
              <Separator />
              <Field name='birthdate'>
                {({input, meta}) => (
                  <>
                    <Title>Birthdate</Title>
                    <Input
                      {...input}
                      type='text'
                      placeholder={user.userData?.birthdate}
                    />
                    {meta.error && meta.touched && (
                      <span>{meta.error}</span>
                    )}
                  </>
                )}
              </Field>
              <Separator />
              <Field name='phoneNumber'>
                {({input, meta}) => (
                  <>
                    <Title>Phone Number</Title>
                    <Input
                      {...input}
                      type='text'
                      placeholder={user.userData?.phoneNumber}
                    />
                    {meta.error && meta.touched && (
                      <span>{meta.error}</span>
                    )}
                  </>
                )}
              </Field>
              <ButtonContainer>
                <SubmitButton disabled={submitting}>Submit</SubmitButton>
              </ButtonContainer>
            </FormWrapper>
          )}
        />
      </Container>
    </Wrapper>
  )
}

export default EditInfo

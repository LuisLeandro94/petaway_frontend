import React, {useEffect, useState} from 'react'

import {Input} from 'antd'
import FileBase64 from 'react-file-base64'
import {Field, Form} from 'react-final-form'

import {EditUser, GetUserByJwt} from '../../../infra/requests/UserRequests'
import {
  ButtonContainer,
  Container,
  FormWrapper,
  HalfScreen,
  PictureFramer,
  Separator,
  SubmitButton,
  Title,
  Wrapper
} from './EditInfoStyles'
import FileField from './FileFieldInput'

const EditInfo = () => {
  const [user, setUser] = useState({})
  const [file, setFile] = useState([])

  useEffect(() => {
    GetUserByJwt().then((result) => setUser(result.data.result))
  }, [])
  console.log(user)
  console.log(file)

  const UserEdit = (values) => {
    try {
      debugger
      const userValues = {
        profilePhoto: file.base64,
        ...values
      }
      EditUser(userValues).then((res) => {
        if (res.data.success) {
          window.location.reload(false)
        }
      })
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
          render={({handleSubmit, submitting, form, values}) => (
            <FormWrapper
              onSubmit={async (event) => {
                await handleSubmit(event)
                form.reset()
              }}
            >
              <PictureFramer>
                <Field name='profilePhoto'>
                  {({input, meta}) => (
                    <FileBase64
                      {...input}
                      multiple={false}
                      value={user.profilePhoto}
                      onDone={setFile}
                    />
                  )}
                </Field>
                <Separator />
              </PictureFramer>
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
                <Field name='firstName'>
                  {({input, meta}) => (
                    <>
                      <Title>First Name</Title>
                      <Input
                        {...input}
                        type='text'
                        placeholder={user.userData?.firstName}
                        value={user.userData?.firstName}
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
                        value={user.userData?.lastName}
                      />
                      {meta.error && meta.touched && (
                        <span>{meta.error}</span>
                      )}
                    </>
                  )}
                </Field>
                {/* <Separator />
                <Field name='password'>
                  {({input, meta}) => (
                    <>
                      <Title>Password</Title>
                      <Input
                        {...input}
                        type='password'
                        placeholder='New Password'
                      />
                      {meta.error && meta.touched && (
                        <span>{meta.error}</span>
                      )}
                    </>
                  )}
                </Field> */}
                <Separator />
              </HalfScreen>
              <HalfScreen>
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
                        value={user.userData?.zip}
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
              </HalfScreen>
              <ButtonContainer>
                <SubmitButton disabled={submitting}>Submit</SubmitButton>
              </ButtonContainer>
              <pre>{JSON.stringify(values, 0, 2)}</pre>
            </FormWrapper>
          )}
        />
      </Container>
    </Wrapper>
  )
}

export default EditInfo

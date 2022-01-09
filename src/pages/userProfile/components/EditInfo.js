import React, {useEffect, useState} from 'react'

import {Input} from 'antd'
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
  const [file, setFile] = useState(null)
  const [base64URL, setBase64URL] = useState('')

  useEffect(() => {
    GetUserByJwt().then((result) => setUser(result.data.result))
  }, [])
  console.log(user)

  const UserEdit = (values) => {
    try {
      EditUser(values).then((res) => {
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

  const getBase64 = (files) =>
    new Promise((resolve) => {
      let fileInfo
      let baseURL = ''
      // Criar o FileReader
      const reader = new FileReader()

      // Converter pra b64
      reader.readAsDataURL(files)

      // Dar load
      reader.onload = () => {
        // Criar o objeto
        console.log('Called', reader)
        baseURL = reader.result
        console.log(baseURL)
        resolve(baseURL)
      }
      console.log(fileInfo)
    })

  const handleFileInputChange = (e) => {
    debugger
    console.log(e.target.files[0])

    setFile(e.target.files[0])

    getBase64(file)
      .then((result) => {
        file.base64 = result
        console.log('File Is', file)
        setBase64URL(result.path)
      })
      .catch((err) => {
        console.log(err)
      })

    setFile(e.target.files[0])
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
                {/* profilePhoto must be object */}
                {/* <Field
                  name='profilePhoto'
                  component={FileField}
                  onChange={handleFileInputChange}
                /> */}
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

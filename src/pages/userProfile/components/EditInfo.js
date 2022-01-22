import React, {useState} from 'react'

import {Input} from 'antd'
import {PropTypes} from 'prop-types'
import FileBase64 from 'react-file-base64'
import {Field, Form} from 'react-final-form'
import {Translate} from 'react-localize-redux'

import {EditUser} from '../../../infra/requests/UserRequests'
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

const EditInfo = ({user}) => {
  const [file, setFile] = useState([])

  const UserEdit = (values) => {
    try {
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

  const formData = {
    firstName: user?.userData?.firstName,
    lastName: user?.userData?.lastName,
    address_1: user?.userData?.address_1,
    address_2: user?.userData?.address_2,
    city: user?.userData?.city,
    state: user?.userData?.state,
    zip: user?.userData?.zip,
    country: user?.userData?.country,
    birthdate: user?.userData?.birthdate,
    phoneNumber: user?.userData?.phoneNumber
  }

  return (
    <Wrapper>
      <Container>
        <Form
          style={{margin: '20px'}}
          onSubmit={UserEdit}
          validate={validate}
          initialValues={formData}
          render={({handleSubmit, submitting, form}) => (
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
                      meta={meta}
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
                <Field name='firstName'>
                  {({input, meta}) => (
                    <>
                      <Title>
                        <Translate id='FIRST_NAME' />
                      </Title>
                      <Input
                        {...input}
                        type='text'
                        value={input.value}
                        onChange={input.onChange}
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
                      <Title>
                        <Translate id='LAST_NAME' />
                      </Title>
                      <Input
                        {...input}
                        type='text'
                        value={input.value}
                        onChange={input.onChange}
                      />
                      {meta.error && meta.touched && (
                        <span>{meta.error}</span>
                      )}
                    </>
                  )}
                </Field>
                <Separator />
              </HalfScreen>
              <HalfScreen>
                <Field name='address_1'>
                  {({input, meta}) => (
                    <>
                      <Title>
                        <Translate id='ADDRESS_LINE_1' />
                      </Title>
                      <Input
                        {...input}
                        type='text'
                        value={input.value}
                        onChange={input.onChange}
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
                      <Title>
                        <Translate id='ADDRESS_LINE_2' />
                      </Title>
                      <Input
                        {...input}
                        type='text'
                        value={input.value}
                        onChange={input.onChange}
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
                      <Title>
                        <Translate id='CITY' />
                      </Title>
                      <Input
                        {...input}
                        type='text'
                        value={input.value}
                        onChange={input.onChange}
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
                      <Title>
                        <Translate id='STATE' />
                      </Title>
                      <Input
                        {...input}
                        type='text'
                        value={input.value}
                        onChange={input.onChange}
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
                      <Title>
                        <Translate id='ZIP_CODE' />
                      </Title>
                      <Input
                        {...input}
                        type='text'
                        value={input.value}
                        onChange={input.onChange}
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
                      <Title>
                        <Translate id='COUNTRY' />
                      </Title>
                      <Input
                        {...input}
                        type='text'
                        value={input.value}
                        onChange={input.onChange}
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
                      <Title>
                        <Translate id='BIRTHDATE' />
                      </Title>
                      <Input
                        {...input}
                        type='text'
                        value={input.value}
                        onChange={input.onChange}
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
                      <Title>
                        <Translate id='PHONE_NUMBER' />
                      </Title>
                      <Input
                        {...input}
                        type='text'
                        value={input.value}
                        onChange={input.onChange}
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
    </Wrapper>
  )
}

EditInfo.propTypes = {
  user: PropTypes.object.isRequired
}

export default EditInfo

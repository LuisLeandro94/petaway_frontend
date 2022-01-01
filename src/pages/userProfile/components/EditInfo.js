import React from 'react'

import {Input} from 'antd'
import {Field, Form} from 'react-final-form'

import {User, UserData} from '../../../shared/mockup/Mockup'
import {
  Container,
  FormWrapper,
  Separator,
  Title,
  Wrapper
} from './EditInfoStyles'
import FileField from './FileFieldInput'

const EditInfo = () => {
  const submitFunc = (values) => {
    User.email = values.email
    User.firstName = values.firstName
    User.lastName = values.lastName
    User.password = values.password
    UserData.address1 = values.address1
    UserData.address2 = values.address2
    UserData.birthdate = values.birthdate
    UserData.city = values.city
    UserData.country = values.country
    UserData.phoneNumber = values.phoneNumber
    UserData.profilePicture = values.profilePicture[0].path
    UserData.state = values.state
    UserData.zipCode = values.zipCode
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
          onSubmit={submitFunc}
          validate={validate}
          render={({handleSubmit, submitting}) => (
            <FormWrapper onSubmit={handleSubmit}>
              <Field name='profilePicture' component={FileField} />
              <Separator />
              <Title>First Name</Title>
              <Field
                name='firstName'
                component={Input}
                placeholder={User.firstName}
              />
              <Separator />
              <Title>Last Name</Title>
              <Field
                name='lastName'
                component={Input}
                placeholder={User.lastName}
              />
              <Separator />
              <Title>E-Mail</Title>
              <Field
                name='email'
                component={Input}
                placeholder={User.email}
              />
              <Separator />
              <Title>Password</Title>
              <Field
                component={Input.Password}
                name='password'
                placeholder='New Password'
              />
              <Separator />
              <Title>Address Line 1</Title>
              <Field
                component={Input}
                name='address1'
                placeholder={UserData.address1}
              />
              <Separator />
              <Title>Address Line 2</Title>
              <Field
                component={Input}
                name='address2'
                placeholder={UserData.address2}
              />
              <Separator />
              <Title>City</Title>
              <Field
                component={Input}
                name='city'
                placeholder={UserData.city}
              />
              <Separator />
              <Title>State</Title>
              <Field
                component={Input}
                name='state'
                placeholder={UserData.state}
              />
              <Separator />
              <Title>Zip Code</Title>
              <Field
                component={Input}
                name='zipCode'
                placeholder={UserData.zipCode}
              />
              <Separator />
              <Title>Address Line 1</Title>
              <Field
                component={Input}
                name='country'
                placeholder={UserData.country}
              />
              <Separator />
              <Title>Birth Date</Title>
              <Field
                component={Input}
                name='birthdate'
                placeholder={UserData.birthdate}
              />
              <Separator />
              <Title>Phone Number</Title>
              <Field
                component={Input}
                name='phoneNumber'
                placeholder={UserData.phoneNumber}
              />
            </FormWrapper>
          )}
        />
      </Container>
    </Wrapper>
  )
}

export default EditInfo

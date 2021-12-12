import React from 'react'

import {User, UserData} from '../../../shared/mockup/Mockup'
import {
  BlackText,
  Wrapper,
  Text,
  EachFieldWrapper,
  Title
} from './PersonalInfoStyles'

const PersonalInfo = () => (
  <>
    <Wrapper>
      <EachFieldWrapper>
        <Title>Personal Information</Title>
      </EachFieldWrapper>
      <EachFieldWrapper>
        <BlackText>First Name</BlackText>
        <Text>{User.firstName}</Text>
      </EachFieldWrapper>
      <EachFieldWrapper>
        <BlackText>Last Name</BlackText>
        <Text>{User.lastName}</Text>
      </EachFieldWrapper>
      <EachFieldWrapper>
        <BlackText>E-mail</BlackText>
        <Text>{User.email}</Text>
      </EachFieldWrapper>
      <EachFieldWrapper>
        <BlackText>Birth Date</BlackText>
        <Text>{UserData.birthdate}</Text>
      </EachFieldWrapper>
      <EachFieldWrapper>
        <BlackText>Phone Number</BlackText>
        <Text>{UserData.phoneNumber}</Text>
      </EachFieldWrapper>
    </Wrapper>
    <Wrapper>
      <EachFieldWrapper>
        <Title>Address</Title>
      </EachFieldWrapper>
      <EachFieldWrapper>
        <BlackText>Address Line 1</BlackText>
        <Text>{UserData.address1}</Text>
      </EachFieldWrapper>
      <EachFieldWrapper>
        <BlackText>Address Line 2</BlackText>
        <Text>
          {UserData.address2}, {UserData.zipCode}
        </Text>
      </EachFieldWrapper>
      <EachFieldWrapper>
        <BlackText>City</BlackText>
        <Text>{UserData.city}</Text>
      </EachFieldWrapper>
      <EachFieldWrapper>
        <BlackText>State</BlackText>
        <Text>{UserData.state}</Text>
      </EachFieldWrapper>
      <EachFieldWrapper>
        <BlackText>Country</BlackText>
        <Text>{UserData.country}</Text>
      </EachFieldWrapper>
    </Wrapper>
  </>
)

export default PersonalInfo

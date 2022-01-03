import React from 'react'

import {
  BlackText,
  Wrapper,
  Text,
  EachFieldWrapper,
  Title
} from './PersonalInfoStyles'

const PersonalInfo = ({user}) => (
  <>
    <Wrapper>
      <EachFieldWrapper>
        <Title>Personal Information</Title>
      </EachFieldWrapper>
      <EachFieldWrapper>
        <BlackText>First Name</BlackText>
        <Text>{user.userData?.firstName}</Text>
      </EachFieldWrapper>
      <EachFieldWrapper>
        <BlackText>Last Name</BlackText>
        <Text>{user.userData?.lastName}</Text>
      </EachFieldWrapper>
      <EachFieldWrapper>
        <BlackText>E-mail</BlackText>
        <Text>{user.email}</Text>
      </EachFieldWrapper>
      <EachFieldWrapper>
        <BlackText>Birth Date</BlackText>
        <Text>{user.userData?.birthdate}</Text>
      </EachFieldWrapper>
      <EachFieldWrapper>
        <BlackText>Phone Number</BlackText>
        <Text>{user.userData?.phoneNumber}</Text>
      </EachFieldWrapper>
    </Wrapper>
    <Wrapper>
      <EachFieldWrapper>
        <Title>Address</Title>
      </EachFieldWrapper>
      <EachFieldWrapper>
        <BlackText>Address Line 1</BlackText>
        <Text>{user.userData?.address1}</Text>
      </EachFieldWrapper>
      <EachFieldWrapper>
        <BlackText>Address Line 2</BlackText>
        <Text>
          {user.userData?.address2}, {user.userData?.zip}
        </Text>
      </EachFieldWrapper>
      <EachFieldWrapper>
        <BlackText>City</BlackText>
        <Text>{user.userData?.city}</Text>
      </EachFieldWrapper>
      <EachFieldWrapper>
        <BlackText>State</BlackText>
        <Text>{user.userData?.state}</Text>
      </EachFieldWrapper>
      <EachFieldWrapper>
        <BlackText>Country</BlackText>
        <Text>{user.userData?.country}</Text>
      </EachFieldWrapper>
    </Wrapper>
  </>
)

export default PersonalInfo

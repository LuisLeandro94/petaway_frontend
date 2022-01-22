import React from 'react'

import {PropTypes} from 'prop-types'
import {Translate} from 'react-localize-redux'

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
        <Title>
          <Translate id='PERSONAL_INFORMATION' />
        </Title>
      </EachFieldWrapper>
      <EachFieldWrapper>
        <BlackText>
          <Translate id='FIRST_NAME' />
        </BlackText>
        <Text>{user.userData?.firstName}</Text>
      </EachFieldWrapper>
      <EachFieldWrapper>
        <BlackText>
          <Translate id='LAST_NAME' />
        </BlackText>
        <Text>{user.userData?.lastName}</Text>
      </EachFieldWrapper>
      <EachFieldWrapper>
        <BlackText>
          <Translate id='EMAIL' />
        </BlackText>
        <Text>{user.email}</Text>
      </EachFieldWrapper>
      <EachFieldWrapper>
        <BlackText>
          <Translate id='BIRTHDATE' />
        </BlackText>
        <Text>{user.userData?.birthdate}</Text>
      </EachFieldWrapper>
      <EachFieldWrapper>
        <BlackText>
          <Translate id='PHONE_NUMBER' />
        </BlackText>
        <Text>{user.userData?.phoneNumber}</Text>
      </EachFieldWrapper>
    </Wrapper>
    <Wrapper>
      <EachFieldWrapper>
        <Title>
          <Translate id='ADDRESS' />
        </Title>
      </EachFieldWrapper>
      <EachFieldWrapper>
        <BlackText>
          <Translate id='ADDRESS_LINE_1' />
        </BlackText>
        <Text>{user.userData?.address_1}</Text>
      </EachFieldWrapper>
      <EachFieldWrapper>
        <BlackText>
          <Translate id='ADDRESS_LINE_2' />
        </BlackText>
        <Text>
          {user.userData?.address_2}, {user.userData?.zip}
        </Text>
      </EachFieldWrapper>
      <EachFieldWrapper>
        <BlackText>
          <Translate id='CITY' />
        </BlackText>
        <Text>{user.userData?.city}</Text>
      </EachFieldWrapper>
      <EachFieldWrapper>
        <BlackText>
          <Translate id='STATE' />
        </BlackText>
        <Text>{user.userData?.state}</Text>
      </EachFieldWrapper>
      <EachFieldWrapper>
        <BlackText>
          <Translate id='COUNTRY' />
        </BlackText>
        <Text>{user.userData?.country}</Text>
      </EachFieldWrapper>
    </Wrapper>
  </>
)

PersonalInfo.propTypes = {
  user: PropTypes.object.isRequired
}

export default PersonalInfo

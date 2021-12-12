import React, {useState} from 'react'

import {EditOutlined, UserOutlined} from '@ant-design/icons'
import {Avatar, Button} from 'antd'

import {User, UserData} from '../../shared/mockup/Mockup'
import {PrimaryColor} from '../../shared/styles/_colors'
import PersonalInfo from './components/PersonalInfo'
import {
  Content,
  EditButton,
  EditButtonDiv,
  HalfPage,
  UserEmail,
  UserName,
  Wrapper
} from './UserProfileStyles'

const UserProfile = () => {
  const [edit, setEdit] = useState(false)
  return (
    <Content>
      <Wrapper>
        <HalfPage>
          <Avatar
            size={{xs: 100, sm: 100, md: 100, lg: 100, xl: 120, xxl: 140}}
            src={UserData.profilePicture}
            style={{border: `2px solid ${PrimaryColor}`}}
          />
          <UserName>
            {User.firstName} {User.lastName}
          </UserName>
          <UserEmail>{User.email}</UserEmail>
          <UserEmail>{UserData.country}</UserEmail>
          <EditButtonDiv>
            <EditButton type='primary' icon={<EditOutlined />}>
              Edit
            </EditButton>
          </EditButtonDiv>
        </HalfPage>
        <HalfPage>
          <PersonalInfo />
        </HalfPage>
      </Wrapper>
    </Content>
  )
}

export default UserProfile

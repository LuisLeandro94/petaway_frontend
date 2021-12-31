import React, {useEffect, useState} from 'react'

import {EditOutlined, UserOutlined} from '@ant-design/icons'
import {Avatar, Button} from 'antd'

import {GetUserByJwt} from '../../infra/requests/UserRequests'
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
  const [user, setUser] = useState({})

  useEffect(() => {
    GetUserByJwt().then((result) => setUser(result.data.result))
  }, [])

  return (
    <Content>
      {console.log(user)}
      <Wrapper>
        <HalfPage>
          <Avatar
            size={{xs: 100, sm: 100, md: 100, lg: 100, xl: 120, xxl: 140}}
            src={UserData.profilePicture}
            style={{border: `2px solid ${PrimaryColor}`}}
          />
          <UserName>
            {user.userData?.firstName} {user.userData?.lastName}
          </UserName>
          <UserEmail>{user.email}</UserEmail>
          <UserEmail>{user.userData?.country}</UserEmail>
          <EditButtonDiv>
            <EditButton type='primary' icon={<EditOutlined />}>
              Edit
            </EditButton>
          </EditButtonDiv>
        </HalfPage>
        <HalfPage>
          <PersonalInfo user={user} />
        </HalfPage>
      </Wrapper>
    </Content>
  )
}

export default UserProfile

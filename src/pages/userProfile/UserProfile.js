import React, {useEffect, useState} from 'react'

import {EditOutlined, UserOutlined} from '@ant-design/icons'
import {Menu, Avatar, Button} from 'antd'

import {GetUserByJwt} from '../../infra/requests/UserRequests'
import {User, UserData} from '../../shared/mockup/Mockup'
import {PrimaryColor} from '../../shared/styles/_colors'
import EditInfo from './components/EditInfo'
import EditPassword from './components/EditPassword'
import PersonalInfo from './components/PersonalInfo'
import {
  Content,
  EditButton,
  EditButtonDiv,
  HalfPage,
  MenuItem,
  MenuWrapper,
  UserEmail,
  UserName,
  Wrapper
} from './UserProfileStyles'

const UserProfile = () => {
  const [user, setUser] = useState({})
  const [currentPage, setCurrentPage] = useState(1)
  const [current, setCurrent] = useState('profile')

  useEffect(() => {
    GetUserByJwt().then((result) => setUser(result.data.result))
  }, [])

  const changePage = (page) => {
    setCurrentPage(page)
  }

  const handleClick = (e) => {
    console.log('click ', e)
    setCurrent(e.key)
  }

  return (
    <>
      <MenuWrapper>
        <Menu
          selectedKeys={[current]}
          onClick={handleClick}
          mode='horizontal'
          style={{
            marginTop: '95px',
            backgroundColor: '#f5f5f5',
            border: '#f5f5f5'
          }}
        >
          <MenuItem key='profile' onClick={() => changePage(1)}>
            Profile
          </MenuItem>
          <MenuItem key='edit' onClick={() => changePage(2)}>
            Edit Profile
          </MenuItem>
          <MenuItem key='password' onClick={() => changePage(3)}>
            Change Password
          </MenuItem>
        </Menu>
      </MenuWrapper>
      <Content>
        {currentPage === 1 && (
          <Wrapper>
            <HalfPage>
              <Avatar
                size={{
                  xs: 100,
                  sm: 100,
                  md: 100,
                  lg: 100,
                  xl: 120,
                  xxl: 140
                }}
                src={UserData.profilePicture}
                style={{border: `2px solid ${PrimaryColor}`}}
              />
              <UserName>
                {user.userData?.firstName} {user.userData?.lastName}
              </UserName>
              <UserEmail>{user.email}</UserEmail>
              <UserEmail>{user.userData?.country}</UserEmail>
            </HalfPage>
            <HalfPage>
              <PersonalInfo user={user} />
            </HalfPage>
          </Wrapper>
        )}
        {currentPage === 2 && <EditInfo />}
        {currentPage === 3 && <EditPassword />}
      </Content>
    </>
  )
}

export default UserProfile

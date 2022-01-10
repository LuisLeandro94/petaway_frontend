import React, {useEffect, useState} from 'react'

import {Menu, Avatar, Modal} from 'antd'
import {useHistory} from 'react-router'

import {AuthTokenKey} from '../../infra/config/LocalStorageKeys'
import {DeleteUser, GetUserByJwt} from '../../infra/requests/UserRequests'
import {UserData} from '../../shared/mockup/Mockup'
import {PrimaryColor} from '../../shared/styles/_colors'
import EditInfo from './components/EditInfo'
import EditPassword from './components/EditPassword'
import PersonalInfo from './components/PersonalInfo'
import {
  Content,
  DeletePopUp,
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
  const history = useHistory()

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

  const UserDelete = async () => {
    try {
      DeleteUser().then((res) => {
        if (res.success) {
          localStorage.setItem(AuthTokenKey, '@AUTH_TOKEN')
          history.push('/')
          window.location.reload(false)
        }
      })
    } catch (e) {
      console.error(e)
    }
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
          <MenuItem
            key='deleteUser'
            onClick={() => changePage(4)}
            style={{color: 'red', marginLeft: 'auto'}}
          >
            Delete User
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
        <DeletePopUp>
          <Modal
            title='Basic Modal'
            visible={currentPage === 4}
            onOk={UserDelete}
            onCancel={() => setCurrentPage(1)}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </DeletePopUp>
      </Content>
    </>
  )
}

export default UserProfile

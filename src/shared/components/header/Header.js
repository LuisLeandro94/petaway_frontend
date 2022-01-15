import React, {useEffect, useState} from 'react'

import {BellOutlined} from '@ant-design/icons'
import {MenuDivider} from '@szhsin/react-menu'
import '@szhsin/react-menu/dist/index.css'
import '@szhsin/react-menu/dist/transitions/slide.css'
import {Badge, Drawer} from 'antd'
import Modal from 'antd/lib/modal/Modal'
import {Translate} from 'react-localize-redux'
import {useHistory} from 'react-router'

import Heart from '../../../assets/Heart.png'
import PetAway from '../../../assets/logo.png'
import Paw from '../../../assets/Paw.png'
import Search from '../../../assets/Search.png'
import {AuthTokenKey} from '../../../infra/config/LocalStorageKeys'
import {GetUserByJwt} from '../../../infra/requests/UserRequests'
import {DarkGray} from '../../styles/_colors'
import MobileMenu from './components/MobileMenu'
import {
  Container,
  LinksList,
  LinksWrapper,
  ListItem,
  Logo,
  LogoContainer,
  LinkItem,
  ItemImage,
  OperationWrapper,
  Operations,
  Underline,
  HamburgerIcon,
  HamburgerContainer,
  UserWrapper,
  UserAvatar,
  Notifications,
  UserMenu,
  UserMenuListItem,
  GoBackBtn,
  GoToProfileBtn
} from './HeaderStyles'

const Header = () => {
  const [isOpen, setOpen] = useState(false)
  const [visible, setVisible] = useState(false)
  const [notification, setNotification] = useState(false)
  const [logged, setLogged] = useState(0)
  const [user, setUser] = useState({})
  const [filledFields, setFilledFields] = useState(false)
  const history = useHistory()
  const showDrawer = () => {
    setVisible(true)
  }

  useEffect(() => {
    const token = localStorage.getItem(AuthTokenKey)
    console.log(token)
    if (token !== null && token !== 'null') {
      setLogged(1)
      GetUserByJwt().then((result) => setUser(result.data.result))
    } else {
      setLogged(0)
    }
  }, [])

  const logoutAndRedirect = () => {
    localStorage.setItem(AuthTokenKey, 'null')
    history.push('/')
    window.location.reload(false)
  }

  const checkRequiredFields = () => {
    if (
      user.userData.address_1 != null &&
      user.userData.phoneNumber != null
    ) {
      history.push('/becomeWalker')
    } else {
      setFilledFields(!filledFields)
    }
  }

  const redirectToProfile = () => {
    history.push('/profile')
  }

  const closeAndStay = () => {
    setFilledFields(!filledFields)
  }

  return (
    <>
      <Modal
        title='Warning: Profile must be filled'
        visible={filledFields}
        onOk={redirectToProfile}
        onCancel={closeAndStay}
        footer={[
          <GoBackBtn key='back' onClick={closeAndStay}>
            Go Back
          </GoBackBtn>,
          <GoToProfileBtn
            key='submit'
            type='primary'
            onClick={redirectToProfile}
            style={{
              backgroundColor: '#00A6AA',
              borderColor: '#00A6AA'
            }}
          >
            Go To Profile
          </GoToProfileBtn>
        ]}
      >
        <p>In order to become a part of our community of Walkers,</p>
        <p>you have to fill your personal information.</p>
        <p>Please do that before you proceed.</p>
      </Modal>
      <Container>
        <LogoContainer href='/'>
          <Logo src={PetAway} alt='PetAway Logo' />
        </LogoContainer>{' '}
        <HamburgerContainer>
          <HamburgerIcon
            toggled={isOpen}
            toggle={setOpen}
            size={48}
            duration={1}
            color={DarkGray}
            rounded
          />
        </HamburgerContainer>
        <LinksWrapper>
          <LinksList>
            <ListItem>
              <LinkItem href='/search'>
                <ItemImage src={Search} />
                <Translate id='SEARCH' />
              </LinkItem>
            </ListItem>
            {logged === 0 && (
              <ListItem>
                <LinkItem href='/'>
                  <ItemImage src={Heart} />
                  <Translate id='BECOME_WALKER' />
                </LinkItem>
              </ListItem>
            )}
            <ListItem>
              <LinkItem href='/services'>
                <ItemImage src={Paw} />
                <Translate id='SERVICES' />
              </LinkItem>
            </ListItem>
          </LinksList>
        </LinksWrapper>
        {logged === 0 && (
          <OperationWrapper>
            <Operations href='/signup'>
              <Translate id='SIGNUP' />
              <Underline />
            </Operations>
            <Operations href='/login'>
              <Translate id='SIGNIN' />
              <Underline />
            </Operations>
          </OperationWrapper>
        )}
        <MobileMenu toggled={isOpen} />
        {logged !== 0 && (
          <>
            <UserWrapper>
              <Badge
                count={5}
                size='small'
                onClick={() => setNotification(!notification)}
              >
                <Notifications>
                  <BellOutlined
                    style={{fontSize: '24px', color: '#cecece'}}
                  />
                </Notifications>
              </Badge>
              <Drawer
                title='Notifications'
                visible={notification}
                onClose={() => setNotification(!notification)}
                contentWrapperStyle={{
                  marginTop: '95px'
                }}
                mask={false}
                zIndex={2}
                closable={false}
              >
                {/* TODO Add notification list */}
                {/* Add notification list counter */}
                asd
              </Drawer>
              <UserMenu
                menuButton={
                  user?.userData?.profilePhoto === null ? (
                    <UserAvatar
                      style={{
                        color: '#00A6AA',
                        backgroundColor: {DarkGray}
                      }}
                      size='large'
                      onClick={showDrawer}
                    >
                      {user?.userData?.firstName[0].toUpperCase()}
                      {user?.userData?.lastName[0].toUpperCase()}
                    </UserAvatar>
                  ) : (
                    <UserAvatar
                      size='large'
                      onClick={showDrawer}
                      src={user?.userData?.profilePhoto}
                    />
                  )
                }
                transition
              >
                <UserMenuListItem href='/profile'>
                  Profile
                </UserMenuListItem>
                <UserMenuListItem>Settings</UserMenuListItem>
                <UserMenuListItem
                  style={{color: 'red'}}
                  onClick={checkRequiredFields}
                >
                  Become a Walker
                </UserMenuListItem>
                <MenuDivider />
                <UserMenuListItem onClick={() => logoutAndRedirect()}>
                  Log out
                </UserMenuListItem>
              </UserMenu>
            </UserWrapper>
          </>
        )}
      </Container>
    </>
  )
}
export default Header

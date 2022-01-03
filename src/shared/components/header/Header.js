import React, {useEffect, useState} from 'react'

import {BellOutlined} from '@ant-design/icons'
import {MenuDivider} from '@szhsin/react-menu'
import '@szhsin/react-menu/dist/index.css'
import '@szhsin/react-menu/dist/transitions/slide.css'
import {Badge, Drawer} from 'antd'
import {Translate} from 'react-localize-redux'
import {useHistory} from 'react-router'

import Heart from '../../../assets/Heart.png'
import PetAway from '../../../assets/logo.png'
import Paw from '../../../assets/Paw.png'
import Search from '../../../assets/Search.png'
import {AuthTokenKey} from '../../../infra/config/LocalStorageKeys'
import {User} from '../../mockup/Mockup'
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
  UserMenuListItem
} from './HeaderStyles'

const Header = () => {
  const [isOpen, setOpen] = useState(false)
  const [visible, setVisible] = useState(false)
  const [notification, setNotification] = useState(false)
  const [logged, setLogged] = useState(0)
  const history = useHistory()
  const showDrawer = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }

  useEffect(() => {
    const token = localStorage.getItem(AuthTokenKey)
    if (token !== '@AUTH_TOKEN') {
      setLogged(0)
    } else {
      setLogged(1)
    }
  })

  const logoutAndRedirect = () => {
    localStorage.setItem(AuthTokenKey, '@AUTH_TOKEN')
    history.push('/')
    window.location.reload(false)
  }

  return (
    <>
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
              <LinkItem href='/'>
                <ItemImage src={Search} />
                <Translate id='SEARCH' />
              </LinkItem>
            </ListItem>
            {logged !== 0 && (
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
        {logged !== 0 && (
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
        {logged === 0 && (
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
                  <UserAvatar
                    style={{
                      color: '#00A6AA',
                      backgroundColor: {DarkGray}
                    }}
                    size='large'
                    onClick={showDrawer}
                  >
                    {User.firstName[0]}
                    {User.lastName[0]}
                  </UserAvatar>
                }
                transition
              >
                <UserMenuListItem href='/profile'>
                  Profile
                </UserMenuListItem>
                <UserMenuListItem>Settings</UserMenuListItem>
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

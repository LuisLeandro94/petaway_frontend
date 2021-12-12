import React, {useState} from 'react'

import {BellOutlined} from '@ant-design/icons'
import {MenuDivider} from '@szhsin/react-menu'
import '@szhsin/react-menu/dist/index.css'
import '@szhsin/react-menu/dist/transitions/slide.css'
import {Badge} from 'antd'
import {Translate} from 'react-localize-redux'

import Heart from '../../../assets/Heart.png'
import PetAway from '../../../assets/logo.png'
import Paw from '../../../assets/Paw.png'
import Search from '../../../assets/Search.png'
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
  const [which, setWhich] = useState(0)
  const showDrawer = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
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
            {!User.logged && (
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
        {!User.logged && (
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
        {User.logged && (
          <>
            <UserWrapper>
              <Badge count={5} size='small'>
                <Notifications>
                  <BellOutlined
                    style={{fontSize: '24px', color: '#cecece'}}
                  />
                </Notifications>
              </Badge>
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
                <UserMenuListItem>Profile</UserMenuListItem>
                <UserMenuListItem>Settings</UserMenuListItem>
                <MenuDivider />
                <UserMenuListItem>Log out</UserMenuListItem>
              </UserMenu>
              {/* <Drawer
                onClose={onClose}
                visible={visible}
                title={`Welcome ${User.firstName} ${User.lastName}`}
                style={{height: '190px'}}
                mask={false}
              >
                <MenuLinks>Profile</MenuLinks>
                <MenuLinks>Settings</MenuLinks>
                <LineSeparator />
                <MenuLinks>Log out</MenuLinks>
              </Drawer> */}
            </UserWrapper>
          </>
        )}
        <MobileMenu toggled={isOpen} />
      </Container>
    </>
  )
}
export default Header

import React, {useEffect, useState} from 'react'

import {BellOutlined} from '@ant-design/icons'
import {MenuDivider} from '@szhsin/react-menu'
import '@szhsin/react-menu/dist/index.css'
import '@szhsin/react-menu/dist/transitions/slide.css'
import {Badge, Tabs} from 'antd'
import Modal from 'antd/lib/modal/Modal'
import {Translate} from 'react-localize-redux'
import {useHistory} from 'react-router'

import Heart from '../../../assets/Heart.png'
import PetAway from '../../../assets/logo.png'
import Paw from '../../../assets/Paw.png'
import Search from '../../../assets/Search.png'
import {AuthTokenKey} from '../../../infra/config/LocalStorageKeys'
import {
  GetUserEvents,
  GetWalkerEvents,
  UpdateEventStatus
} from '../../../infra/requests/EventsRequests'
import {GetUserByJwt} from '../../../infra/requests/UserRequests'
import {GetWalkerByUId} from '../../../infra/requests/WalkerRequests'
import {DarkGray} from '../../styles/_colors'
import EventContainer from './components/EventContainer'
import MobileMenu from './components/MobileMenu'
import useDidMountEffect from './DidMount'
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
  GoToProfileBtn,
  NotificationDrawer,
  NotificationTabs
} from './HeaderStyles'

const {TabPane} = Tabs

const Header = () => {
  const [isOpen, setOpen] = useState(false)
  const [visible, setVisible] = useState(false)
  const [notification, setNotification] = useState(false)
  const [logged, setLogged] = useState(0)
  const [user, setUser] = useState({})
  const [walker, setWalker] = useState({})
  const [filledFields, setFilledFields] = useState(false)
  const [incomingEvents, setIncomingEvents] = useState([])
  const [outgoingEvents, setOutgoingEvents] = useState([])
  const history = useHistory()
  const showDrawer = () => {
    setVisible(true)
  }

  useEffect(() => {
    const token = localStorage.getItem(AuthTokenKey)
    if (token !== null && token !== 'null') {
      setLogged(1)
      const GetUser = async () => {
        const {data, success} = await GetUserByJwt()

        if (success) {
          setUser(data.result)
        }
      }
      GetUser()
    } else {
      setLogged(0)
    }
  }, [])

  useDidMountEffect(() => {
    if (user.isWalker) {
      const GetWalker = async () => {
        const {data, success} = await GetWalkerByUId(user.id)

        if (success) {
          setWalker(data.result)
        }
      }
      GetWalker()
    }
  }, [user])

  const getEventList = async () => {
    setNotification(!notification)
    if (user.isWalker) {
      const GetOutgoingWalkerEvents = async () => {
        const {data, success} = await GetUserEvents()
        if (success) {
          setOutgoingEvents(data.result)
        }
      }
      const GetIncomingWalkerEvents = async () => {
        const {data, success} = await GetWalkerEvents(walker?.id)
        if (success) {
          setIncomingEvents(data.result)
        }
      }
      GetOutgoingWalkerEvents()
      GetIncomingWalkerEvents()
    }
    if (!user.isWalker) {
      const GetAllUserEvents = async () => {
        const {data, success} = await GetUserEvents()

        if (success) {
          setOutgoingEvents(data.result)
        }
      }
      GetAllUserEvents()
    }
  }

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

  const rejectEvent = async (id) => {
    try {
      const data = {
        eventId: id,
        status: 2
      }
      const result = await UpdateEventStatus(data)
    } catch (e) {
      console.error(e)
    }
  }

  const acceptEvent = async (id) => {
    try {
      const data = {
        eventId: id,
        status: 3
      }
      const result = await UpdateEventStatus(data)
    } catch (e) {
      console.error(e)
    }
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
            {logged !== 0 && (
              <ListItem>
                <LinkItem href='/search'>
                  <ItemImage src={Search} />
                  <Translate id='SEARCH' />
                </LinkItem>
              </ListItem>
            )}
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
              <Badge count={5} size='small' onClick={getEventList}>
                <Notifications>
                  <BellOutlined
                    style={{fontSize: '24px', color: '#cecece'}}
                  />
                </Notifications>
              </Badge>
              <NotificationDrawer
                title='Service Requests'
                visible={notification}
                onClose={() => setNotification(!notification)}
                contentWrapperStyle={{
                  marginTop: '95px',
                  fontFamily: 'Poppins',
                  overflow: 'scroll'
                }}
                bodyStyle={{padding: '0 24px 24px', overflow: 'scroll'}}
                mask={false}
                keyboard
                zIndex={2}
                closable={false}
                width={400}
              >
                <NotificationTabs>
                  <Tabs type='card' defaultActiveKey='1'>
                    <TabPane tab='Incoming' key='1'>
                      {incomingEvents.map((event) => (
                        <EventContainer
                          event={event}
                          incoming
                          rejectEvent={rejectEvent}
                          acceptEvent={acceptEvent}
                        />
                      ))}
                    </TabPane>
                    <TabPane tab='Outgoing' key='2'>
                      {outgoingEvents.map((event) => (
                        <EventContainer event={event} />
                      ))}
                    </TabPane>
                  </Tabs>
                </NotificationTabs>
              </NotificationDrawer>
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
                      style={{
                        border: '2px solid #cecece'
                      }}
                    />
                  )
                }
                transition
              >
                <UserMenuListItem href='/profile'>
                  Profile
                </UserMenuListItem>
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

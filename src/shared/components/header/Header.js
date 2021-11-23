import React, {useState} from 'react'

import {Translate} from 'react-localize-redux'

import Heart from '../../../assets/Heart.png'
import PetAway from '../../../assets/logo.png'
import Paw from '../../../assets/Paw.png'
import Search from '../../../assets/Search.png'
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
  HamburgerContainer
} from './HeaderStyles'

const Header = ({isLogged}) => {
  const [isOpen, setOpen] = useState(false)

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
              <ItemImage href='/' src={Search} />
              <LinkItem href='/'>
                <Translate id='SEARCH' />
              </LinkItem>
            </ListItem>
            <ListItem>
              <ItemImage href='/' src={Heart} />
              <LinkItem href='/'>
                <Translate id='BECOME_WALKER' />
              </LinkItem>
            </ListItem>
            <ListItem>
              <ItemImage href='/' src={Paw} />
              <LinkItem href='/'>
                <Translate id='SERVICES' />
              </LinkItem>
            </ListItem>
          </LinksList>
        </LinksWrapper>
        <OperationWrapper>
          <Operations href='/'>
            <Translate id='SIGNUP' />
            <Underline />
          </Operations>
          <Operations href='/'>
            <Translate id='SIGNIN' />
            <Underline />
          </Operations>
        </OperationWrapper>
        <MobileMenu toggled={isOpen} />
      </Container>
    </>
  )
}
export default Header

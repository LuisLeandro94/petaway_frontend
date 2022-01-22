import React from 'react'

import {Translate} from 'react-localize-redux'

import Logo from '../../assets/PetAway_logo.png'
import {
  BackgroundContainer,
  ButtonContainer,
  Container,
  FindMoreButton,
  PetawayLogo,
  Quote
} from './HomepageStyles'

const Homepage = () => (
  <>
    <BackgroundContainer />
    <Container>
      <PetawayLogo src={Logo} />
      <Quote>
        <Translate id='HOME_QUOTE' />
      </Quote>
      <ButtonContainer>
        <a href='/'>
          <FindMoreButton href='/'>
            <Translate id='FIND_MORE' />
          </FindMoreButton>
        </a>
      </ButtonContainer>
    </Container>
  </>
)

export default Homepage

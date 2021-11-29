import React from 'react'

import Logo from '../../assets/logo.png'
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
        An animal’s eyes have the power to speak a great language.
      </Quote>
      <ButtonContainer>
        <FindMoreButton href='/'>Find More</FindMoreButton>
      </ButtonContainer>
    </Container>
  </>
)

export default Homepage
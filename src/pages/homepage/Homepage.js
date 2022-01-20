import React from 'react'

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
        An animal’s eyes have the power to speak a great language.
      </Quote>
      <ButtonContainer>
        <a href='https://www.youtube.com/watch?v=PUjvaMWKeBI'>
          <FindMoreButton href='/'>Find More</FindMoreButton>
        </a>
      </ButtonContainer>
    </Container>
  </>
)

export default Homepage

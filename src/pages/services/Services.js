import React, {useState} from 'react'

import {Col} from 'antd'
import {FaDog} from 'react-icons/fa'
import {GiDogHouse} from 'react-icons/gi'

import {PrimaryColor} from '../../shared/styles/_colors'
import {
  BackgroundContainer,
  Container,
  PageTitle,
  OptionsWrapper,
  OptionContainer,
  OptionDetail,
  OptionDetailWrapper,
  CollWrapper,
  PageWrapper,
  BackWrapper,
  BackButton,
  BackText,
  MenuContainer,
  Content,
  ServiceSubtitle,
  ServiceTitle,
  ButtonContainer,
  BookNowButton
} from './ServicesStyles'

const Services = () => {
  const [selectedOption, setSelectedOption] = useState(0)

  return (
    <>
      <PageWrapper option={selectedOption}>
        <BackgroundContainer option={selectedOption} />
        <Container>
          <PageTitle>Our Services</PageTitle>
          <OptionsWrapper justify='center'>
            <CollWrapper
              as={Col}
              xs={24}
              sm={24}
              md={24}
              lg={12}
              xl={12}
              onClick={() => setSelectedOption(1)}
            >
              <OptionContainer>
                <GiDogHouse size={100} color={PrimaryColor} />
              </OptionContainer>
              <OptionDetail>
                <OptionDetailWrapper>Pet Sitting</OptionDetailWrapper>
              </OptionDetail>
            </CollWrapper>
            <CollWrapper
              as={Col}
              xs={24}
              sm={24}
              md={24}
              lg={12}
              xl={12}
              onClick={() => setSelectedOption(2)}
            >
              <OptionContainer>
                <FaDog size={100} color={PrimaryColor} />
              </OptionContainer>
              <OptionDetail>
                <OptionDetailWrapper>Pet Walking</OptionDetailWrapper>
              </OptionDetail>
            </CollWrapper>
          </OptionsWrapper>
        </Container>
      </PageWrapper>
      <PageWrapper option={selectedOption}>
        <BackgroundContainer />
        <MenuContainer>
          <BackWrapper onClick={() => setSelectedOption(0)}>
            <BackButton />
            <BackText>Back</BackText>
          </BackWrapper>
          <Content>
            <ServiceTitle>
              Your perfect pet sitter is also your perfect home sitter
            </ServiceTitle>
            <ServiceSubtitle>
              Leave both your pet and your home in good hands
            </ServiceSubtitle>
            <ButtonContainer>
              <BookNowButton>Book House Sitting</BookNowButton>
            </ButtonContainer>
          </Content>
        </MenuContainer>
      </PageWrapper>
      <PageWrapper option={selectedOption}>
        <BackgroundContainer />
        <MenuContainer>
          <BackWrapper onClick={() => setSelectedOption(0)}>
            <BackButton />
            <BackText>Back</BackText>
          </BackWrapper>
          <Content>
            <ServiceTitle>Pet Walking Made Easy</ServiceTitle>
            <ServiceSubtitle>
              Treat your pet with a nice walk in the sun
            </ServiceSubtitle>
            <ButtonContainer>
              <BookNowButton>Book A Walk</BookNowButton>
            </ButtonContainer>
          </Content>
        </MenuContainer>
      </PageWrapper>
    </>
  )
}

export default Services

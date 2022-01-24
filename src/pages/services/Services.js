import React, {useState} from 'react'

import {Col} from 'antd'
import {isEmpty} from 'lodash'
import {FaDog} from 'react-icons/fa'
import {GiDogHouse} from 'react-icons/gi'
import {Translate} from 'react-localize-redux'
import {useHistory} from 'react-router'

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

const Services = ({user}) => {
  const [selectedOption, setSelectedOption] = useState(0)
  const history = useHistory()

  const redirect = () => {
    try {
      if (isEmpty(user)) {
        history.push('/login')
      }
      history.push('/search')
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <PageWrapper option={selectedOption}>
        <BackgroundContainer option={selectedOption} />
        <Container>
          <PageTitle>
            <Translate id='SERVICES' />
          </PageTitle>
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
                <OptionDetailWrapper>
                  <Translate id='PET_SITTING' />
                </OptionDetailWrapper>
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
                <OptionDetailWrapper>
                  <Translate id='PET_WALKING' />
                </OptionDetailWrapper>
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
            <BackText>
              <Translate id='BACK' />
            </BackText>
          </BackWrapper>
          <Content>
            <ServiceTitle>
              <Translate id='SITTING_TITLE' />
            </ServiceTitle>
            <ServiceSubtitle>
              <Translate id='SITTING_TEXT' />
            </ServiceSubtitle>
            <ButtonContainer>
              <BookNowButton onClick={redirect}>
                <Translate id='BOOK_SITTING' />
              </BookNowButton>
            </ButtonContainer>
          </Content>
        </MenuContainer>
      </PageWrapper>
      <PageWrapper option={selectedOption}>
        <BackgroundContainer />
        <MenuContainer>
          <BackWrapper onClick={() => setSelectedOption(0)}>
            <BackButton />
            <BackText>
              <Translate id='BACK' />
            </BackText>
          </BackWrapper>
          <Content>
            <ServiceTitle>
              <Translate id='WALKING_TITLE' />
            </ServiceTitle>
            <ServiceSubtitle>
              <Translate id='WALKING_TEXT' />
            </ServiceSubtitle>
            <ButtonContainer>
              <BookNowButton onClick={redirect}>
                <Translate id='BOOK_WALK' />
              </BookNowButton>
            </ButtonContainer>
          </Content>
        </MenuContainer>
      </PageWrapper>
    </>
  )
}

export default Services

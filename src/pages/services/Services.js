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
  CollWrapper
} from './ServicesStyles'

const Services = () => {
  const [selectedOption, setSelectedOption] = useState('')

  return (
    <>
      <BackgroundContainer />
      <Container>
        <PageTitle>Our Services</PageTitle>
        <OptionsWrapper justify='center'>
          <CollWrapper as={Col} xs={24} sm={24} md={24} lg={12} xl={12}>
            <OptionContainer>
              <GiDogHouse size={100} color={PrimaryColor} />
            </OptionContainer>
            <OptionDetail>
              <OptionDetailWrapper>Pet Sitting</OptionDetailWrapper>
            </OptionDetail>
          </CollWrapper>
          <CollWrapper as={Col} xs={24} sm={24} md={24} lg={12} xl={12}>
            <OptionContainer>
              <FaDog size={100} color={PrimaryColor} />
            </OptionContainer>
            <OptionDetail>
              <OptionDetailWrapper>Pet Walking</OptionDetailWrapper>
            </OptionDetail>
          </CollWrapper>
        </OptionsWrapper>
      </Container>
    </>
  )
}

export default Services

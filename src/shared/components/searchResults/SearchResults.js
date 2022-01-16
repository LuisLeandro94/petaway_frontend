import React from 'react'

import {Avatar} from 'antd'

import PlaceholderImage from '../../../assets/Repeat.png'
import {PrimaryColor} from '../../styles/_colors'
import SimpleMap, {MapContainer} from '../gmaps/GMap'
import {
  CardWrapper,
  DetailsContainer,
  ResultsContainer,
  ResultsWrapper,
  WalkerImage,
  Image,
  AvatarWrapper,
  DetailsWrapper,
  NameContainer,
  NumberContainer,
  EmailContainer,
  CityContainer
} from './SearchResultsStyles'

const walkerList = [
  {
    firstName: 'teste1',
    lastName: 'teste2',
    img: PlaceholderImage,
    city: 'Guimarães',
    phoneNumber: '917688021',
    email: 'teste@teste.pt'
  },
  {
    firstName: 'teste1',
    lastName: 'teste2',
    img: PlaceholderImage,
    city: 'Guimarães',
    phoneNumber: '917688021',
    email: 'teste@teste.pt'
  },
  {
    firstName: 'teste1',
    lastName: 'teste2',
    img: PlaceholderImage,
    city: 'Guimarães',
    phoneNumber: '917688021',
    email: 'teste@teste.pt'
  },
  {
    firstName: 'teste1',
    lastName: 'teste2',
    img: PlaceholderImage,
    city: 'Guimarães',
    phoneNumber: '917688021',
    email: 'teste@teste.pt'
  },
  {
    firstName: 'teste1',
    lastName: 'teste2',
    img: PlaceholderImage,
    city: 'Guimarães',
    phoneNumber: '917688021',
    email: 'teste@teste.pt'
  },
  {
    firstName: 'teste1',
    lastName: 'teste2',
    img: PlaceholderImage,
    city: 'Guimarães',
    phoneNumber: '917688021',
    email: 'teste@teste.pt'
  }
]

const SearchResults = () => {
  const a = []
  return (
    <>
      <ResultsWrapper>
        <ResultsContainer>
          {walkerList.map((walker) => (
            <CardWrapper>
              <AvatarWrapper>
                <Avatar
                  size={{
                    xs: 100,
                    sm: 100,
                    md: 100,
                    lg: 100,
                    xl: 120,
                    xxl: 140
                  }}
                  src={walker.img}
                  style={{border: `2px solid ${PrimaryColor}`}}
                />
              </AvatarWrapper>
              <DetailsWrapper>
                <NameContainer>
                  {walker.firstName.charAt(0).toUpperCase() +
                    walker.firstName.slice(1)}{' '}
                  {walker.lastName.charAt(0).toUpperCase() +
                    walker.lastName.slice(1)}
                </NameContainer>
                <CityContainer>
                  {walker.city.charAt(0).toUpperCase() +
                    walker.city.slice(1)}
                </CityContainer>
                <NumberContainer>{walker.phoneNumber}</NumberContainer>
                <EmailContainer>{walker.email}</EmailContainer>
              </DetailsWrapper>
            </CardWrapper>
          ))}
        </ResultsContainer>
        <DetailsContainer>
          <SimpleMap />
        </DetailsContainer>
      </ResultsWrapper>
    </>
  )
}

export default SearchResults

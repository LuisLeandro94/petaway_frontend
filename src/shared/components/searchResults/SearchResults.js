import React from 'react'

import {Avatar} from 'antd'

import {PrimaryColor} from '../../styles/_colors'
import SimpleMap from '../gmaps/GMap'
import {
  CardWrapper,
  DetailsContainer,
  ResultsContainer,
  ResultsWrapper,
  AvatarWrapper,
  DetailsWrapper,
  NameContainer,
  NumberContainer,
  EmailContainer,
  CityContainer,
  NoResultsWrapper,
  NoResultsContainer,
  NoResultsHeader,
  NoResultsText
} from './SearchResultsStyles'

const SearchResults = ({searchResult}) => (
  <>
    <ResultsWrapper>
      {searchResult.length !== 0 && (
        <ResultsContainer>
          {searchResult.map((walker) => (
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
                  src={walker.user.userData.profilePhoto}
                  style={{border: `2px solid ${PrimaryColor}`}}
                />
              </AvatarWrapper>
              <DetailsWrapper>
                <NameContainer>
                  {walker.user.userData.firstName.charAt(0).toUpperCase() +
                    walker.user.userData.firstName.slice(1)}{' '}
                  {walker.user.userData.lastName.charAt(0).toUpperCase() +
                    walker.user.userData.lastName.slice(1)}
                </NameContainer>
                <CityContainer>
                  {walker.user.userData.city.charAt(0).toUpperCase() +
                    walker.user.userData.city.slice(1)}
                </CityContainer>
                <NumberContainer>
                  {walker.user.userData.phoneNumber}
                </NumberContainer>
                <EmailContainer>{walker.user.email}</EmailContainer>
              </DetailsWrapper>
            </CardWrapper>
          ))}
        </ResultsContainer>
      )}
      {searchResult.length === 0 && (
        <ResultsContainer>
          <NoResultsWrapper>
            <NoResultsContainer>
              <NoResultsHeader>
                Oops... Guess there's no Walkers that fit your criteria.
              </NoResultsHeader>
              <NoResultsText>
                Try again with different filters!
              </NoResultsText>
            </NoResultsContainer>
          </NoResultsWrapper>
        </ResultsContainer>
      )}
      <DetailsContainer>
        <SimpleMap />
      </DetailsContainer>
    </ResultsWrapper>
  </>
)

export default SearchResults

import React from 'react'

import {Avatar} from 'antd'

import {CreateEvent} from '../../../infra/requests/EventsRequests'
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
  NoResultsText,
  RequestService,
  RequestWrapper
} from './SearchResultsStyles'

const SearchResults = ({
  searchResult,
  requestService,
  requestPet,
  setResultState,
  resultState
}) => {
  const SendRequest = (data) => {
    try {
      debugger
      const values = {
        walkerId: data,
        petId: requestPet,
        serviceId: requestService,
        date: new Date()
      }
      console.log(values)
      const response = CreateEvent(values).then((res) => {
        if (res.success) {
          setResultState(!resultState)
        }
      })
    } catch (e) {
      console.error(e)
    }
  }

  return (
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
                    {console.log(walker)}
                    {walker.user.userData.firstName
                      .charAt(0)
                      .toUpperCase() +
                      walker.user.userData.firstName.slice(1)}{' '}
                    {walker.user.userData.lastName
                      .charAt(0)
                      .toUpperCase() +
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
                <RequestWrapper>
                  <RequestService onClick={() => SendRequest(walker.id)}>
                    Request Service
                  </RequestService>
                </RequestWrapper>
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
}

export default SearchResults

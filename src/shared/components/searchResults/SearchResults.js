import React from 'react'

import {Avatar} from 'antd'
import {PropTypes} from 'prop-types'
import {Translate} from 'react-localize-redux'

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
  resultState,
  showFilters
}) => {
  const SendRequest = (data) => {
    try {
      const values = {
        walkerId: data,
        petId: requestPet,
        serviceId: requestService,
        date: new Date()
      }
      CreateEvent(values).then((res) => {
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
      <ResultsWrapper showFilters={showFilters}>
        {searchResult.length !== 0 && (
          <ResultsContainer>
            {searchResult.map((walker, index) => (
              <CardWrapper key={index}>
                <AvatarWrapper>
                  <Avatar
                    size={{
                      xs: 50,
                      sm: 50,
                      md: 50,
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
                    <Translate id='REQUEST_SERVICE' />
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
                  <Translate id='NO_WALKERS' />
                </NoResultsHeader>
                <NoResultsText>
                  <Translate id='TRY_FILTERS' />
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

SearchResults.propTypes = {
  searchResult: PropTypes.array.isRequired,
  requestService: PropTypes.number.isRequired,
  requestPet: PropTypes.number.isRequired,
  setResultState: PropTypes.func.isRequired,
  resultState: PropTypes.bool.isRequired
}

export default SearchResults

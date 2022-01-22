import React from 'react'

import {Translate} from 'react-localize-redux'
import {useHistory} from 'react-router'

import PageNotFound from '../../assets/page_not_found.svg'
import {
  Margin,
  StyledNotFoundContainer,
  StyledTitle,
  StyledDescription,
  StyledNotFoundLogo,
  StyledNotFoundGroup,
  MarginBackNotFound,
  BackButton
} from './NotFoundStyles'

const NotFound = () => {
  const history = useHistory()

  return (
    <StyledNotFoundContainer>
      <StyledNotFoundGroup>
        <StyledNotFoundLogo src={PageNotFound} />
        <Margin size={30} />
        <StyledTitle>
          <Translate id='OOPS_NOT_FOUND' />
        </StyledTitle>
        <Margin size={30} />
        <StyledDescription>
          <Translate id='APOLOGY' />
        </StyledDescription>
        <Margin size={40} />
        <MarginBackNotFound>
          <BackButton onClick={() => history.push('/')}>
            <Translate id='BACK_HOME' />
          </BackButton>
        </MarginBackNotFound>
      </StyledNotFoundGroup>
    </StyledNotFoundContainer>
  )
}

export default NotFound

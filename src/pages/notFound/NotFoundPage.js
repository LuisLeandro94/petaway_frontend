import React from 'react'

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
        <StyledTitle>Oops... Page not found!</StyledTitle>
        <Margin size={30} />
        <StyledDescription>
          We apologize for the inconvenience. <br /> Apparently, the page
          that you are trying to find has been erased or never existed.
        </StyledDescription>
        <Margin size={40} />
        <MarginBackNotFound>
          <BackButton onClick={() => history.push('/')}>
            Back to Home
          </BackButton>
        </MarginBackNotFound>
      </StyledNotFoundGroup>
    </StyledNotFoundContainer>
  )
}

export default NotFound

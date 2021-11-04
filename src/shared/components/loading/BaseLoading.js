import React from 'react'

import {Spin} from 'antd'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledLoadingContainer = styled.div`
  width: 100%;
  display: 'inline-block';
  text-align: center;
`
const StyledLoading = styled(Spin)`
  margin-top: ${({$margin}) => $margin || 30}px;
`

const BaseLoading = ({margin}) => (
  <StyledLoadingContainer>
    <StyledLoading $margin={margin} />
  </StyledLoadingContainer>
)

BaseLoading.propTypes = {
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

BaseLoading.defaultProps = {
  margin: 200
}

export default BaseLoading

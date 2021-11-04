import React from 'react'

import {message} from 'antd'
import {PropTypes} from 'prop-types'

import {
  AlertContainer,
  AlertBar,
  CloseIcon,
  AlertTitle,
  AlertDescription
} from './BaseAlertStyles'

const BaseAlert = ({title, description, type, callback}) => (
  <AlertContainer>
    <AlertBar type={type} />
    <CloseIcon role='button' onClick={() => message.destroy()} />
    <AlertTitle>{title}</AlertTitle>
    <AlertDescription>{description}</AlertDescription>
  </AlertContainer>
)

BaseAlert.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOf(['success', 'error', 'warning']),
  callback: PropTypes.func,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.elementType
  ]).isRequired
}

BaseAlert.defaultProps = {
  title: 'Success',
  type: 'success',
  callback: undefined
}

export default BaseAlert

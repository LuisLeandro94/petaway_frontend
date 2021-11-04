import React from 'react'

import {message} from 'antd'

import BaseAlert from './BaseAlert'

message.config({
  top: -10,
  duration: 3,
  maxCount: 2
})

class AlertService {
  success = (title, description) => {
    message.success({
      content: (
        <BaseAlert
          type='success'
          title={title}
          description={description}
        />
      ),
      duration: 3
    })
  }

  error = (title, description) => {
    message.success({
      content: (
        <BaseAlert type='error' title={title} description={description} />
      ),
      duration: 5
    })
  }

  confirm = (title, description, callback) => {
    message.success({
      content: (
        <BaseAlert
          type='warning'
          title={title}
          description={description}
          callback={callback}
        />
      ),
      duration: 0
    })
  }

  showValidations = (title, errors = []) => {
    message.success({
      content: (
        <BaseAlert
          type='error'
          title={title}
          description={
            <div>
              {errors.map((error, index) => (
                <div key={index}>{error}</div>
              ))}
            </div>
          }
        />
      ),
      duration: 5
    })
  }
}

export default new AlertService()

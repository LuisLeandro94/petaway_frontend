import axios from 'axios'

import AlertService from '../../shared/components/alert/AlertService'
import {AuthTokenKey} from './LocalStorageKeys'

const ConstructError = (response) => {
  if (response?.data?.Message) return response.data.Message
  if (response?.data?.messages && response.data.messages.length > 0) {
    return response.data.messages[0]
  }
  return `Server responded with code ${response?.data?.code} \n\n ${response?.data?.result}`
}

// setup default client
const client = axios.create({
  baseURL: process.env.REACT_APP_API
  // responseType: 'json'
})

// merge every request with default headers
const mergeCommonHeaders = (rest) => {
  const authToken = localStorage.getItem(AuthTokenKey)
  return {
    ...rest,
    Authorization: `Bearer ${authToken}`
  }
}
client.interceptors.request.use((request) => {
  request.headers.common = mergeCommonHeaders(request.headers.common)
  return request
})

// intercept server response before sending to request function
client.setupInterceptors = () => {
  client.interceptors.response.use(
    (success) => ({
      data: success.data,
      success: true
    }),
    (error) => {
      AlertService.error(
        'An error occurred',
        ConstructError(error?.response)
      )

      if (error && error.response && error.response.status === 401) {
        localStorage.clear()
        // eslint-disable-next-line no-restricted-globals
      }

      return {...error.response, success: false}
    }
  )
}

export default client

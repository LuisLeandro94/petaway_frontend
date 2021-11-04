/* eslint no-useless-escape: "off" */

import * as moment from 'moment'

import {Languages} from '../../translations/AvailableTranslations'
import ErrorMessages from './FormRuleMessages'

class FormRules {
  static required(label, rule, value) {
    if (!value || value === '') {
      return {_error: `${label}_${rule}`.toUpperCase()}
    }
    return undefined
  }

  static array(label, rule, value) {
    if (
      !Array.isArray(value) ||
      (Array.isArray(value) && value.length < 1)
    ) {
      return {_error: `${label}_${rule}_EMPTY`.toUpperCase()}
    }
    return undefined
  }

  static repeat_password(label, rule, value, params, values) {
    if (value !== values.password) {
      const errorMessage = ErrorMessages.PASSWORD_MATCH
      return {_error: errorMessage}
    }
    return undefined
  }

  static min(label, rule, value, params) {
    if (params.length > 0) {
      const minLength = params[0]
      if (!value || value.length < minLength) {
        return {_error: `${label}_${rule}_ERROR`.toUpperCase()}
      }
    }
    return undefined
  }

  static max(label, rule, value = '', params) {
    if (params.length > 0) {
      const maxLength = params[0]
      if (value) {
        if (value.length > maxLength) {
          return {_error: `${label}_${rule}_ERROR`.toUpperCase()}
        }
      }
    }
    return undefined
  }

  static email(label, rule, value) {
    const expression = /^(([^<>()\\[\]\\.,;:\s@\\"]+(\.[^<>()\\[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\]\\.,;:\s@\\"]+\.)+[^<>()[\]\\.,;:\s@\\"]{2,})$/i
    const isInvalid = expression.test(value) === false
    if (isInvalid) {
      return {_error: `${label}_${rule}_INVALID`.toUpperCase()}
    }
    return undefined
  }

  static date(label, rule, value) {
    const isInValid = moment(value).isValid() === false
    if (isInValid) {
      return {_error: `${label}_${rule}_INVALID`.toUpperCase()}
    }
    return undefined
  }

  static languages(label, rule, value) {
    const error = {}
    Languages.map((lang) => {
      if (value && value[lang.code] && value[lang.code] !== '') {
      } else {
        error[lang.code] = {
          _error: `${label}_${rule}_REQUIRED_${lang.code}`.toUpperCase()
        }
      }
      return lang
    })
    return error
  }

  static noSpaces(label, rule, value) {
    if (!value) return {_error: `${label}_${rule}`.toUpperCase()}
    if (value && value.indexOf(' ') >= 0) {
      return {_error: `${label}_${rule}`.toUpperCase()}
    }
    return undefined
  }

  static domain(label, rule, value) {
    const expression = /^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}$/i
    const isInvalid = expression.test(value) === false
    if (isInvalid) {
      return {_error: `${label}_${rule}_INVALID`.toUpperCase()}
    }
    return undefined
  }

  static emptyLanguage(label, rule, value) {
    if (!value || value === '') {
      return {_error: {en: `${label}_${rule}_INVALID`.toUpperCase()}}
    }
    if (Object.keys(value).length === 0) {
      return {_error: {en: `${label}_${rule}_EMPTY`.toUpperCase()}}
    }

    if (!value?.en) {
      return {_error: {en: `${label}_${rule}_PRIMARY`.toUpperCase()}}
    }

    const errors = []
    Object.keys(value).map((key) => {
      if (!value[key] || value[key] === '') {
        errors.push({key, _error: `${label}_${rule}_EMPTY`.toUpperCase()})
      }
      return key
    })

    if (errors.length) {
      const result = {_error: {}}
      errors.map((error) => {
        result._error[error.key] = `${label}_${rule}_EMPTY`.toUpperCase()
        return error
      })
      return result
    }

    return undefined
  }
}

export default FormRules

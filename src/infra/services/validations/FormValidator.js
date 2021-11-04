import FormRules from './FormRules'

const getRules = (descriptor) => descriptor.split('|')
const ruleExists = (formRules, ruleName) => !!formRules[ruleName]
const getRuleMap = (rule) => rule.split(':')
const getRuleName = (ruleMap) => ruleMap[0]
const getRuleParams = (ruleMap) =>
  ruleMap.length > 1 ? ruleMap[1].split(',') : []

const applyRule = (label, rule, value, values) => {
  const ruleMap = getRuleMap(rule)
  const ruleName = getRuleName(ruleMap)
  const ruleParams = getRuleParams(ruleMap)

  if (ruleExists(FormRules, ruleName)) {
    return FormRules[ruleName](label, rule, value, ruleParams, values)
  }

  throw new Error(`Invalid Rule: ${rule}`)
}

export default class FormValidator {
  static make = (validations) => (values = {}) => {
    const errors = {}
    Object.keys(validations).forEach((key) =>
      getRules(validations[key]).forEach((rule) => {
        const error = applyRule(key, rule, values[key], values)
        if (error) errors[key] = error
      })
    )
    return errors
  }

  static validateField = (label, value, descriptor) => {
    let response
    if (descriptor) {
      getRules(descriptor).forEach((rule) => {
        const error = applyRule(label, rule, value)
        if (error) response = error
      })
    }
    return response
  }
}

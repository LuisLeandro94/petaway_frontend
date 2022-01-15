import React from 'react'

import {Select} from 'antd'
import PropTypes from 'prop-types'
import {withLocalize} from 'react-localize-redux'

const SelectInput = ({
  options,
  datakey,
  placeholder,
  allowClear,
  requiredError,
  meta: {invalid, submitFailed},
  primary,
  mod,
  defaultVl,
  val
}) => {
  const showerror = invalid && submitFailed

  return (
    <Select
      placeholder={placeholder}
      allowClear={allowClear}
      mode={mod}
      showSearch={false}
      showError={showerror || requiredError}
      primary={primary}
      style={{width: '100%'}}
      datakey={{datakey}}
      defaultValue={defaultVl}
    >
      {options.map((elem, index) => (
        <Select.Option key={elem} disabled={elem.disabled}>
          {elem}
        </Select.Option>
      ))}
    </Select>
  )
}

SelectInput.propTypes = {
  options: PropTypes.array.isRequired,
  datakey: PropTypes.string,
  placeholder: PropTypes.string,
  allowClear: PropTypes.bool
}

SelectInput.defaultProps = {
  allowClear: false,
  datakey: '',
  placeholder: ''
}

export default withLocalize(SelectInput)

import {CloseOutlined} from '@ant-design/icons'
import styled from 'styled-components'

import {ErrorColor, WarningColor, SuccessColor} from '../../styles/_colors'

const DefineColor = ({type}) => {
  switch (type) {
    case 'success':
      return SuccessColor
    case 'warning':
      return WarningColor
    case 'error':
      return ErrorColor
    default:
      return ErrorColor
  }
}

export const AlertContainer = styled.div`
  position: relative;
  z-index: 9999;
  white-space: pre-line;
`

export const AlertBar = styled.div`
  position: absolute;
  top: -24px;
  left: -26px;
  height: calc(100% + 30px);
  width: 10px;
  background: ${DefineColor};
  border-bottom-left-radius: 3px;
  border-top-left-radius: 3px;
`

export const CloseIcon = styled(CloseOutlined)`
  &&& {
    position: absolute;
    top: 0;
    right: -10px;
    color: #231f20;
    cursor: pointer;
    margin: 0;
  }
`

export const AlertTitle = styled.div`
  font-size: 18px;
  line-height: 21px;
  color: #231f20;
`

export const AlertDescription = styled.div`
  font-size: 14px;
  line-height: 16px;
  color: #231f20;
  margin-top: 10px;
`

export const AlertActions = styled.div`
  display: inline-block;
  width: 100%;
  margin-top: 20px;
  text-align: right;
  button {
    margin-left: 10px;
  }
`

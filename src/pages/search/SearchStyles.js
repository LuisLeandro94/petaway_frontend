import {Button} from 'antd'
import styled from 'styled-components'

import {PrimaryColor} from '../../shared/styles/_colors'
import {device} from '../../shared/styles/_responsive'

export const GoToProfileBtn = styled(Button)`
  .ant-btn {
    background-color: ${PrimaryColor} !important;
  }
`

export const FiltersButton = styled(GoToProfileBtn)`
  display: none;
  @media ${device.tabletL} {
    display: ${({showFilters}) => (showFilters ? 'none' : 'block')};
    position: relative;
    z-index: 3;
    top: 100px;
    float: right;
    margin-right: 5px;
  }
`

import styled from 'styled-components'

import {White} from '../../styles/_colors'
import {device} from '../../styles/_responsive'

export const ResultsWrapper = styled.div`
  height: 85vh;
  width: 69%;
  background-color: ${White};
  position: absolute;
  bottom: 10px;
  right: 10px;
  border-radius: 5px;

  @media ${device.tablet} {
    width: 60%;
    right: 0;
    bottom: 0;
  }
`

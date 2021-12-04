import {Row} from 'antd'
import styled from 'styled-components'

import background from '../../assets/pets.jpg'
import {PrimaryColor, TextColor, White} from '../../shared/styles/_colors'
import {device} from '../../shared/styles/_responsive'
import {Poppins, ResultTitle, TitleText} from '../../shared/styles/_texts'

export const PageWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: ${({option}) => (option === 0 ? '1' : '0')};
`

export const BackgroundContainer = styled.div`
  background-image: url(${background});
  background-position: center;
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.5;
  filter: blur(4px);
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${TextColor};
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

export const PageTitle = styled.h1`
  font-size: ${TitleText};
  font-weight: bold;
  color: ${White};
  z-index: 2;
  text-align: center;

  @media ${device.tablet} {
    font-size: 46px;
  }
`

export const OptionDetail = styled.div`
  font-size: ${ResultTitle};
  color: ${PrimaryColor};
  font-family: ${Poppins};
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: -14%;
  height: 30%;
  display: flex;
  opacity: 0;

  @media ${device.laptop} {
    bottom: 0;
  }
`

export const OptionDetailWrapper = styled.div`
  width: 50%;
  margin: auto;
  background-color: ${White};
  border-radius: 30px;
  background: ghostwhite;
  height: 70%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid ${PrimaryColor};
`

export const CollWrapper = styled.div`
  &:hover {
    ${OptionDetail} {
      opacity: 1;
      transition: all 1s ease;
    }
  }

  @media ${device.laptop} {
    padding-bottom: 20px;
  }
`

export const OptionContainer = styled.a`
  width: 60%;
  height: 100%;
  margin: auto;
  background-color: rgba(255, 255, 255, 0.2);
  border: 3px solid ${PrimaryColor};
  border-radius: 30px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px rgba(0, 166, 170, 0.637);
`

export const OptionsWrapper = styled(Row)`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  z-index: 2;

  @media ${device.tablet} {
    margin-top: -80px;
  }
`

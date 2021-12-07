import {Row} from 'antd'
import {MdArrowBackIosNew} from 'react-icons/md'
import styled from 'styled-components'

import backgroundSitting from '../../assets/pet-sitting.jpg'
import backgroundWalking from '../../assets/pet-walking.jpg'
import background from '../../assets/pets.jpg'
import {PrimaryColor, TextColor, White} from '../../shared/styles/_colors'
import {device} from '../../shared/styles/_responsive'
import {
  HeaderMenus,
  Poppins,
  ResultTitle,
  ServiceDesc,
  TitleText
} from '../../shared/styles/_texts'

export const BackgroundContainer = styled.div`
  background-position: center;
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.5;
  filter: blur(4px);
`

export const PageWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;

  &:first-of-type {
    opacity: ${({option}) => (option === 0 ? '1' : '0')};
    display: ${({option}) => (option === 0 ? 'block' : 'none')};

    ${BackgroundContainer} {
      background-image: url(${background});
    }
  }

  &:nth-of-type(2) {
    opacity: ${({option}) => (option === 1 ? '1' : '0')};
    display: ${({option}) => (option === 1 ? 'block' : 'none')};

    ${BackgroundContainer} {
      background-image: url(${backgroundSitting});
    }
  }

  &:last-of-type {
    opacity: ${({option}) => (option === 2 ? '1' : '0')};
    display: ${({option}) => (option === 2 ? 'block' : 'none')};

    ${BackgroundContainer} {
      background-image: url(${backgroundWalking});
    }
  }
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

export const MenuContainer = styled(Container)`
  display: block;
`

export const SecondMenuContainer = styled(MenuContainer)`
  position: relative;
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
  height: 40%;
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

export const BackWrapper = styled.div`
  cursor: pointer;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 200px;
  position: fixed;
  top: 110px;
  left: 20px;
`

export const BackButton = styled(MdArrowBackIosNew)`
  width: 30px;
  height: 30px;
  color: ${White};
`

export const BackText = styled.span`
  font-family: ${Poppins};
  font-weight: 500;
  font-style: italic;
  color: ${White};
  font-size: ${HeaderMenus};
`

export const Content = styled.div`
  width: 50%;
  position: relative;
  top: 40%;
  z-index: 2;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  margin: auto;
`

export const ServiceTitle = styled.h1`
  font-family: ${Poppins};
  font-size: ${ServiceDesc};
  color: ${White};
  font-weight: bold;
`

export const ServiceSubtitle = styled.h2`
  font-family: ${Poppins};
  font-size: ${ResultTitle};
  color: ${White};
  font-weight: normal;
  font-style: italic;
`

export const BookNowButton = styled.button`
  z-index: 2;
  background: transparent;
  max-width: 270px;
  width: 100%;
  height: 60px;
  border: 3px solid ${PrimaryColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  font-family: ${Poppins};
  font-weight: 600;
  font-size: ${HeaderMenus};
  line-height: 36px;
  letter-spacing: 0.1em;
  color: ${White};
  cursor: pointer;
  @media ${device.laptopS} {
    width: 70%;
    height: 50px;
  }
  &:hover {
    background: ${PrimaryColor};
    border: none;
    color: ${White};
    transition: all 0.5s ease;
  }
`

export const ButtonContainer = styled.div`
  width: 100%;
  text-align: center;
  bottom: 0;
  z-index: 2;
  padding-top: 10%;
`

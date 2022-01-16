import styled from 'styled-components'

import {
  BorderColor,
  DarkGray,
  PrimaryColor,
  TextColor,
  White
} from '../../styles/_colors'
import {device} from '../../styles/_responsive'
import {
  ButtonText,
  FilterTitle,
  FormText,
  Poppins,
  ResultTitle
} from '../../styles/_texts'

export const FilterWrapper = styled.div`
  height: 85vh;
  width: 29%;
  background-color: ${White};
  position: absolute;
  bottom: 10px;
  left: 10px;
  border-radius: 5px;

  @media ${device.tablet} {
    width: 39%;
    left: 0;
    bottom: 0;
  }
`

export const FormContainer = styled.form`
  padding: 20px;

  @media ${device.tablet} {
    padding: 20px 2px;
  }
`

export const Selection = styled.span`
  .ant-select {
    width: 100% !important;
    .ant-select-selector {
      border-radius: 10px;
      border: 3px solid ${BorderColor};
      &:hover {
        border: 3px solid ${PrimaryColor};
      }
    }
    .ant-select-arrow {
      color: ${PrimaryColor};
    }
    .ant-select-selection-placeholder {
      font-size: ${FilterTitle};
    }
  }

  .ant-input {
    width: 100% !important;
    border-radius: 10px;
    border: 3px solid ${BorderColor};
    font-size: ${FilterTitle};

    &:hover {
      border: 3px solid ${PrimaryColor};
    }
  }
  .ant-radio-group {
    &:first-of-type {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
    }
  }
  .ant-radio-button-wrapper {
    width: 40%;
    height: 92px;
    margin: 0 5%;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .ant-radio-button-wrapper,
  .ant-radio-button-wrapper-checked,
  .ant-radio-button-wrapper-checked:not([class*=' ant-radio-button-wrapper-disabled']).ant-radio-button-wrapper:first-child {
    border: 3px solid ${BorderColor} !important;
    border-radius: 10px;
    color: ${DarkGray};
    padding: 0 !important;

    &:hover {
      border: 3px solid ${PrimaryColor} !important;
      transform: all 1s ease;
      &:before {
        background-color: ${BorderColor};
      }
    }
    &:active {
      border: 3px solid ${PrimaryColor};
    }
    &:before {
      background-color: ${BorderColor};
    }
  }
  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):focus-within {
    box-shadow: 0 0 0 3px ${PrimaryColor};
  }
`

export const InputWrapper = styled.div`
  padding-bottom: 20px;

  @media ${device.laptop} {
    padding-bottom: 5px;
  }
`

export const InputTitle = styled.p`
  float: left;
  font-family: ${Poppins};
  font-weight: 500;
  font-size: ${FilterTitle};
  line-height: 21px;
  color: ${TextColor};
  margin: 0;
  padding-bottom: 10px;
`

export const ButtonContainer = styled.div`
  width: 50%;
  position: relative;
  text-align: center;
  margin: 10px auto;

  @media ${device.tablet} {
    width: 70%;
  }
`

export const SignUpButton = styled.button`
  background: ${PrimaryColor};
  width: 100%;
  height: 60px;
  border: 3px solid ${PrimaryColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-family: ${Poppins};
  font-weight: 600;
  font-size: ${ButtonText};
  line-height: 36px;
  letter-spacing: 0.1em;
  color: ${White};
  cursor: pointer;
  @media ${device.laptopS} {
    font-size: ${ResultTitle};
  }
  @media ${device.tablet} {
    font-size: ${FilterTitle};
  }
  &:hover {
    background: rgba(0, 166, 170, 0.8);
    border: none;
    color: ${White};
    transition: all 0.5s ease;
  }
`

export const RecursionImage = styled.img`
  width: 25%;
  height: 25%;
`

export const RecursionText = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  line-height: 13px;
`

export const SecondarySelection = styled(Selection)`
  .ant-radio-button-wrapper {
    width: 33%;
    height: 60px;
    margin: 0 !important;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .ant-radio-button-wrapper,
  .ant-radio-button-wrapper-checked,
  .ant-radio-button-wrapper-checked:not([class*=' ant-radio-button-wrapper-disabled']).ant-radio-button-wrapper:first-child {
    &:first-of-type {
      border-top-right-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
    }

    &:nth-of-type(2) {
      border-top-left-radius: 0 !important;
      border-bottom-left-radius: 0 !important;
      border-top-right-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
    }

    &:last-of-type {
      border-top-left-radius: 0 !important;
      border-bottom-left-radius: 0 !important;
    }
  }
`

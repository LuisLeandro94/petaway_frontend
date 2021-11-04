import styled, {createGlobalStyle} from 'styled-components'
import {H1Text} from './_texts'

export const BasicStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  html {
    scroll-behavior: smooth;
  }
`

export const PageContainer = styled.div`
  margin: 0;
  padding: 0;
  min-height: 100vh;
`

export const PageLoadingContainer = styled.div`
  width: 100%
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BaseTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-size: ${H1Text};
`

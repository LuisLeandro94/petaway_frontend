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

  /* poppins-200 - latin */
  @font-face {
        font-family: 'Poppins_200';
        font-style: normal;
        font-weight: 200;
        src: local(''),
          url('../../assets/fonts/Poppins-ExtraLight.woff2')
            format('woff2'),
            url('../../assets/fonts/Poppins-ExtraLight.woff') format('woff')
      }
      /* poppins-300 - latin */
      @font-face {
        font-family: 'Poppins_300';
        font-style: normal;
        font-weight: 300;
        src: local(''),
          url('../../assets/fonts/Poppins-Light.woff2')
            format('woff2'),
            url('../../assets/fonts/Poppins-Light.woff') format('woff')
      }
      /* poppins-regular - latin */
      @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        src: local(''),
          url('../../assets/fonts/Poppins-Regular.woff2')
            format('woff2'),
            url('../../assets/fonts/Poppins-Regular.woff') format('woff')
      }
      /* poppins-600 - latin */
      @font-face {
        font-family: 'Poppins_600';
        font-style: normal;
        font-weight: 600;
        src: local(''),
          url('../../assets/fonts/Poppins-SemiBold.woff2')
            format('woff2'),
            url('../../assets/fonts/Poppins-SemiBold.woff') format('woff')
      }
      /* poppins-700 - latin */
      @font-face {
        font-family: 'Poppins Bold';
        font-style: normal;
        font-weight: 700;
        src: local(''),
          url('../../assets/fonts/Poppins-Bold.woff2')
            format('woff2'),
            url('../../assets/fonts/Poppins-Bold.woff') format('woff')
      }
      /* poppins-800 - latin */
      @font-face {
        font-family: 'Poppins_800';
        font-style: normal;
        font-weight: 800;
        src: local(''),
          url('../../assets/fonts/Poppins-ExtraBold.woff2')
            format('woff2'),
            url('../../assets/fonts/Poppins-ExtraBold.woff') format('woff')
      }


`

export const PageContainer = styled.div`
  margin: 0;
  padding: 0;
  min-height: 100vh;
`

export const PageLoadingContainer = styled.div`
  width: 100%;
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

import React from 'react'

import {Spin} from 'antd'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import Header from '../../shared/components/header/Header'
import {
  PageContainer,
  PageLoadingContainer
} from '../../shared/styles/BasicStyles'

const UnauthenticatedRoute = ({route, ready, routerProps, header}) => {
  if (!ready) {
    return (
      <PageLoadingContainer>
        <Spin size='large' />
      </PageLoadingContainer>
    )
  }

  const PageComponent = route.component

  if (header === true) {
    return (
      <PageContainer>
        <Header />
        <PageComponent router={routerProps} />
      </PageContainer>
    )
  }

  return (
    <PageContainer>
      <PageComponent router={routerProps} />
    </PageContainer>
  )
}

const mapStateToProps = (state) => ({
  ready: state.info.ready
})

UnauthenticatedRoute.propTypes = {
  ready: PropTypes.bool,
  route: PropTypes.object,
  routerProps: PropTypes.object
}

UnauthenticatedRoute.defaultProps = {
  ready: false,
  route: {
    path: '/',
    component: [],
    shouldRenderHeader: false,
    shouldRenderFooter: false
  },
  routerProps: {}
}

export default connect(mapStateToProps)(UnauthenticatedRoute)

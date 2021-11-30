import React from 'react'

import {Spin} from 'antd'
import {isEmpty} from 'lodash'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import Header from '../../shared/components/header/Header'
import {
  PageContainer,
  PageLoadingContainer
} from '../../shared/styles/BasicStyles'

const AuthenticatedRoute = ({
  user,
  route,
  ready,
  dispatch,
  routerProps,
  header
}) => {
  if (!ready) {
    return (
      <PageLoadingContainer>
        <Spin size='large' />
      </PageLoadingContainer>
    )
  }
  if (isEmpty(user)) {
    return <Redirect to='/login' />
  }

  const PageComponent = route.component

  if (header === true) {
    return (
      <PageContainer>
        <Header />
        <PageComponent router={routerProps} user={user} />
      </PageContainer>
    )
  }

  return (
    <PageContainer>
      <PageComponent router={routerProps} user={user} />
    </PageContainer>
  )
}

AuthenticatedRoute.propTypes = {
  route: PropTypes.object,
  routerProps: PropTypes.object
}

AuthenticatedRoute.defaultProps = {
  route: {
    path: '/',
    component: [],
    shouldRenderHeader: true,
    shouldRenderFooter: true
  },
  routerProps: {}
}

const mapStateToProps = (state) => ({
  user: state.user,
  ready: state.info.ready
})

export default connect(mapStateToProps)(AuthenticatedRoute)

import React from 'react'

import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'

import NotFound from '../pages/notFound/NotFoundPage'
import CombinedRoutes from './CombinedRoutes'
import AuthenticatedRoute from './route_types/AuthenticatedRoute'
import UnauthenticatedRoute from './route_types/UnauthenticatedRoute'
import ScrollToTop from './ScrollToTop'

const ApplicationRoutes = () => {
  // add authentication validations
  const renderApplicationRoute = (route, key) => {
    if (route.isAuthenticated) {
      return (
        <Route
          key={key}
          exact
          path={route.path}
          render={(routerProps) => (
            <AuthenticatedRoute
              route={route}
              routerProps={routerProps}
              header={route.header}
            />
          )}
        />
      )
    }

    return (
      <Route
        key={key}
        exact
        path={route.path}
        header={route.header}
        component={(routerProps) => (
          <UnauthenticatedRoute
            route={route}
            routerProps={routerProps}
            header={route.header}
          />
        )}
      />
    )
  }

  return (
    <Router>
      <ScrollToTop />
      <Switch>
        {CombinedRoutes.map(renderApplicationRoute)}
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default ApplicationRoutes

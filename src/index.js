import 'antd/dist/antd.css'
import React from 'react'

import * as moment from 'moment-timezone'
import ReactDOM from 'react-dom'
import {LocalizeProvider} from 'react-localize-redux'
import {Provider} from 'react-redux'

import client from './infra/config/AxiosConfig'
import ReduxStore from './redux/ReduxConfig'
import AppStartup from './redux/thunks/AppStartup'
import ApplicationRoutes from './routes/ApplicationRoutes'
import {BasicStyles} from './shared/styles/BasicStyles'

moment.tz.setDefault('Etc/UTC')

client.setupInterceptors(ReduxStore)
ReduxStore.dispatch(AppStartup())

ReactDOM.render(
  <Provider store={ReduxStore}>
    <LocalizeProvider store={ReduxStore}>
      <BasicStyles />
      <ApplicationRoutes />
    </LocalizeProvider>
  </Provider>,
  document.getElementById('root')
)

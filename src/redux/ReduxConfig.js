import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import {localizeReducer} from 'react-localize-redux'

import InfoReducer from './data/info/InfoReducer'
import UserReducer from './data/user/UserReducer'

const RootReducer = {
  localize: localizeReducer,
  user: UserReducer,
  info: InfoReducer
}

const ReduxMiddlewares = [
  ...getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false
  })
]

const ReduxStore = configureStore({
  reducer: RootReducer,
  middleware: ReduxMiddlewares,
  devTools: process.env.NODE_ENV !== 'production'
})

export default ReduxStore

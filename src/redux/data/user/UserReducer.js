import {createReducer} from '@reduxjs/toolkit'

import {userSave, userEdit, userDelete} from './UserActions'

const initialState = {}

const UserReducer = createReducer(initialState, {
  [userSave]: (state, action) => action.payload,
  [userEdit]: (state, action) => ({...action.payload, ...state}),
  [userDelete]: () => initialState
})

export default UserReducer

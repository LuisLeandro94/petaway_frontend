import {createReducer} from '@reduxjs/toolkit'

import {updateInfo} from './InfoActions'

const initialState = {}

const InfoReducer = createReducer(initialState, {
  [updateInfo]: (state, action) => ({...state, ...action.payload})
})

export default InfoReducer

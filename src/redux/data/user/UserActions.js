import {createAction} from '@reduxjs/toolkit'

export const userSave = createAction('user/save', (data) => ({
  payload: data
}))
export const userEdit = createAction('user/edit')
export const userDelete = createAction('user/delete')

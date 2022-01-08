import client from '../config/AxiosConfig'

export const GetUserByJwt = () => client.get('/v1/users')

export const EditUser = (data) => client.put('/v1/users', data)

export const EditPassword = (data) =>
  client.put('/v1/users/password', data)

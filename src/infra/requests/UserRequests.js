import client from '../config/AxiosConfig'

export const GetUserByJwt = () => client.get('/v1/users')

export const EditUser = (data) => client.put('/v1/users', data)

export const EditPwd = (data) => client.put('/v1/users/password', data)

export const DeleteUser = () => client.delete('/v1/users')

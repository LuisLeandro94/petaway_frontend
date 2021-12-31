import client from '../config/AxiosConfig'

export const GetUserByJwt = () => client.get('/v1/users')

import client from '../config/AxiosConfig'

export const GetAllServices = async () => client.get('/v1/services')

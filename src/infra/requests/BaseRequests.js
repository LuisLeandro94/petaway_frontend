import client from '../config/AxiosConfig'

export const GetInfo = async () => client.get('/info')
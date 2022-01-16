import client from '../config/AxiosConfig'

export const GetAllPets = async () => client.get('/v1/pets')

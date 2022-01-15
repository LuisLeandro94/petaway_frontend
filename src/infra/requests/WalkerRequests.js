import client from '../config/AxiosConfig'

export const AddWalker = async (data) =>
  await client.post('/v1/walkers', data)

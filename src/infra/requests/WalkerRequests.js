import client from '../config/AxiosConfig'

export const AddWalker = async (data) =>
  await client.post('/v1/walkers', data)

export const GetAllWalkers = async (data) =>
  await client.get(
    `/v1/walkers?services=[${data.services}]&pets=[${data.pets}]&city=${data.city}`
  )

export const GetWalkerByUId = async (userId) =>
  await client.get(`/v1/walkers/${userId}`)

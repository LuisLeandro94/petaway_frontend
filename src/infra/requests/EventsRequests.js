import client from '../config/AxiosConfig'

export const GetUserEvents = async () =>
  await client.get('/v1/events/user')

export const GetWalkerEvents = async (walkerId) =>
  await client.get(`/v1/events/walker?walkerId=${walkerId}`)

export const CreateEvent = async (data) =>
  await client.post('/v1/events', data)

export const UpdateEventStatus = async (data) =>
  await client.put('/v1/events', data)

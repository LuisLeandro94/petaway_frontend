import client from '../config/AxiosConfig'

export const GetUserEvents = async () => client.get('/v1/events/user')

export const GetWalkerEvents = async (walkerId) =>
  client.get(`/v1/events/walker?walkerId=${walkerId}`)

export const CreateEvent = async (data) => client.post('/v1/events', data)

export const UpdateEventStatus = async (data) =>
  client.put('/v1/events', data)

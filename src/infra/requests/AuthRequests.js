import client from '../config/AxiosConfig'

export const Login = async (data) => client.post('/v1/auth', data)

export const SignUp = async (data) => client.post('/v1/auth/signup', data)

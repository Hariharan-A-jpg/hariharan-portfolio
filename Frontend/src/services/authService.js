import axios from './axios'

export const login = async (credentials) => {
  const { data } = await axios.post('/auth/login', credentials)
  return data
}

export const logout = () => {
  localStorage.removeItem('token')
}

export const getCurrentUser = async () => {
  const { data } = await axios.get('/auth/me')
  return data
}

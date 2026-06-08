import axios from './axios'

export const getProjects = async () => {
  const { data } = await axios.get('/projects')
  return data
}

export const getProjectById = async (id) => {
  const { data } = await axios.get(`/projects/${id}`)
  return data
}

export const createProject = async (projectData) => {
  const { data } = await axios.post('/projects', projectData)
  return data
}

export const updateProject = async (id, projectData) => {
  const { data } = await axios.put(`/projects/${id}`, projectData)
  return data
}

export const deleteProject = async (id) => {
  const { data } = await axios.delete(`/projects/${id}`)
  return data
}

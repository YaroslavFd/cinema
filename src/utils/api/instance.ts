import axios from 'axios'

export const instance = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}/cinema`,
  headers: {
    'Content-type': 'application/json'
  }
})

export const authInstance = axios.create({
  ...instance.defaults,
  baseURL: `${process.env.REACT_APP_BACKEND_URL}/auth`
})

export const usersInstance = axios.create({
  ...instance.defaults,
  baseURL: `${process.env.REACT_APP_BACKEND_URL}/users`
})

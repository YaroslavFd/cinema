import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://shift-backend.onrender.com/cinema',
  headers: {
    'Content-type': 'application/json'
  }
})

export const authInstance = axios.create({
  ...instance.defaults,
  baseURL: 'https://shift-backend.onrender.com/auth'
})

export const usersInstance = axios.create({
  ...instance.defaults,
  baseURL: 'https://shift-backend.onrender.com/users'
})

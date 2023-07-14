import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://shift-backend.onrender.com/cinema',
  headers: {
    'Content-type': 'application/json'
  }
})

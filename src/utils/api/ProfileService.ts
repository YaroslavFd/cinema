import { SessionResponse, SignInInfo, SignInResponse } from '../../types'
import { usersInstance } from './instance'

export const ProfileService = {
  signIn: async (signInInfo: SignInInfo): Promise<SignInResponse> => {
    try {
      const response = await usersInstance.post('/signin', signInInfo)
      return response.data
    } catch (error) {
      throw new Error('Ошибка при авторизации')
    }
  },

  getSession: async (token: string): Promise<SessionResponse> => {
    try {
      const response = await usersInstance.get('/session', {
        headers: { Authorization: `Bearer ${token}` }
      })
      return response.data
    } catch (error) {
      throw new Error('Ошибка при получении сессии пользователя')
    }
  }
}

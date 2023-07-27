import { usersInstance } from '../api/instance'
import { SignInInfo, SignInResponse } from '../types/SignIn'

export const ProfileService = {
  signIn: async (signInInfo: SignInInfo): Promise<SignInResponse> => {
    try {
      const response = await usersInstance.post('/signin', signInInfo)
      return response.data
    } catch (error) {
      throw new Error('Ошибка при авторизации')
    }
  }
}

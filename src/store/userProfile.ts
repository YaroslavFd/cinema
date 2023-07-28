import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import { UserProfile } from '../utils/types/User'

interface UserProfileState {
  profile: UserProfile
  isAuth: boolean
  logout: () => void
  login: (value: UserProfile) => void
}

export const useUserProfileStore = create<UserProfileState, [['zustand/immer', never]]>(
  immer((set) => ({
    profile: {
      user: {
        phone: ''
      },
      token: localStorage.getItem('token') || ''
    },

    isAuth: localStorage.getItem('isAuth') === 'true',

    logout: () =>
      set((state) => {
        state.isAuth = false
        state.profile = {
          user: {
            phone: ''
          },
          token: ''
        }
        localStorage.setItem('isAuth', 'false')
        localStorage.removeItem('token')
      }),

    login: (value: UserProfile) =>
      set((state) => {
        state.isAuth = true
        state.profile = value
        localStorage.setItem('isAuth', 'true')
        localStorage.setItem('token', value.token)
      })
  }))
)

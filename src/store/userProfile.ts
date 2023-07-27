import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import { UserProfile } from '../utils/types/User'

interface UserProfileState {
  profile: UserProfile
  addProfile: (value: UserProfile) => void
}

export const useUserProfileStore = create<UserProfileState, [['zustand/immer', never]]>(
  immer((set) => ({
    profile: {
      user: {
        phone: ''
      },
      token: ''
    },

    addProfile: (value: UserProfile) =>
      set((state) => {
        state.profile = value
      })
  }))
)

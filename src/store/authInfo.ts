import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import { SignInInfo } from '../utils/types/SignIn'

interface AuthInfoState {
  signInInfo: SignInInfo
  addSignInInfo: (value: SignInInfo) => void
}

export const useAuthInfoStore = create<AuthInfoState, [['zustand/immer', never]]>(
  immer((set) => ({
    signInInfo: {
      phone: '',
      code: 0
    },

    addSignInInfo: (value: SignInInfo) =>
      set((state) => {
        state.signInInfo = value
      })
  }))
)

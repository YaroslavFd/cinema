import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

export type Person = {
  firstname: string
  lastname: string
  middlename?: string
  phone: string
}

interface UserInfoState {
  person: Person | null
  addPersonInfo: (value: Person) => void
}

export const useUserInfoStore = create<UserInfoState, [['zustand/immer', never]]>(
  immer((set) => ({
    person: null,

    addPersonInfo: (value: Person) =>
      set((state) => {
        state.person = value
      })
  }))
)

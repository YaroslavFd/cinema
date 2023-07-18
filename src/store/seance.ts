import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import { FilmSeance } from '../utils/types/FilmSchedule'

interface SeanceState {
  seance: FilmSeance | null
  addSeance: (value: FilmSeance) => void
  resetSeance: () => void
}

export const useSeanceStore = create<SeanceState, [['zustand/immer', never]]>(
  immer((set) => ({
    seance: null,

    addSeance: (value: FilmSeance) =>
      set((state) => {
        state.seance = value
      }),

    resetSeance: () => {
      set((state) => {
        state.seance = null
      })
    }
  }))
)

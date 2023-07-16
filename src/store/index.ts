import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import { FilmSeance } from '../utils/types/FilmSchedule'

type Ticket = {
  totalSum: number
  hallName: 'Red' | 'Green' | 'Blue'
  date: string | null
  time: string | null
  rows: Array<number>
  seats: Array<number>
}

interface TicketsState {
  seance: FilmSeance | null
  tickets: Ticket[]
  addSeance: (value: FilmSeance) => void
  resetSeance: () => void
}

export const useTicketsStore = create<TicketsState, [['zustand/immer', never]]>(
  immer((set) => ({
    tickets: [{ totalSum: 0, hallName: 'Red', date: null, time: null, rows: [], seats: [] }],

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

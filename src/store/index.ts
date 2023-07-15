import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type Ticket = {
  totalSum: number
  hallName: 'Red' | 'Green' | 'Blue' | null
  date: string | null
  time: string | null
  rows: Array<number>
  seats: Array<number>
}

interface TicketsState {
  tickets: Ticket[]
}
export const useTicketsStore = create<TicketsState, [['zustand/immer', never]]>(
  immer((set) => ({
    tickets: [{ totalSum: 0, hallName: null, date: null, time: null, rows: [], seats: [] }]
  }))
)

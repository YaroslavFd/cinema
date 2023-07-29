import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import { AgeRatingType } from '../utils/types/Film'
import { SeanceHallNameType } from '../utils/types/FilmSchedule'

export type InitialTicketInfo = {
  id: string
  title: string
  date: string
  time: string
  hallName: SeanceHallNameType
  ageRating: AgeRatingType
}

export type Seats = {
  row: number
  column: number
}

interface OrderTicketsState {
  initialTicketInfo: InitialTicketInfo | null
  price: number
  chosenSeats: Seats[]
  orderPaidStatus: boolean
  toggleOrderPaidStatus: () => void
  addInitialTicketInfo: (value: InitialTicketInfo) => void
  resetOrderTicketInfo: () => void
  resetChosenSeats: () => void
  addSeats: (seats: Seats, price: number) => void
}

export const useOrderTicketsStore = create<OrderTicketsState, [['zustand/immer', never]]>(
  immer((set) => ({
    initialTicketInfo: null,
    price: 0,
    chosenSeats: [],
    orderPaidStatus: false,

    toggleOrderPaidStatus: () =>
      set((state) => {
        state.orderPaidStatus = !state.orderPaidStatus
      }),

    addInitialTicketInfo: (value: InitialTicketInfo) =>
      set((state) => {
        state.initialTicketInfo = value
      }),

    resetOrderTicketInfo: () => {
      set((state) => {
        state.initialTicketInfo = null
        state.price = 0
        state.chosenSeats = []
      })
    },

    resetChosenSeats: () => {
      set((state) => {
        state.chosenSeats = []
        state.price = 0
      })
    },

    addSeats: (seats: Seats, price: number) =>
      set((state) => {
        const existingSeatIndex = state.chosenSeats.findIndex(
          (chosenSeat) => chosenSeat.row === seats.row && chosenSeat.column === seats.column
        )
        if (existingSeatIndex !== -1) {
          state.chosenSeats.splice(existingSeatIndex, 1)
          state.price -= price
        } else {
          state.chosenSeats.push(seats)
          state.price += price
        }
      })
  }))
)

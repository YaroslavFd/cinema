import React from 'react'

import { Header } from './components/Header'
import { FilmInfoPage } from './pages/FilmInfoPage'
import { HomePage } from './pages/HomePage'

export const App = () => (
  <div className="wrapper">
    <Header />
    <main className="content">
      {/* <HomePage /> */}
      <FilmInfoPage />
    </main>
  </div>
)

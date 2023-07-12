import React from 'react'

import { Header } from './components/Header'
import { HomePage } from './pages/HomePage'

export const App = () => (
  <div className="wrapper">
    <Header />
    <main className="content">
      <HomePage />
    </main>
  </div>
)

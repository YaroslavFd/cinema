import React from 'react'

import { Header } from '../components/Header'
import { NotFound } from '../components/NotFound'

export const NotFoundPage: React.FC = () => (
  <div className="wrapper">
    <Header />
    <main className="content">
      <div className="container">
        <NotFound />
      </div>
    </main>
  </div>
)

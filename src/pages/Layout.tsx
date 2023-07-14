import React from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from '../components/Header'

export const Layout: React.FC = () => (
  <div className="wrapper">
    <Header />
    <main className="content">
      <div className="container">
        <Outlet />
      </div>
    </main>
  </div>
)

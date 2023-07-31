import React from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from '../components/Header'
import { Spinner } from '../UI/Spinner'

const Layout: React.FC = () => (
  <div className="wrapper">
    <Header />
    <main className="content">
      <div className="container">
        <React.Suspense fallback={<Spinner />}>
          <Outlet />
        </React.Suspense>
      </div>
    </main>
  </div>
)

export default Layout

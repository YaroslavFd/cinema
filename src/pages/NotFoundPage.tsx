import React from 'react'
import { Header, NotFound } from '../components'



const NotFoundPage: React.FC = () => (
  <div className="wrapper">
    <Header />
    <main className="content">
      <div className="container">
        <NotFound />
      </div>
    </main>
  </div>
)

export default NotFoundPage

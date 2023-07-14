import { createBrowserRouter, Navigate } from 'react-router-dom'

import { FilmInfoPage } from '../pages/FilmInfoPage'
import { Layout } from '../pages/Layout'
import { PosterPage } from '../pages/PosterPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <div>Error url</div>,
    children: [
      {
        path: '/',
        element: <Navigate to="/poster" replace />
      },
      {
        path: 'poster',
        element: <PosterPage />
      },

      {
        path: 'poster/:id',
        element: <FilmInfoPage />
      },
      {
        path: '/auth',
        element: <div>auth</div>
      }
    ]
  }
])

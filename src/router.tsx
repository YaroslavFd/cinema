import { lazy } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'

import Layout from './pages/Layout'

const AuthPage = lazy(() => import('./pages/AuthPage'))
const FilmInfoPage = lazy(() => import('./pages/FilmInfoPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))
const PosterPage = lazy(() => import('./pages/PosterPage'))
const UserProfilePage = lazy(() => import('./pages/UserProfilePage'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
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
        path: 'auth',
        element: <AuthPage />
      },
      {
        path: 'profile',
        element: <UserProfilePage />
      }
    ]
  }
])

import React from 'react'
import { Navigate } from 'react-router-dom'

import { UserProfile } from '../components/UserProfile'
import { useUserProfileStore } from '../store/userProfile'

const UserProfilePage: React.FC = () => {
  const isAuth = useUserProfileStore((state) => state.isAuth)

  if (isAuth) {
    return (
      <section className="section section-profile">
        <h2 className="title">Личный кабинет</h2>
        <UserProfile />
      </section>
    )
  } else {
    return <Navigate to="/auth" replace />
  }
}

export default UserProfilePage

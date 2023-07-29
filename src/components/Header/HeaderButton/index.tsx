import React from 'react'

import { useUserProfileStore } from '../../../store/userProfile'
import { LoginButton } from './LoginButton'
import { ProfileButton } from './ProfileButton'

export const HeaderButton: React.FC = () => {
  const isAuth = useUserProfileStore((state) => state.isAuth)

  if (isAuth) {
    return <ProfileButton />
  } else {
    return <LoginButton />
  }
}

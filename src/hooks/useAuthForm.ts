import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useUserProfileStore } from '../store/userProfile'
import { AuthService } from '../utils/api/AuthService'
import { getOtpCode } from '../utils/getOtpCode'
import { SignInInfo } from '../utils/types/SignIn'
import { useOtpMutation } from './queries/useOtpMutation'
import { useSignInMutation } from './queries/useSignInMutation'
import { useTimer } from './useTimer'
import { useTwoStepAction } from './useTwoStepAction'

export const useAuthForm = () => {
  const [code, setCode] = React.useState(0)
  const [showCodeBox, setShowCodeBox] = React.useState(false)

  const { isFirst, nextStep } = useTwoStepAction()
  const timer = useTimer()

  const otpMutation = useOtpMutation()
  const signInMutation = useSignInMutation()

  const logout = useUserProfileStore((state) => state.logout)
  const login = useUserProfileStore((state) => state.login)

  const navigate = useNavigate()

  React.useEffect(() => logout(), [])

  React.useEffect(() => {
    if (signInMutation.isSuccess) {
      login({ user: signInMutation.data?.user, token: signInMutation.data?.token })
      navigate('/profile')
    }
  }, [signInMutation.status])

  React.useEffect(() => {
    if (!!otpMutation.data?.retryDelay) {
      // const time = Math.round(otpMutation.data?.retryDelay / 1000)
      timer.start(15)
    }
  }, [otpMutation.data?.retryDelay])

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowCodeBox(false)
    }, 10000)

    return () => clearTimeout(timer)
  }, [showCodeBox])

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    watch
  } = useForm({
    mode: 'onBlur'
  })

  const onSubmit = (signInInfo: SignInInfo) => {
    if (isFirst) {
      nextOtpCode()
      return
    }

    signInMutation.mutate(signInInfo)
  }

  const nextOtpCode = async () => {
    try {
      await otpMutation.mutateAsync({ phone: watch('phone') })

      const htmlResponse = await AuthService.getOtps()
      setCode(Number(getOtpCode(htmlResponse)))
    } catch (error) {
      console.log(error)
    }

    setShowCodeBox(true)
    nextStep()
  }

  const onCodeRequestClick = (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e?.preventDefault()
    nextOtpCode()
  }

  return {
    onSubmit,
    code,
    showCodeBox,
    isValid,
    errors,
    register,
    timer,
    handleSubmit,
    signInMutation,
    isFirst,
    onCodeRequestClick
  }
}

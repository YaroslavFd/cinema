import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useTimer } from '../../hooks/useTimer'
import { useTwoStepAction } from '../../hooks/useTwoStepAction'
import { useUserProfileStore } from '../../store/userProfile'
import { Button } from '../../UI/Button'
import { Input } from '../../UI/Input'
import { AuthService } from '../../utils/api/AuthService'
import { ProfileService } from '../../utils/api/ProfileService'
import { getOtpCode } from '../../utils/getOtpCode'
import { CreateOtp } from '../../utils/types/Otp'
import { SignInInfo } from '../../utils/types/SignIn'
import { FloatingBox } from '../FloatingBox'
import { isValidOtpCode, isValidPhoneNumber } from './ValidationForm'

import styles from './styles.module.scss'

export const AuthForm: React.FC = () => {
  const navigate = useNavigate()

  const [code, setCode] = React.useState(0)
  const [showCodeBox, setShowCodeBox] = React.useState(false)

  const { isFirst, nextStep } = useTwoStepAction()
  const timer = useTimer()

  const otpMutation = useMutation((phone: CreateOtp) => AuthService.otp(phone), {})
  const signInMutation = useMutation((signInInfo: SignInInfo) => ProfileService.signIn(signInInfo), {})

  const addProfile = useUserProfileStore((state) => state.addProfile)

  React.useEffect(() => {
    if (signInMutation.isSuccess) {
      addProfile({ user: signInMutation.data?.user, token: signInMutation.data?.token })
      navigate('/profile')
    }
  }, [signInMutation.status])

  React.useEffect(() => {
    if (!!otpMutation.data?.retryDelay) {
      const time = Math.round(otpMutation.data?.retryDelay / 1000)
      timer.start(time)
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
    otpMutation.mutate({ phone: watch('phone') })

    try {
      const htmlResponse = await AuthService.getOtps()
      setCode(Number(getOtpCode(htmlResponse)))
      setShowCodeBox(true)
    } catch (error) {
      console.log(error)
    }

    nextStep()
  }

  const onCodeRequestClick = (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e?.preventDefault()
    nextOtpCode()
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(({ phone, code }) => onSubmit({ phone, code: parseInt(code) }))}
    >
      {showCodeBox && <FloatingBox>Код: {code}</FloatingBox>}

      <Input
        labelText="Номер телефона"
        required
        name="phone"
        type="tel"
        validation={{
          ...register('phone', {
            required: 'Это поле обязательно для заполнения!',
            validate: (value) => isValidPhoneNumber(value) || 'Номер телефона не действителен'
          })
        }}
        error={errors?.phone?.message as string}
      />

      {!isFirst && (
        <Input
          labelText="Код из SMS"
          required
          name="code"
          type="text"
          validation={{
            ...register('code', {
              required: 'Это поле обязательно для заполнения!',
              validate: (value) => isValidOtpCode(value) || 'Некорректный код'
            })
          }}
          error={errors?.code?.message as string}
        />
      )}

      {signInMutation.isError && <p className={styles.error}>Вы ввели неправильный код</p>}

      <div className={styles.btns}>
        {!isFirst && (
          <>
            {!timer.timesUp && (
              <div className={styles.info}>Запросить код повторно можно через {timer.time} секунд</div>
            )}
            <Button
              appearance="outline"
              onClick={onCodeRequestClick}
              disabled={!timer.timesUp}
              className={!timer.timesUp ? styles.disabled : null}
            >
              Запросить код
            </Button>
          </>
        )}
        <Button disabled={(isFirst && !isValid) || signInMutation.isLoading} type="submit">
          Продолжить
        </Button>
      </div>
    </form>
  )
}

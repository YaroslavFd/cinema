import React from 'react'

import { useAuthForm } from '../../hooks/useAuthForm'
import { FloatingBox } from '../FloatingBox'
import { PhoneInput } from './Inputs/PhoneInput'
import { SmsCodeInput } from './Inputs/SmsCodeInput'
import { TwoStepActionButtons } from './TwoStepActionButtons'

import styles from './styles.module.scss'

export const AuthForm: React.FC = () => {
  const {
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
  } = useAuthForm()

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(({ phone, code }) => onSubmit({ phone, code: parseInt(code) }))}
    >
      {showCodeBox && (
        <FloatingBox>{code ? `Код: ${code}` : 'Ошибка. Попробуйте запросить код снова.'}</FloatingBox>
      )}

      <PhoneInput register={register} errors={errors} />

      {!isFirst && <SmsCodeInput register={register} errors={errors} />}

      {signInMutation.isError && <p className={styles.error}>Вы ввели неправильный код</p>}

      <TwoStepActionButtons
        isFirst={isFirst}
        isValid={isValid}
        timesUp={timer.timesUp}
        time={timer.time}
        isLoading={signInMutation.isLoading}
        onCodeRequestClick={onCodeRequestClick}
      />
    </form>
  )
}

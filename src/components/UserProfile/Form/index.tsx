import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'

import { useFetchSession } from '../../../hooks/queries'
import { Button, Input } from '../../../UI'
import { userProfileScheme } from '../../../utils/validationSchemes'

import styles from './styles.module.scss'

export const Form: React.FC = () => {
  const { data, status } = useFetchSession()

  const {
    register,
    formState: { errors, isValid },
    reset,
    handleSubmit
  } = useForm({
    resolver: yupResolver(userProfileScheme),
    mode: 'onBlur'
  })

  React.useEffect(() => {
    reset({ ...data?.user })
  }, [status])

  const onSubmit = () => {
    // NOTE: Backend functionality for updating user data is not yet available.
    window.location.reload()
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        labelText="Номер телефона"
        required
        name="phone"
        type="tel"
        validation={{ ...register('phone') }}
        error={errors?.phone?.message}
      />
      <Input
        labelText="Имя"
        name="firstname"
        validation={{ ...register('firstname') }}
        error={errors?.firstname?.message}
      />
      <Input
        labelText="Фамилия"
        name="lastname"
        validation={{ ...register('lastname') }}
        error={errors?.lastname?.message}
      />
      <Input
        labelText="Отчество"
        name="middlename"
        validation={{ ...register('middlename') }}
        error={errors?.middlename?.message}
      />
      <Input
        labelText="Email"
        name="email"
        validation={{ ...register('email') }}
        error={errors?.email?.message}
      />
      <Input
        labelText="Город"
        name="city"
        validation={{ ...register('city') }}
        error={errors?.city?.message}
      />

      <Button className={styles.btn} disabled={!isValid} type="submit">
        Обновить данные
      </Button>
    </form>
  )
}

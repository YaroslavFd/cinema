import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'

import { Person, useUserInfoStore } from '../../store/userInfo'
import { Button } from '../../UI/Button'
import { Input } from '../../UI/Input'
import { userInfoScheme } from '../../utils/validationSchemes/userInfoScheme'

import styles from './styles.module.scss'

interface IUserInfoFormProps {
  onUserInfoSubmit: () => void
}

export const UserInfoForm: React.FC<IUserInfoFormProps> = ({ onUserInfoSubmit }) => {
  const addPersonInfo = useUserInfoStore((state) => state.addPersonInfo)

  const {
    register,
    formState: { errors, isValid },
    handleSubmit
  } = useForm({
    resolver: yupResolver(userInfoScheme),
    mode: 'onBlur'
  })

  const onSubmit = (data: Person) => {
    addPersonInfo(data)
    onUserInfoSubmit()
  }

  return (
    <>
      <h3 className={styles.title}>Введите ваши данные</h3>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          labelText="Имя"
          name="firstname"
          required
          validation={{ ...register('firstname') }}
          error={errors?.firstname?.message}
        />
        <Input
          labelText="Фамилия"
          name="lastname"
          required
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
          labelText="Телефон"
          required
          name="phone"
          type="tel"
          validation={{ ...register('phone') }}
          error={errors?.phone?.message}
        />

        <Button className={styles.btn} disabled={!isValid} type="submit">
          Далее
        </Button>
      </form>
    </>
  )
}

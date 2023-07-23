import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '../../UI/Button'
import { Input } from '../../UI/Input'
import { formatCardCvv, formatCardNumber, formatCardTerm } from '../../utils/cardFormatters'
import { DebitCard } from '../../utils/types/DebitCard'
import { cardInfoScheme } from '../../utils/validationSchemes/cardInfoScheme'

import shiftCard from '../../assets/shiftCart.svg'
import styles from './styles.module.scss'

interface CardInfoFormProps {
  onCardInfoSubmit: (cardInfo: DebitCard) => void
}

export const CardInfoForm: React.FC<CardInfoFormProps> = ({ onCardInfoSubmit }) => {

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    setValue,
    reset
  } = useForm({
    resolver: yupResolver(cardInfoScheme),
    mode: 'onBlur'
  })

  const onSubmit = (data: DebitCard) => {
    onCardInfoSubmit(data)
    reset()
  }

  const handleCardNumberChange = (value: string) => {
    const formattedValue = formatCardNumber(value)
    setValue('pan', formattedValue)
  }

  const handleCardTermChange = (value: string) => {
    const formattedValue = formatCardTerm(value)
    setValue('expireDate', formattedValue)
  }

  const handleCardCvvChange = (value: string) => {
    const formattedValue = formatCardCvv(value)
    setValue('cvv', formattedValue)
  }

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Введите данные карты для оплаты</h3>
      <div className={styles.boxForm}>
        <div className={styles.top}>
          <img src={shiftCard} alt="shift cart" />
        </div>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.cardBox}>
            <Input
              labelText="Номер"
              name="pan"
              placeholder="Номер карты"
              required
              validation={{ ...register('pan') }}
              error={errors?.pan?.message}
              onChange={handleCardNumberChange}
            />
            <div>
              <Input
                labelText="Срок"
                name="expireDate"
                placeholder="ММ/ГГ"
                required
                error={errors?.expireDate?.message}
                validation={{ ...register('expireDate') }}
                onChange={handleCardTermChange}
              />
              <Input
                labelText="CVV"
                name="cvv"
                required
                placeholder="CVV/CVC"
                validation={{ ...register('cvv') }}
                error={errors?.cvv?.message}
                type="password"
                onChange={handleCardCvvChange}
              />
            </div>
          </div>

          <Button className={styles.btn} disabled={!isValid} type="submit">
            Оплатить
          </Button>
        </form>
      </div>
    </div>
  )
}

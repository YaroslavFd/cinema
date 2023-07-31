import React from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

import { Input } from '../../../UI'
import { isValidPhoneNumber } from '../../../utils'

interface PhoneInputProps {
  register: UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>
}

export const PhoneInput: React.FC<PhoneInputProps> = ({ register, errors }) => (
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
)

import React from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

import { Input } from '../../../UI'
import { isValidOtpCode } from '../../../utils'

interface SmsCodeInputProps {
  register: UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>
}

export const SmsCodeInput: React.FC<SmsCodeInputProps> = ({ register, errors }) => (
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
)

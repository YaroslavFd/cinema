import * as yup from 'yup'

export const authScheme = yup.object({
  phone: yup
    .string()
    .required('Это поле обязательно для заполнения!')
    .matches(
      /^(8|\+7)?[\s-]?\(?(9|4[0-9]|3[0-9]|2[0-9]|8[0-9]|4[0-9])\)?[\s-]?\d{1,3}[\s-]?\d{2,3}[\s-]?\d{2}[\s-]?\d{2}$/,
      'Номер телефона не действителен'
    ),
  otpCode: yup
    .string()
    .required('Это поле обязательно для заполнения!')
    .matches(/^[0-9]{6}$/i, 'Некорректный код')
})

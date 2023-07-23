import * as yup from 'yup'

export const cardInfoScheme = yup.object({
  pan: yup
    .string()
    .required('Заполните поле')
    .matches(/^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/, 'Неправильный номер карты'),
  expireDate: yup
    .string()
    .required('Заполните поле')
    .matches(/^(0[1-9]|1[0-2])\/[0-9]{2}$/, 'Неверная дата'),
  cvv: yup
    .string()
    .required('Заполните поле')
    .matches(/^[0-9]{3}$/, 'Неверный код')
})

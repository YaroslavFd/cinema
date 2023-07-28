import * as yup from 'yup'

export const userProfileScheme = yup.object({
  firstname: yup
    .string()
    .test('min-length', 'Введите больше символов', (value) => {
      if (value && value.trim().length > 0) {
        return value.trim().length >= 2
      }
      return true
    })
    .max(30, 'Максимум 30 символов')
    .matches(/^[a-zA-Zа-яА-Я ]*$/, 'Имя должно содержать только буквы'),
  lastname: yup
    .string()
    .test('min-length', 'Введите больше символов', (value) => {
      if (value && value.trim().length > 0) {
        return value.trim().length >= 2
      }
      return true
    })
    .max(30, 'Максимум 30 символов')
    .matches(/^[a-zA-Zа-яА-Я ]*$/, 'Фамилия должна содержать только буквы'),
  middlename: yup
    .string()
    .test('min-length', 'Введите больше символов', (value) => {
      if (value && value.trim().length > 0) {
        return value.trim().length >= 2
      }
      return true
    })
    .max(30, 'Максимум 30 символов')
    .matches(/^[a-zA-Zа-яА-Я ]*$/, 'Отчество должно содержать только буквы'),
  city: yup
    .string()
    .test('min-length', 'Введите больше символов', (value) => {
      if (value && value.trim().length > 0) {
        return value.trim().length >= 2
      }
      return true
    })
    .max(30, 'Максимум 30 символов')
    .matches(/^[a-zA-Zа-яА-Я ]*$/, 'Название города должно содержать только буквы'),
  phone: yup
    .string()
    .required('Это поле обязательно для заполнения!')
    .matches(
      /^(8|\+7)?[\s-]?\(?(9|4[0-9]|3[0-9]|2[0-9]|8[0-9]|4[0-9])\)?[\s-]?\d{1,3}[\s-]?\d{2,3}[\s-]?\d{2}[\s-]?\d{2}$/,
      'Номер телефона не действителен'
    ),
  email: yup.string().email('Введите действительный адрес электронной почты')
})

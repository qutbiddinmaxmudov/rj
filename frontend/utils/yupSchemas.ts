import * as yup from 'yup'

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Некорректный электронный адрес')
    .required('Почта обязательна'),
  password: yup
    .string()
    .required('Пароль обязателен')
    .min(6, 'Длина пароля должна быть не меньше 6'),
})

export const RegisterSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Имя должна содержать минимум 3 символа')
    .required('Имя обязательна'),
}).concat(LoginSchema)

import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from '@material-ui/core'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { RegisterSchema } from '../../../utils/yupSchemas'
import { FormField } from '../../FormField'

interface Props {
  changeForm: (page: 'main' | 'login' | 'register') => void
}

const Register: React.FC<Props> = ({ changeForm }) => {
  const openLoginForm = () => changeForm('login')
  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(RegisterSchema),
    shouldFocusError: false,
  })
  console.log(form.formState.errors)
  const handleSubmit = (data) => console.log(data)
  return (
    <div>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <FormField name="username" label="Имя и фамилия" />
          <FormField name="email" label="Почта" />
          <FormField type="password" name="password" label="Пароль" />
          <div className="d-flex align-center justify-between">
            <Button disabled={!form.formState.isValid} color="primary" variant="contained" type="submit">
              Зарегистрироваться
            </Button>
            <Button color="primary" variant="text" onClick={openLoginForm}>
              Войти
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}

export default Register

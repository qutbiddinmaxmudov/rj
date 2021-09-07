import { Button } from '@material-ui/core'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormField } from '../../FormField'
import { LoginSchema } from '../../../utils/yupSchemas'

interface Props {
  changeForm: (page: 'main' | 'login' | 'register') => void
}

const Login: React.FC<Props> = ({ changeForm }) => {
  const openRegisterForm = () => changeForm('register')
  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(LoginSchema),
    shouldFocusError: false,
  })
  console.log(form.formState.errors)
  const handleSubmit = (data) => console.log(data)

  return (
    <div>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <FormField name="email" label="Почта" />
          <FormField type="password" name="password" label="Пароль" />
          <div className="d-flex align-center justify-between">
            <Button disabled={!form.formState.isValid} color="primary" variant="contained" type="submit">
              Войти
            </Button>
            <Button color="primary" variant="text" onClick={openRegisterForm}>
              Регистрация
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}

export default Login

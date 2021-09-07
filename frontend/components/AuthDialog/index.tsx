import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogContentText,
  Typography,
} from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

import styles from './AuthDialog.module.scss'
import Register from './forms/Register'
import Main from './forms/Main'
import Login from './forms/Login'

interface AuthDialogProps {
  onClose: () => void
  visible: boolean
}

export const AuthDialog: React.FC<AuthDialogProps> = ({ onClose, visible }) => {
  const [formType, setFormType] = React.useState<'main' | 'login' | 'register'>(
    'main'
  )

  return (
    <Dialog  open={visible} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogContent>
        <DialogContentText>
          <div className={styles.content}>
            <Typography className={styles.title}>
              {formType === 'main' ? (
                'Вход в RJ'
              ) : (
                <p
                  onClick={() => setFormType('main')}
                  className={styles.backTitle}
                >
                  <ArrowBackIcon /> К авторизации
                </p>
              )}
            </Typography>
            {formType === 'main' && <Main changeForm={setFormType}/>}
            {formType === 'login' && <Login changeForm={setFormType}/>}
            {formType === 'register' && <Register changeForm={setFormType}/>}
          </div>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  )
}

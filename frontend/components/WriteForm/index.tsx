import React from 'react'
import dynamic from 'next/dynamic'
import { Button, Input } from '@material-ui/core'
import classes from './WriteForm.module.scss'

interface WriteFormInterface {
  title?: string
}

const Editor = dynamic(() => import('../Editor').then((m) => m.default), {
  ssr: false,
})

const WriteForm: React.FC<WriteFormInterface> = ({ title }) => {
  return (
    <div>
      <Input
        className={classes.titleField}
        placeholder="Заголовок"
        defaultValue={title}
      />
      <div className={classes.editor}>
        <Editor />
      </div>
      <Button variant="contained" color="primary">
        Опубликовать
      </Button>
    </div>
  )
}

export default WriteForm

import { Button, Input } from '@material-ui/core'
import React, { useState } from 'react'
import classes from './AddCommentForm.module.scss'

const AddCommentForm = () => {
  const [clicked, setClicked] = useState(false)
  const [comment, setComment] = useState('')
  const handleClick = () => setClicked(true)
  const handleSubmit = () => {
    setClicked(false)
    setComment('')
  }
  return (
    <div className={classes.fieldWrapper}>
      <Input
        onFocus={handleClick}
        classes={{
          root: classes.fieldRoot,
        }}
        onChange={({ target }) => setComment(target.value)}
        minRows={clicked ? 5 : 1}
        placeholder="Написать комментарий..."
        fullWidth
        multiline
        value={comment}
      />
      {clicked && (
        <Button
          onClick={handleSubmit}
          className={classes.addButton}
          variant="contained"
          color="primary"
        >
          Опубликовать
        </Button>
      )}
    </div>
  )
}

export default AddCommentForm

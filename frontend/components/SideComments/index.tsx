import React, { useState } from 'react'
import ArrowRightIcon from '@material-ui/icons/NavigateNextOutlined'

import styles from './SideComments.module.scss'
import CommentItem from './CommentItem'
import clsx from 'clsx'

const items = [
  {
    user: {
      id: 1,
      fullname: 'Вася Пупкин',
    },
    text: 'Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…',
    post: {
      id: 1,
      title: 'Какая у вас дома ванна?',
    },
  },
  {
    user: {
      id: 2,
      fullname: 'Вася Пупкин',
    },
    text: 'Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…',
    post: {
      id: 2,
      title: 'Какая у вас дома ванна?',
    },
  },
  {
    user: {
      id: 3,
      fullname: 'Вася Пупкин',
    },
    text: 'Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…',
    post: {
      id: 3,
      title: 'Какая у вас дома ванна?',
    },
  },
]

export const SideComments = () => {
  const [visible, setVisible] = useState(true)

  const toggleVisible = () => setVisible(!visible)

  return (
    <div className={clsx(styles.root, !visible && styles.rotated)}>
      <h3 onClick={toggleVisible}>
        Комментарии <ArrowRightIcon />
      </h3>
      {visible && items.map((obj, i) => <CommentItem key={i} {...obj} />)}
    </div>
  )
}

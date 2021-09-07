import { MainLayout } from '../../layouts/MainLayout'
import { FullPost } from '../../components/FullPost'
import React from 'react'
import PostComments from '../../components/PostComments'

const items = [
  {
    id: 1,
    user: {
      fullname: 'Вася Пупкин',
    },
    text: 'Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…',
    post: {
      title: 'Какая у вас дома ванна?',
    },
    createdAt: new Date().toLocaleTimeString(),
  },
  {
    id: 2,
    user: {
      fullname: 'Вася Пупкин',
    },
    text: 'Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…',
    post: {
      title: 'Какая у вас дома ванна?',
    },
    createdAt: new Date().toLocaleTimeString(),
  },
  {
    id: 3,
    user: {
      fullname: 'Вася Пупкин',
    },
    text: 'Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…',
    post: {
      title: 'Какая у вас дома ванна?',
    },
    createdAt: new Date().toLocaleTimeString(),
  },
]

export default function News() {
  return (
    <MainLayout className="mb-50" contentFullWidth>
      <FullPost />
      <PostComments items={items} />
    </MainLayout>
  )
}

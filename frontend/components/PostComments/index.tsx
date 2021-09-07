import { Paper, Typography, Tabs, Tab, Divider } from '@material-ui/core'
import React, { useState } from 'react'
import AddCommentForm from '../AddCommentForm'
import { Comment } from '../Comment'

interface CommentInterface {
  text: string
  id: number
  createdAt: string
  user: {
    fullname: string
    avatarUrl?: string
  }
}

interface PostCommentsInterface {
  items: CommentInterface[]
}

const PostComments: React.FC<PostCommentsInterface> = ({ items }) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <Paper elevation={0} className="mt-40 p-30">
      <div className="container">
        <Typography variant="h6" className="mb-20">
          42 комментария
        </Typography>
        <Tabs
          className="mt-20"
          value={activeTab}
          indicatorColor="primary"
          textColor="primary"
          onChange={(_, value) => setActiveTab(value)}
        >
          <Tab label="Популярные" />
          <Tab label="По порядку" />
        </Tabs>
        <Divider />
        <AddCommentForm />
        <div className="mb-20" />
        {items.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
      </div>
    </Paper>
  )
}

export default PostComments

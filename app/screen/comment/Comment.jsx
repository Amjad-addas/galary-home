import React from 'react'
import sryle from './comment.module.css'
import Comment from '@/app/components/commentcard/Comment'
import Title from '@/app/components/title/Title'
function CommentS() {
  return (
    <div className={sryle.black}>
        <Title z='white' x='Client' y='Testimonials'/>
        <Comment/>
    </div>
  )
}

export default CommentS
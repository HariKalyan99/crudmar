import React from 'react'
import Post from './Post'

const Displaypost = ({postList, onDeletePost, onEditPost}) => {
  return (
    <div class="album py-5 bg-body-tertiary" style={{width: "100%"}}>
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {postList.map((post) => (<Post key={post.id} post={post} onDeletePost={onDeletePost} onEditPost={onEditPost} />))}
      </div>
    </div>
  </div>
  )
}

export default Displaypost
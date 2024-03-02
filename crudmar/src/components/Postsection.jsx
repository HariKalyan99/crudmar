import React from 'react'
import Sidebar from './Sidebar'
import Createpost from './Createpost'
import Displaypost from './Displaypost'

const Postsection = ({postList, onAddPost, onDeletePost, onEditPost}) => {
  return (
    <div style={{display: "flex"}}>
        <Sidebar />
        <Displaypost postList={postList} onDeletePost={onDeletePost} onEditPost={onEditPost}/>
        {/* <Createpost onAddPost={onAddPost}/> */}
    </div>
  )
}

export default Postsection
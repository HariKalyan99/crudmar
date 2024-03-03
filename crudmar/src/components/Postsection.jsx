import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Createpost from './Createpost'
import Displaypost from './Displaypost'

const Postsection = ({postList, onAddPost, onDeletePost, onEditPost}) => {
  const [whatTodisplay, setWhatToDisplay] = useState("createpost");

  const show = (path) => {
    setWhatToDisplay(path)
  }
  return (
    <div style={{display: "flex"}}>
        <Sidebar show={show} whatTodisplay={whatTodisplay}/>
        {whatTodisplay === "postlist" && <Displaypost postList={postList} onDeletePost={onDeletePost} onEditPost={onEditPost}/>}
        {whatTodisplay === "createpost" && <Createpost onAddPost={onAddPost} show={show} whatTodisplay={whatTodisplay}/>}
    </div>
  )
}

export default Postsection
import React, { useContext, useState } from 'react'
import Editpost from './Editpost';
import { Crudstore } from '../store/Crudstore';

const Post = ({post}) => {

  const {onDeletePost} = useContext(Crudstore);
    const [createPostActive, setCreatePostActive] = useState(false);
  return (
    <div class="col" >
          <div class="card shadow-sm">
            <div class="card-body" style={{height: "400px"}}>
            <h4>{post.title}</h4>
              <p class="card-text">{post.body}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                 {post.tags.map((tag, ind) => (<button key={ind} type="button" class="btn btn-sm btn-outline-secondary">{tag}</button>)) }
                </div>
                <small class="text-body-secondary">{post.userId}</small>
              </div>
              <button onClick={() => onDeletePost(post.id)}>Del</button>
              <button onClick={() => setCreatePostActive(!createPostActive)}>Edit Post</button>

              <div style={{position: "fixed", zIndex: 2, top: "180px", left: "330px", backgroundColor: "white", width: "80%"}}>
              {createPostActive && <Editpost postedValues={post}  setCreatePostActive={setCreatePostActive} createPostActive={createPostActive}>
                <button style={{marginBottom: "20px", padding: "10px", border: "none", backgroundColor: "yellowgreen"}} onClick={() => setCreatePostActive(!createPostActive)}>I don't want to change</button>
                </Editpost>}
              </div>
            </div>
          </div>
        </div>
  )
}

export default Post
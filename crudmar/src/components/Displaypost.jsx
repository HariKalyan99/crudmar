import React, { useContext } from 'react'
import Post from './Post'
import { Crudstore } from '../store/Crudstore';

const Displaypost = () => {

  const {postList} = useContext(Crudstore);
  return (
    <div class="album py-5 bg-body-tertiary" style={{width: "100%"}}>
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {postList.map((post) => (<Post key={post.id} post={post}  />))}
      </div>
    </div>
  </div>
  )
}

export default Displaypost
import React, { useContext, useState } from 'react'
import Sidebar from './Sidebar'
import Createpost from './Createpost'
import Displaypost from './Displaypost'
import { Crudstore } from '../store/Crudstore'

const Postsection = () => {
  
  const {whatTodisplay} = useContext(Crudstore);



  return (
    <div style={{display: "flex"}}>
        <Sidebar />
        {whatTodisplay === "postlist" && <Displaypost />}
        {whatTodisplay === "createpost" && <Createpost  />}
    </div>
  )
}

export default Postsection
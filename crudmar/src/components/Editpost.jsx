import React, {useContext, useState } from "react";
import { Crudstore } from "../store/Crudstore";

const Editpost = ({children, postedValues, setCreatePostActive, createPostActive}) => {

        // postedValues.userId, postedValues.title, postedValues.body,postedValues.tags, postedValues.id, postedValues.reactions

        const {onEditPost} = useContext(Crudstore);
  const [userIdRef, setuserIdRef] = useState("" || postedValues.userId);
  const [titleRef, settitleRef] = useState("" || postedValues.title);
  const [bodyRef, setbodyRef] = useState("" || postedValues.body);
  const [tagsRef, settagsRef] = useState("" || postedValues.tags);
  const [reationsRef, setreationsRef] = useState("" || postedValues.reactions);

  const handleSubmit = (e) => {
    e.preventDefault();
    let tags = tagsRef.split(",");
onEditPost(userIdRef,
    titleRef,
    bodyRef,
    tags,
    reationsRef, postedValues.id)
    setCreatePostActive(!createPostActive)

  };

    return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            alignItems: "center",
          }}
        >
          <form
            onSubmit={(e) => handleSubmit(e)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <label htmlFor="userId" >
              User Id
            </label>
            <input type="text" id="userId" value={userIdRef} 
            onChange={(e) => setuserIdRef(e.target.value)} />
    
            <label htmlFor="title" >
              Title
            </label>
            <input type="text" id="title" value={titleRef} 
            onChange={(e) => settitleRef(e.target.value)} />
    
            <label htmlFor="body" >
              Body
            </label>
            <textarea
              cols="64"
              rows="3"
              id="body"
              style={{ borderRadius: "8px" }}
              value={bodyRef} 
              onChange={(e) => setbodyRef(e.target.value)}
            />
    
            <label htmlFor="tags" >
              Tags
            </label>
            <input type="text" id="tags" value={tagsRef} 
            onChange={(e) => settagsRef(e.target.value)} />
    
            <label htmlFor="reations" >
              Reactions
            </label>
            <input type="text" id="reations" value={reationsRef} 
            onChange={(e) => setreationsRef(e.target.value)} />
    
            <button type="submit" id="subBtn">
              Edit Post
            </button>
    
            {children}
          </form>
        </div>
      );
  
};

export default Editpost;

import React, { useRef } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";

const Createpost = ({onAddPost, children}) => {

  const navigate = useNavigate();
        // post.userId, post.title, post.body,post.tags, post.id, post.reactions
  const userIdRef = useRef("");
  const titleRef = useRef("");
  const bodyRef = useRef("");
  const tagsRef = useRef("");
  const reationsRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId =  userIdRef.current.value;
const title =  titleRef.current.value;
const body =  bodyRef.current.value;
const tags =  tagsRef.current.value.split(",");
const reations =  reationsRef.current.value;

onAddPost(userId,
    title,
    body,
    tags,
    reations, uuidv4())

    userIdRef.current.value = "";
titleRef.current.value = "";
bodyRef.current.value = "";
tagsRef.current.value = "";
reationsRef.current.value = "";
navigate("/post-list");
// console.log(userId,
//     title,
//     body,
//     tags,
//     reations,)
    
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
        <input type="text" id="userId" ref={userIdRef} />

        <label htmlFor="title" >
          Title
        </label>
        <input type="text" id="title" ref={titleRef} />

        <label htmlFor="body" >
          Body
        </label>
        <textarea
          cols="64"
          rows="3"
          id="body"
          style={{ borderRadius: "8px" }}
          ref={bodyRef}
        />

        <label htmlFor="tags" >
          Tags
        </label>
        <input type="text" id="tags" ref={tagsRef} />

        <label htmlFor="reations" >
          Reactions
        </label>
        <input type="text" id="reations" ref={reationsRef} />

        <button type="submit" id="subBtn">
          Add Post
        </button>

      </form>
    </div>
  );
};

export default Createpost;

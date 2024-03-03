import { useEffect, useState } from "react";
import "./App.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from "axios";
import Postsection from "../components/Postsection";

function App() {
  const [postList, setPostList] = useState([]);

  const [addPost, setAddPost] = useState({});

  const [delPost, setDelPost] = useState("");

  const [editPost, setEditPost] = useState({});

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchPostList = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8081/posts`, signal);
        setPostList(data);
      } catch (error) {
        console.log("Error", error);
      }
    };

    fetchPostList();

    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    const addPostList = async ({ userId, title, body, tags, reactions, id }) => {
      try {
        const { data } = await axios.post(`http://localhost:8081/posts`, {
          userId,
          title,
          body,
          tags,
          reactions,
          id,
        });
        setPostList([{id: data.id, userId: data.userId, title: data.title, body: data.body, tags: data.tags, reactions: data.reactions}, ...postList]);
      } catch (error) {
        console.log("Error", error);
      }
    };

    if (addPost.title) {
      addPostList(addPost);
    }
  }, [addPost]);


  useEffect(() => {
    const delPostList = async (id) => {
      try {
        const {data} = await axios.delete(`http://localhost:8081/posts/${id}`)
        const newPostList = postList.filter((post) => post.id !== data.id)
        setPostList(newPostList);
      } catch (error) {
        console.log("Error", error);
      }
    };

    if (delPost) {
      delPostList(delPost);
    }
  }, [delPost]);


  useEffect(() => {
    const editPostList = async ({userId, title, body, tags, reactions, id}) => {
      try {
        const {data} = await axios.put(`http://localhost:8081/posts/${id}`, {
          userId, title, body, tags, reactions, id
        });
        const newPostListEdit = postList.filter((post) => post.id !== id);
        setPostList([{id: data.id, userId: data.userId, title: data.title, body: data.body, tags: data.tags, reactions: data.reactions}, ...newPostListEdit]);
      } catch (error) {
        console.log("Error", error);
      }
    };

    if (editPost.title) {
      editPostList(editPost);
    }
  }, [editPost]);

  const onAddPost = (userId, title, body, tags, reactions, id) => {
    setAddPost({ id,
      title,
      body,
      userId,
      tags,
      reactions });
  };

  const onDeletePost = (id) => {
    setDelPost(id);
  }

  const onEditPost = (userId, title, body, tags, reactions, id) => {
    setEditPost({userId, title, body, tags, reactions, id})
  }

  return (
    <div>
      <Header />
      <Postsection postList={postList} onAddPost={onAddPost} onDeletePost={onDeletePost} onEditPost={onEditPost}/>
      <Footer />
    </div>
  );
}

export default App;

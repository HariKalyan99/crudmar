import { createContext, useEffect, useReducer, useState } from "react";
import axios from "axios";



export const Crudstore = createContext({
    onAddPost: () => {},
    onDeletePost: () => {},
    onEditPost: () => {},
    postList: [],
    whatTodisplay: "",
    show: () => {},
  })


function pureReducerFunction(currentList, action) {
    let newPostListByReducer = currentList;
    if(action.type === "INITIAL_POST"){
        newPostListByReducer = action.payload.data;
    }else if(action.type === "ADD_POST"){
        newPostListByReducer = ([{id: action.payload.id, userId: action.payload.userId, title: action.payload.title, body: action.payload.body, tags: action.payload.tags, reactions: action.payload.reactions}, ...currentList])
    }else if(action.type === "DELETE_POST"){
        const newPostList = currentList.filter((post) => post.id !== action.payload.data.id)
        newPostListByReducer = newPostList;
    }else if(action.type === "EDIT_POST"){
        const newPostListEdit = currentList.filter((post) => post.id !== action.payload.id);
        newPostListByReducer =  ([{id: action.payload.data.id, userId: action.payload.data.userId, title: action.payload.data.title, body: action.payload.data.body, tags: action.payload.data.tags, reactions: action.payload.data.reactions}, ...newPostListEdit]);
    }
    return newPostListByReducer;
}



const Crudstorecontextprovider = ({children}) => {

    const [addPost, setAddPost] = useState({});
  
    const [delPost, setDelPost] = useState("");
  
    const [editPost, setEditPost] = useState({});

    const [postList, dispatcherFunction] = useReducer(pureReducerFunction, []);
  
    const [whatTodisplay, setWhatToDisplay] = useState("createpost");

    const show = (path) => {
        setWhatToDisplay(path)
    }
  
    useEffect(() => {
      const controller = new AbortController();
      const { signal } = controller;
  
      const fetchPostList = async () => {
        try {
          const { data } = await axios.get(`http://localhost:8081/posts`, signal);
          dispatcherFunction({
            type: "INITIAL_POST",
            payload: {data,}
          })
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
          dispatcherFunction({
            type: "ADD_POST",
            payload: {id: data.id, userId: data.userId, title: data.title, body: data.body, tags: data.tags, reactions: data.reactions}
          })
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
          dispatcherFunction({
            type: "DELETE_POST",
            payload: {
                data,
            }
          })
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
          dispatcherFunction({
            type: "EDIT_POST",
            payload: {
                data,
                id,
            }
          })
        } catch (error) {
          console.log("Error", error);
        }
      };
  
      if (editPost.title) {
        editPostList(editPost);
      }
    }, [editPost]);
  
    const onAddPost = (userId, title, body, tags, reactions, id) => {
      setAddPost({id,
        title,
        body,
        userId,
        tags,
        reactions});
    };
  
    const onDeletePost = (id) => {
      setDelPost(id);
    }
  
    const onEditPost = (userId, title, body, tags, reactions, id) => {
      setEditPost({userId, title, body, tags, reactions, id})
    }
  
    return (
        <Crudstore.Provider value={{onAddPost, onDeletePost, onEditPost, postList, show, whatTodisplay}}>
            {children}
        </Crudstore.Provider>
    )
  }


  export default Crudstorecontextprovider;
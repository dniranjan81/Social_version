import { createContext, useReducer } from "react";
import { DefaultContext } from "react-icons";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, PostTitle, PostBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: PostTitle,
        body: PostBody,
        reactions: reactions,
        UserId: userId,
        tags: tags,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  return (
    <PostList.Provider
      value={{ postList: postList, addPost: addPost, deletePost: deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};
const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "GOA 2023",
    body: "Hii friends i am going to goa",
    reactions: 4,
    UserId: "9",
    tags: ["vacation", "Mumbai", "Pune"],
  },
  {
    id: "2",
    title: "PUNE 2023",
    body: "Hii friends i am going to pune",
    reactions: 15,
    UserId: "8",
    tags: ["vacation", "Pune"],
  },
];
export default PostListProvider;

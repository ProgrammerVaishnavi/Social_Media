import { useReducer } from "react";
import { PostList } from "./post-list-context";

const postListReducer = (currPostList, action) => {
  if (action.type === "DELETE_POST") {
    return currPostList.filter((post) => post.id !== action.payload.postID);
  }

  if (action.type === "ADD_POST") {
    return [action.payload, ...currPostList];
  }

  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, _dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST,
  );

  const addPost = (userID, title, body, reactions, tags) => {
    _dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now().toString(),
        title,
        body,
        reactions,
        userID,
        tags,
      },
    });
  };

  const deletePost = (postID) => {
    _dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postID,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};
const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Hello",
    body: "This is the post body",
    reactions: 2,
    userID: "user-9",
    tags: ["hello", "post"],
  },
  {
    id: "2",
    title: "Hello",
    body: "This is the post body",
    reactions: 2,
    userID: "user-9",
    tags: ["one", "new"],
  },
];
export default PostListProvider;

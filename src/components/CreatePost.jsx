import { useRef, useContext, useState } from "react";
import { PostList } from "../store/post-list-context";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userId = useRef();
  const postTitle = useRef();
  const body = useRef();
  const reactions = useRef();
  const tags = useRef();

  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const tagArray = tags.current.value
      .split(" ")
      .filter((tag) => tag.trim() !== "")
      .map((tag) => (tag.startsWith("#") ? tag : `#${tag}`));

    addPost(
      userId.current.value,
      postTitle.current.value,
      body.current.value,
      reactions.current.value,
      tagArray,
    );

    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);

    userId.current.value = "";
    postTitle.current.value = "";
    body.current.value = "";
    reactions.current.value = "";
    tags.current.value = "";
  };

  return (
    <>
      {showSuccess && (
        <div className="alert alert-success" role="alert">
          Post created successfully!
        </div>
      )}

      <form className="post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            User ID
          </label>
          <input
            type="text"
            ref={userId}
            className="form-control"
            id="userId"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            ref={postTitle}
            className="form-control"
            id="title"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea ref={body} rows="5" className="form-control" id="body" />
        </div>

        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Number of Reactions
          </label>
          <input
            type="text"
            ref={reactions}
            className="form-control"
            id="reactions"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Tags
          </label>
          <input
            type="text"
            ref={tags}
            className="form-control"
            id="tags"
            placeholder="react coding socialmedia"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
};

export default CreatePost;

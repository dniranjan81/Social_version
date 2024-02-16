import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useRef } from "react";
import { PostList } from "../Store/Post-list-store";
const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const PostTitleElement = useRef();
  const PostBodyElement = useRef();
  const ReactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const PostTitle = PostTitleElement.current.value;
    const PostBody = PostBodyElement.current.value;
    const reactions = ReactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = " ";
    PostTitleElement.current.value = "";
    PostBodyElement.current.value = "";
    ReactionsElement.current.value = 0;
    tagsElement.current.value = " ";
    addPost(userId, PostTitle, PostBody, reactions, tags);
  };
  return (
    <form className="CreatePost" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="UserId" className="form-label">
          Enter Your UserID:
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="title"
          placeholder="Enter the userID"
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={PostTitleElement}
          className="htmlForm-control"
          id="title"
          placeholder="Enter the tier title"
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          PostContent
        </label>
        <textarea
          type="text"
          rows="4"
          ref={PostBodyElement}
          className="form-control"
          id="body"
          placeholder="Tell us more about it"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="No of Reactions" className="form-label">
          Number ofs Reactions:
        </label>
        <input
          type="text"
          className="htmlForm-control"
          id="Reactions"
          ref={ReactionsElement}
          placeholder="People reacted to this post"
        ></input>
      </div>{" "}
      <div className="mb-3">
        <label htmlFor="No of Reactions" className="form-label">
          Enter Your HashTags:
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="htmlForm-control"
          id="Hashtags"
          placeholder="Enter the hashtags separated by Comma"
        ></input>
      </div>
      <button type="Submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};
export default CreatePost;

import Post from "./Post";
import classes from "./PostsList.module.css";
// import NewPost from "../routes/NewPost";
import { useState, useEffect } from "react";
// import Modal from "./Modal";

// function PostsList({ isPosting, onStopPosting }) {
function PostsList() {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch("http://localhost:8080/posts");
      const data = await response.json();
      setPosts(data.posts);
      setIsFetching(false);
    }

    fetchPosts();

    // fetch("http://localhost:8080/posts").then((response) =>
    //   response.json().then((data) => {
    //     setPosts(data.posts);
    //   })
    // );
  }, []);

  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  //   const [modalIsVisible, setModalIsVisible] = useState(true);
  // const [enteredBody, setEnteredBody] = useState("");
  // const [enteredAuthor, setEnteredAuthor] = useState("");

  // //   function hideModalHandler() {
  // //     setModalIsVisible(false);
  // //   }

  // function bodyChangeHandler(event) {
  //   setEnteredBody(event.target.value);
  // }

  // function authorChangeHandler(event) {
  //   setEnteredAuthor(event.target.value);
  // }

  //   let modalContent;

  //   if (modalIsVisible) {
  //     modalContent = (
  //   <Modal onClose={hideModalHandler}>
  //     <NewPost
  //       onBodyChange={bodyChangeHandler}
  //       onAuthorChange={authorChangeHandler}
  //     />
  //   </Modal>;
  //     );
  //   }

  return (
    <>
      {/* {modalIsVisible ? (
        <Modal onClose={hideModalHandler}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
          />
        </Modal>
      ) : null} */}

      {/* {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            // onBodyChange={bodyChangeHandler}
            // onAuthorChange={authorChangeHandler}
            onCancel={onStopPosting}
            onAddPost={addPostHandler}
          />
        </Modal>
      )} */}
      {/* {modalContent} */}
      {!isFetching && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}

          {/* <Post author="Manuel" body="Check out the full course!" /> */}
        </ul>
      )}

      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}

      {isFetching && (
        <div style={{ textAlign: "center", color: "white" }}>
          <p>Loading posts...</p>
        </div>
      )}
    </>
  );
}

export default PostsList;

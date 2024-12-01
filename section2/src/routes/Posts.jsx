import PostsList from "../components/PostsList";
// import MainHeader from "../components/MainHeader";
// import { useState } from "react";
import { Outlet } from "react-router-dom";

function Posts() {
  // const [modalIsVisible, setModalIsVisible] = useState(false);

  // function hideModalHandler() {
  //   setModalIsVisible(false);
  // }

  // function showModalHandler() {
  //   setModalIsVisible(true);
  // }

  return (
    <>
      {/* <MainHeader onCreatePost={showModalHandler} /> */}
      <Outlet />
      <main>
        {/* <PostsList
          isPosting={modalIsVisible}
          onStopPosting={hideModalHandler}
        /> */}
        <PostsList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const data = await response.json();

  return data.posts;
}

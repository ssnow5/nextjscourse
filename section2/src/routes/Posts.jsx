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

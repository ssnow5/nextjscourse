import classes from "./NewPost.module.css";
// import { useState } from "react";
import Modal from "../components/Modal";
import { Link, Form, redirect } from "react-router-dom";

// function NewPost({ onBodyChange, onAuthorChange, onCancel }) {
// function NewPost({ onCancel, onAddPost }) {
// function NewPost({ onAddPost }) {
function NewPost() {
  //const [enteredBody, setEnteredBody] = useState('');

  //   function changeBodyHandler(event) {
  //     setEnteredBody(event.target.value);
  //     // console.log(event.target.value);
  //   }

  // const [enteredBody, setEnteredBody] = useState("");
  // const [enteredAuthor, setEnteredAuthor] = useState("");

  // function bodyChangeHandler(event) {
  //   setEnteredBody(event.target.value);
  // }

  // function authorChangeHandler(event) {
  //   setEnteredAuthor(event.target.value);
  // }

  // function submitHandler(event) {
  //   event.preventDefault();
  //   const postData = {
  //     body: enteredBody,
  //     author: enteredAuthor,
  //   };

  //   //console.log(postData);
  //   // onAddPost(postData);

  //   // onCancel();
  // }

  return (
    <Modal>
      {/* <form className={classes.form} onSubmit={submitHandler}> */}
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          {/* <textarea id="body" required rows={3} onChange={bodyChangeHandler} /> */}
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          {/* <input
            type="text"
            id="name"
            required
            onChange={authorChangeHandler}
          /> */}
          <input type="text" id="name" name="author" required />
        </p>
        <p className={classes.actions}>
          {/* <button type="button" onClick={onCancel}>
            Cancel
          </button> */}

          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);

  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return redirect("/");
}

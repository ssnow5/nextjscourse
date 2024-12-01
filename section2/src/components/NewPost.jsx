import classes from "./NewPost.module.css";
//import { useState } from 'react';

function NewPost({ onBodyChange, onAuthorChange, onCancel }) {
  //const [enteredBody, setEnteredBody] = useState('');

  //   function changeBodyHandler(event) {
  //     setEnteredBody(event.target.value);
  //     // console.log(event.target.value);
  //   }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={onBodyChange} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={onAuthorChange} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;

// const names = ['Maximilian', 'Manuel'];

import { Link } from "react-router-dom";
import classes from "./Post.module.css";

function Post({ id, author, body }) {
  //   const choosenName = Math.random() > 0.5 ? names[0] : names[1];

  return (
    // <div style={{ color: 'red', textAlign: 'left' }}>
    <li className={classes.post}>
      <Link to={id}>
        <p className={classes.author}>{author}</p>
        <p className={classes.text}>{body}</p>
      </Link>
    </li>
  );
}

export default Post;

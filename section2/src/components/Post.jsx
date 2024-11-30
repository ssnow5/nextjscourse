// const names = ['Maximilian', 'Manuel'];

import classes from './Post.module.css';

function Post({ author, body }) {
  //   const choosenName = Math.random() > 0.5 ? names[0] : names[1];

  return (
    // <div style={{ color: 'red', textAlign: 'left' }}>
    <li className={classes.post}>
      <p className={classes.author}>{author}</p>
      <p className={classes.text}>{body}</p>
    </li>
  );
}

export default Post;

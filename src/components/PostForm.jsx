import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const PostForm = ({createPost}) => {
  const [post, setPost] = useState({title: '', body: ''});

  const addPost = e => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    createPost(newPost);
    setPost({title: '', body: ''});
  };

  return (
    <form className="form">
      <TextField
        value={post.title}
        onChange={e => setPost({...post, title: e.target.value})}
        margin="dense"
        fullWidth
        id="outlined-basic"
        label="Название поста"
        variant="outlined"
      />
      <TextField
        value={post.body}
        onChange={e => setPost({...post, body: e.target.value})}
        margin="dense"
        fullWidth
        id="outlined-basic"
        label="Текст поста"
        variant="outlined"
      />
      <Button
        onClick={e => addPost(e)}
        style={{margin: '10px 0 30px 0'}}
        variant="contained"
        endIcon={<SendIcon />}>
        Добавить пост
      </Button>
    </form>
  );
};

export default PostForm;

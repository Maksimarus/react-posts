import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ButtonGroup from '@mui/material/ButtonGroup';
import {useNavigate} from 'react-router-dom';

const PostItem = ({post, number, removePost}) => {
  const navigate = useNavigate();

  const remove = () => {
    removePost(post);
  };
  return (
    <article className="post">
      <div className="post__content">
        <h2 className="post__title">
          {number}. {post.title}
        </h2>
        <p className="post__text">{post.body}</p>
      </div>
      <ButtonGroup variant="contained">
        <Button onClick={() => navigate(`/posts/${post.id}`)} variant="outlined">
          Открыть
        </Button>
        <Button
          onClick={remove}
          variant="outlined"
          startIcon={<DeleteIcon />}
          color="error">
          Удалить
        </Button>
      </ButtonGroup>
    </article>
  );
};

export default PostItem;

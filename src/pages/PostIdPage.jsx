import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import {useFetching} from '../hooks/useFetching';

const PostIdPage = () => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const params = useParams();

  const [fetchPostById, isPostLoading, postError] = useFetching(async () => {
    const post = await PostService.getPostById(params.id);
    setPost(post.data);
  });
  const [fetchPostCommentById, isCommentsLoading, commentsError] = useFetching(
    async () => {
      const comments = await PostService.getPostCommentById(params.id);
      setComments(comments.data);
    },
  );
  useEffect(() => {
    fetchPostById();
    fetchPostCommentById();
  }, []);

  return (
    <>
      {postError && <h2>Произошла ошибка {postError}</h2>}
      {isPostLoading ? (
        <Loader />
      ) : (
        <>
          <h1>Страница поста {params.id}</h1>
          <article className="post">
            <div className="post__content">
              <h2 className="post__title">
                {post.id}.{post.title}
              </h2>
              <p className="post__text">{post.body}</p>
            </div>
          </article>

          {commentsError && <h2>Произошла ошибка {commentsError}</h2>}
          {isCommentsLoading ? (
            <Loader />
          ) : (
            <>
              <h1>Комментарии</h1>
              {comments.map(com => (
                <div
                  style={{border: '1px solid #1876d1', marginTop: '15px'}}
                  key={com.id}>
                  <h5>{com.name}</h5>
                  <h5>{com.email}</h5>
                  <div>{com.body}</div>
                </div>
              ))}
            </>
          )}
        </>
      )}
    </>
  );
};

export default PostIdPage;

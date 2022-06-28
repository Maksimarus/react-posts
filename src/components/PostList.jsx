import React from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import PostItem from './PostItem';

const PostList = ({posts, title, removePost}) => {
  if (posts.length) {
    return (
      <div style={{marginBottom: '30px', overflow: 'hidden'}}>
        <h1 style={{textAlign: 'center'}}>{title}</h1>
        <TransitionGroup>
          {posts.map((post, index) => (
            <CSSTransition key={post.id} timeout={500} classNames="post">
              <PostItem removePost={removePost} number={post.id} post={post} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    );
  }
  return <div className="no-posts">Посты отсутствуют</div>;
};

export default PostList;

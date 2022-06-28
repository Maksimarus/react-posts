import React, {useEffect, useRef, useState} from 'react';

import PostFilter from '../components/PostFilter';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import MyModal from '../components/UI/MyModal/MyModal';
import MySelect from '../components/MySelect';

import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';

import '../styles/App.css';
import {usePosts} from '../hooks/usePosts';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import {useFetching} from '../hooks/useFetching';
import {getPagesCount} from '../utils/pages';
import {useObserver} from '../hooks/useObserver';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef();

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAllPosts(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPagesCount(totalCount, limit));
  });
  useObserver(lastElement, page <= totalPages, isPostsLoading, () => setPage(page + 1));

  useEffect(() => {
    fetchPosts();
  }, [page, limit]);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const createPost = newPost => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  return (
    <div className="wrapper">
      <div className="app">
        <Button onClick={() => setModal(true)} variant="contained">
          Добавить новый пост
        </Button>
        <PostFilter filter={filter} setFilter={setFilter} />
        <MySelect
          value={limit}
          defaultValue="Количество постов на странице"
          onChange={value => setLimit(value)}
          values={[
            {value: 5, name: '5'},
            {value: 10, name: '10'},
            {value: 25, name: '25'},
            {value: -1, name: 'Все'},
          ]}
        />
        {postError && <h2>Произошла ошибка {postError}</h2>}
        {isPostsLoading && <Loader />}
        <PostList
          removePost={removePost}
          posts={sortedAndSearchedPosts}
          title="Список постов 1"
        />
        <div ref={lastElement} style={{height: '20px', background: 'red'}}></div>
        <MyModal visible={modal} setVisible={setModal}>
          <PostForm createPost={createPost} />
        </MyModal>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Pagination onChange={handleChangePage} count={totalPages} />
        </div>
      </div>
    </div>
  );
};

export default Posts;

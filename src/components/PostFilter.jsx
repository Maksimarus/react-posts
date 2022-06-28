import React from 'react';
import {TextField} from '@mui/material';
import MySelect from './MySelect';

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
      <TextField
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})}
        margin="dense"
        fullWidth
        label="Поиск..."
        variant="outlined"
      />
      <MySelect
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        value={filter.sort}
        defaultValue="Сортировка"
        values={[
          {value: 'title', name: 'По заголовку'},
          {value: 'body', name: 'По описанию'},
        ]}
      />
    </div>
  );
};

export default PostFilter;

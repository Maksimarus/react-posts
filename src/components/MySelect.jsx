import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const MySelect = ({values, defaultValue, value, onChange}) => {
  return !values ? (
    <FormControl disabled fullWidth>
      <InputLabel>{defaultValue}</InputLabel>
      <Select></Select>
    </FormControl>
  ) : (
    <FormControl fullWidth>
      <InputLabel>{defaultValue}</InputLabel>
      <Select value={value} label={defaultValue} onChange={e => onChange(e.target.value)}>
        {values.map(item => (
          <MenuItem key={item.value} value={item.value}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MySelect;

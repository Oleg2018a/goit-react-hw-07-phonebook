import React from 'react'
import { Input, Label } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filtersSlice';
const Filter = () => {
  
  const dithpath = useDispatch()
  
  return (
    <>
      <Label>
        Find contacts by name
        <Input
          onChange={e => dithpath(setFilter(e.target.value))}
          type="text"
        />
      </Label>
    </>
  );
}

export default Filter
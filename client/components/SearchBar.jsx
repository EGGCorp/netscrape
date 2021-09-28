import React from 'react';
import { TextField } from '@material-ui/core';

const SearchBar = () => {
  
  return (
    <div>
      <div>
        I will be a search bar
      </div>
      <TextField fullWidth id="outlined-basic" label="Search movies and TV shows on Netflix" variant="outlined"/>  
    </div>
  )
  
}

export default SearchBar;
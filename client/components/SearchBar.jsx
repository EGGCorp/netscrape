import React from 'react';
import { TextField } from '@material-ui/core';




const SearchBar = (props) => {
  
  

  return (
    <div>
      <TextField fullWidth id="search-bar" label="Search movies and TV shows on Netflix" variant="outlined" onKeyPress={props.onKeyUp}/>  
    </div>
  )
  
}

export default SearchBar;
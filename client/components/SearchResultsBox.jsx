import React from 'react';
import Box from '@mui/material/Box';

const SearchResultsBox = () => {
  
  
  return (
    <Box
      
      sx={{
        width: 'full',
        height: 300,
        bgcolor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
  )
}

export default SearchResultsBox;
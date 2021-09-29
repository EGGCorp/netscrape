import React, { Component } from 'react';
import SearchBar from '../components/SearchBar.jsx';
import SearchResultsBox from '../components/SearchResultsBox.jsx';
import getMovies from '../../api/movieFetch.js';
import Box from '@mui/material/Box';


class App extends Component {
  constructor() {
    super();
    this.state = {
      searchedTitle: 'string',
      searchResults: [],
    }
    
    this.onKeyUp = this.onKeyUp.bind(this)
  }
  
  
  async onKeyUp(e) {
    if (e.charCode === 13){
      console.log(e.target.value)
      const value = e.target.value;
      const movieList = await getMovies(value);
      console.log('movie list', movieList);
      this.setState({ searchedTitle: e.target.value }, () => {
        console.log('this is the setState', this.state.searchedTitle)
        this.setState({searchResults: movieList})
        console.log(movieList, 'movieList after API call');
      })
      
    }
  } 
  
    
  
  
  render() {
    
    if (this.state.searchResults.length) {
      return (
        <div>
          <SearchBar onKeyUp={this.onKeyUp}/>
          <SearchResultsBox list={this.state.searchResults}/>
        </div>
        
      )
    } else {
      return (
        <div>
          <SearchBar onKeyUp={this.onKeyUp}/>
        </div>
      )
    }
    
  }
}

export default App;
import React, { Component } from 'react';
import SearchBar from '../components/SearchBar.jsx';
import SearchResultsBox from '../components/SearchResultsBox.jsx';
import getMovies from '../../api/movieFetch.js';
import dbController from '../../server/dbController.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchedTitle: 'string',
      searchResults: {},
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
      
      })
      dbController.getMoviesTest()
      
    }
  } 

  render() {

    return (
      <div>
        <SearchBar onKeyUp={this.onKeyUp}/>
        <SearchResultsBox value={this.searchResults}/>
      </div>
      
    )
  }
}

export default App;
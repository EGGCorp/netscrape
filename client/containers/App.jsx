import React, { Component } from 'react';
import SearchBar from '../components/SearchBar.jsx';
import SearchResultsBox from '../components/SearchResultsBox.jsx';
import getMovies from '../../api/movieFetch.js';
import MovieCard from '../components/MovieCard.jsx';
//import dbController from '../../server/dbController.js';

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
      //const movies = [];
      console.log('movie list', movieList);
      this.setState({ searchedTitle: e.target.value }, () => {
        console.log('this is the setState', this.state.searchedTitle)
      
      })
      //console.log(dbController)
      //dbController.getMoviesTest()
    }
  } 


  render() {
    console.log('state in render',this.state)
    return (
      <div id='app'>
        <h1>Netscrape</h1>
        <div className='container'>
          <div className='mainContent'>
            <SearchBar id='searchBar' onKeyUp={this.onKeyUp}/>
            <SearchResultsBox id='searchResultsBox'value={this.searchResults}/>
          </div>
        <div className='rightSideBar'>
          <h2>Top Rated Movies</h2>

        </div>
        <div className='footer'>
        </div>
        </div>
      </div>
    )
  }
}

export default App;
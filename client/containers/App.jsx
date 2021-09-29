import React, { Component } from 'react';
import SearchBar from '../components/SearchBar.jsx';
import SearchResultsBox from '../components/SearchResultsBox.jsx';
import getMovies from '../../api/movieFetch.js';
import Box from '@mui/material/Box';
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
  
  async getDBMovies() {
    await fetch('/routes/test', {
      method: 'GET'
    })
      .then((res) => res.json())
      .then((movies) => console.log('In App.jsx, in getBDMOvies, Results: ', movies))
      .catch(err => console.log('In App.jsx, in getBDMOvies, Error: ', err))
  }
  
  async onKeyUp(e) {
    if (e.charCode === 13){
      console.log(e.target.value)
      const value = e.target.value;
      const movieList = await getMovies(value);
      //const movies = [];
      // console.log('movie list', movieList);
      this.setState({ searchedTitle: e.target.value }, () => {
        // console.log('this is the setState', this.state.searchedTitle)
        this.setState({searchResults: movieList})
        // console.log(movieList, 'movieList after API call');
      })
      //console.log(dbController)
      this.getDBMovies()
    }
  } 


  render() {
    // console.log('state in render',this.state)
    return (
      <div id='app'>
        <h1>Netscrape</h1>
        <div id='searchBarDiv'>
          <SearchBar onKeyUp={this.onKeyUp}/>
        </div>
        <div className='container'>
          <div className='mainContent'>
            <SearchResultsBox id='searchResultsBox' list={this.state.searchResults}/>
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
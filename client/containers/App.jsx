import React, { Component } from 'react';
import SearchBar from '../components/SearchBar.jsx';
import SearchResultsBox from '../components/SearchResultsBox.jsx';
import getMovies from '../../api/movieFetch.js';
import Box from '@mui/material/Box';
import MovieCard from '../components/MovieCard.jsx';
import SideBarCard from '../components/SideBarCard';
import SideBar from '../components/SideBar';
import VpnLockIcon from '@mui/icons-material/VpnLock';
//import dbController from '../../server/dbController.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchedTitle: 'string',
      searchResults: [],
      sideBarResults: []
    }
    
    this.onKeyUp = this.onKeyUp.bind(this)
  }
  
  async componentDidMount() {
    const sideBarMovies = await getMovies('', '10');
    this.setState({sideBarResults: sideBarMovies})
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
      //this.getDBMovies()
    }
  } 
  

  render() {
    // console.log('state in render',this.state)
 
    return (
      <div id='app'>
        <img className='logo' src='https://cdn.discordapp.com/attachments/892897963272192030/892898649154146314/Netscape_Logo.png'></img>
        {/* <h1>Netscrape</h1> */}
        <div className='container'>
        <div className='headerBox'>
        <div className='appDesc'>
        <h3>Discover where you can watch your favorite movies and shows</h3>
        </div>
        <div id='searchBarDiv'>
          <SearchBar onKeyUp={this.onKeyUp}/>
        </div>
        </div>
          <div className="leftSideBar">
            <img src="https://images.squarespace-cdn.com/content/v1/5e51adbe32d3183c11f17408/1585953703129-2EWYVKDJ7C5CBXXN99N1/Sidebar.jpg?format=300w"></img>
          </div>
          <div className='mainContent'>
            <SearchResultsBox id='searchResultsBox' list={this.state.searchResults}/>
          </div>
        <div className='rightSideBar'>
          <h2>Top Rated Movies/Shows</h2>
          <div className='rightSideBarContent'>
            <SideBar list={this.state.sideBarResults}/>
          </div>
        </div>
        <div className='footer'>
          <VpnLockIcon/>
          Sign up for a
          <a href="https://nordvpn.com/">VPN!</a>
        </div>
        </div>
      </div>
    )
  }
}

export default App;
import React, { Component } from 'react';
import SearchBar from '../components/SearchBar.jsx';
import SearchResultsBox from '../components/SearchResultsBox.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchedTitle: '',
    }
  }
  render() {

    return (
      <div>
        <SearchBar />
        <SearchResultsBox />
      </div>
      
    )
  }
}

export default App;
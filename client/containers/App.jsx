import React, { Component } from 'react';
import SearchBar from '../components/SearchBar.jsx';
import SearchResultsBox from '../components/SearchResultsBox.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchedTitle: 'string',
      searchResults: {},
    }
    
    this.onKeyUp = this.onKeyUp.bind(this)
  }
  
  
  onKeyUp(e) {
    if (e.charCode === 13){
      console.log(e.target.value)
      this.setState({ searchedTitle: e.target.value }, () => {
        console.log('this is the setState', this.state.searchedTitle)
      
      })
      
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
import React from 'react';

import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // Passes the state of the term(in app js SearchBar Element) to this.props.search

  search() {
    this.props.onSearch(this.state.term);
  }

  handleTermChange(event) {
    this.setState({ term: event.target.value });
  }

  handleKeyPress(event) {
    if (event.key === "Enter") {
      this.search();
    }
  }

    render() {
       return (
                <div className="SearchBar">
                 <input 
                   placeholder="Enter A Song, Album, or Artist" 
                   onChange={this.handleTermChange} 
                   />
                 <button 
                 className="SearchButton">
                   SEARCH
                  </button>
                </div>
              );
    }
}

export default SearchBar;
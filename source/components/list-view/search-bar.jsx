import React, { Component } from 'react' // {}pull off the property Component as a variable
import { Input } from 'semantic-ui-react'

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {
    };
    this.keyword = ""
  }

  render() {
    return <Input icon='search' placeholder='Search...' value = {this.keyword} onChange = {event => {
      this.keyword = event.target.value;
      console.log(this.keyword);
      this.props.conFunc(this.keyword);
    }}/>;
  }
}

SearchBar.propTypes = {
  conFunc:React.PropTypes.func
}

export default SearchBar;

import React, { Component } from 'react'

import SearchBar from './search-bar.jsx'
import ListSelectionSort from './list-selection-sort.jsx'
import ListSelectionOrder from './list-selection-order.jsx'

class ListSelectionAll extends Component {
  constructor(props){
    super();
    this.state = {
    };
  }

  render(){
    return(
      <div>
        <SearchBar conFunc = {(keyword) => this.props.conFunc(keyword)}/>
        <ListSelectionSort sortPropertyChange ={(event,data) => this.props.sortPropertyChange(event, data)}/>
        <ListSelectionOrder orderChange ={(event,data) => this.props.orderChange(event, data)}/>
      </div>
    )
  }

}

ListSelectionAll.propTypes = {
  conFunc:React.PropTypes.func,
  sortPropertyChange:React.PropTypes.func,
  orderChange:React.PropTypes.func,
}

export default ListSelectionAll

import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

const sortOptions = [
  {
    text: 'Popularity',
    value: 'Popularity'
  },
  {
    text: 'Vote',
    value: 'Vote'
  }
]

const ListSelectionSort = (props) => (
  <Dropdown placeholder='Select Sorting Property' selection options={sortOptions}
  onChange = {(event, data)=> {
    props.sortPropertyChange(event, data)
  }}/>
)

ListSelectionSort.propTypes = {
  sortPropertyChange:React.PropTypes.func,
}

export default ListSelectionSort

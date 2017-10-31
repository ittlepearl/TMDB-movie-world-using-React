import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

const orderOptions = [
  { text: 'ascending',value: 'ascending' },
  { text: 'descending', value: 'descending' }
]

const handleChange = (e, { name, value }) => this.setState({ [name]: value })

const ListSelectionOrder = (props) => (
  <Dropdown placeholder='Select Order' selection options={orderOptions}
  onChange = {(event, data)=> {
    props.orderChange(event, data)
  }}/>
)

ListSelectionOrder.propTypes = {
  orderChange:React.PropTypes.func,
}

export default ListSelectionOrder

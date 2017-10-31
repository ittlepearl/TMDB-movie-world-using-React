import React, { Component } from 'react'
import ListItem from './list-item.jsx'
import { Icon,Item,List } from 'semantic-ui-react'
import PropTypes from 'prop-types';

const ListContainer = (props) => {
  if(props.searchData == null){
    return;
  }
  let mapped = props.searchData.map((elem) => {
      return {"path":elem.poster_path,"idx":props.searchData.indexOf(elem),"name":elem.title,
    "overview":elem.overview,"release_date":elem.release_date,"vote":elem.vote_average, "popularity":elem.popularity}
    })

  const items = mapped.map((item) =>{
    return <ListItem key={item.idx} allMovies = {mapped} current = {item} />
  });

  return(
    <List divided>
      {items}
    </List>
  )
}

ListContainer.propTypes = {
  searchData:PropTypes.array
}
export default ListContainer

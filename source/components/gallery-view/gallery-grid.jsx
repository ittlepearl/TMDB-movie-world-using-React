import React , { Component } from 'react'
import { Grid, Image, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import GalleryItem from './gallery-item.jsx'
import PropTypes from 'prop-types';

const img_base_url = "http://image.tmdb.org/t/p/w185/";


class GalleryGrid extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
    this.moviesAfterMapped=[];
    this.allItem = [];
    this.rerender = this.rerender.bind(this);
    this.setAllItem = this.setAllItem.bind(this);
  }

  setAllItem(){
    this.allItem = this.moviesAfterMapped.map((elem) => {
      return(
        <GalleryItem elem = {elem} moviesAfterMapped = {this.moviesAfterMapped}/>
      )
    })
    console.log(this.allItem);
  }

  rerender(){
    this.setState();
  }

  render() {
    this.moviesAfterMapped = this.props.moviesAfterMapped;
    if(this.moviesAfterMapped.length === 0){
      return(
        <div> Choose a category!</div>
      )
    }
    console.log(img_base_url + this.moviesAfterMapped[1].path);
    this.setAllItem();
    console.log(this.allItem);
    return (
      <Grid columns={5}>
        {this.allItem}
      </Grid>
    )
  }
}
GalleryGrid.propTypes = { moviesAfterMapped: PropTypes.number };

export default GalleryGrid

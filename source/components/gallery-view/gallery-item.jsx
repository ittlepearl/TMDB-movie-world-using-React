import React , { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';


const img_base_url = "http://image.tmdb.org/t/p/w185/";

class GalleryItem extends Component{
  constructor(props){
    super(props);
    this.state = {
    };
  }
  render(){
    return(
      <Grid.Column>
        <Link to={
          {pathname : `/detail/${this.props.elem.idx}`,
          state:{
            allMovies: this.props.moviesAfterMapped,
            current : this.props.moviesAfterMapped[this.props.elem.idx]
          }
          }
        }>
          <Image src={img_base_url + this.props.moviesAfterMapped[this.props.elem.idx].path} size='medium'/>
        </Link>
      </Grid.Column>
    )
  }
}

GalleryItem.propTypes = {
  moviesAfterMapped: React.PropTypes.number,
  elem:React.PropTypes.object
};

export default GalleryItem

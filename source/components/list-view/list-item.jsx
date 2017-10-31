import React, { Component } from 'react'
import { Icon,Item,Grid,Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class ListItem extends Component {

  constructor(props) {
      super();
      this.state = {
        item : props.item
      };
  }

  render(){
    const img_base_url = "http://image.tmdb.org/t/p/w185/";
    const img_url = img_base_url+this.props.current.path;
    console.log(this.props.allMovies);
    return(
      <Link style={{color: "#333333"}} to={
        {pathname : `/detail/${this.props.current.idx}`,
        state:{
          allMovies: this.props.allMovies,
          current : this.props.current
        }
        }
      }>
        <Grid columns={2} divided verticalAlign="middle">
          <Grid.Column floated='right' width = {4}>
              <Image floated = "right" size='small' src={img_url} />
          </Grid.Column>
          <Grid.Column floated='left' width= {6}>
            <h2 color='black'>{this.props.current.name}</h2>
            <div>
            <Icon color='teal' name='star' /><span className='vote'>Vote:{this.props.current.vote}</span>
            </div>
            <div>
            <Icon color='teal' name='users' /><span className='popularity'>Popularity:{this.props.current.popularity}</span>
            </div>
          </Grid.Column>
        </Grid>
      </Link>
    )
  }
}

ListItem.propTypes = {
  current:React.PropTypes.object,
  allMovies:React.PropTypes.array
}

export default ListItem

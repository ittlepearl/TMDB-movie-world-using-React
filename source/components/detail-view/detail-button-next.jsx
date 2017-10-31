import React, { Component } from 'react'
import { Button,Icon,Item } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

class DetailButtonNext extends Component {
  constructor(props){
    super(props);
    this.state ={};
  }

  render(){
    console.log(this.props.idx);
    var nextIdx = (this.props.idx+1);
    if(nextIdx >= this.props.allMovies.length) {
      console.log(this.props.allMovies.length);
      console.log("bigger than length");
      nextIdx=nextIdx-this.props.allMovies.length;
    }
    console.log(nextIdx);
    return (
      <div>
        <Link to={
          {pathname : `/detail/${this.props.idx}`,
          state:{
            allMovies: this.props.allMovies,
            current : this.props.allMovies[nextIdx]
          }
          }
        }>
          <Button basic color='teal' content='Next' icon='right arrow' labelPosition='right'/>
        </Link>
      </div>
    )
  }
}

DetailButtonNext.propTypes = {
  idx: PropTypes.number,
  allMovies:PropTypes.array
 };
export default DetailButtonNext

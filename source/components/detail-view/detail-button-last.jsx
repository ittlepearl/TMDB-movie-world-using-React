import React, { Component } from 'react'
import { Button,Icon,Item } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

class DetailButtonLast extends Component {
  constructor(props){
    super(props);
    this.state ={};
  }

  render(){
    console.log(this.props.idx);
    var lastIdx = (this.props.idx-1);
    if(lastIdx < 0) {
      console.log("smaller than 0");
      console.log(this.props.allMovies.length);
      lastIdx=lastIdx+this.props.allMovies.length;
    }
    return (
      <div>
        <Link to={
          {pathname : `/detail/${this.props.idx}`,
          state:{
            allMovies: this.props.allMovies,
            current : this.props.allMovies[lastIdx]
          }
          }
        }>
          <Button basic color='teal' content='Last' icon='left arrow' labelPosition='left'/>
        </Link>
      </div>
    )
  }
}

DetailButtonLast.propTypes = {
  idx: PropTypes.number,
  allMovies:PropTypes.array
 };
export default DetailButtonLast

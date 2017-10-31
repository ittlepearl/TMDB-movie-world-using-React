import React, { Component } from 'react'
import { Header, Icon, Button  } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styles from './header.scss'
import {withRouter} from 'react-router-dom'; // use this to make to class able to change route

class HeaderNav extends Component {
  constructor(props){
    super()
  }

  nextPath(path) {
   this.props.history.push(path);
 }

  render() {
    return (
      <div>
        <Header as ='h1' size='huge' textAlign='center' dividing icon>
          <Icon name='film' color='teal'/>
          TMDB Movies Exhibition
          <Header.Subheader>
            welcome to the world of movie
          </Header.Subheader>
        </Header>
        <Button.Group fluid color='teal'>
          <Button onClick={()=>this.nextPath("/search")}>Search </Button>
          <Button.Or />
          <Button onClick={()=>this.nextPath("/gallery")}>Explore </Button>
        </Button.Group>
      </div>
    )
  }
}

export default withRouter(HeaderNav)

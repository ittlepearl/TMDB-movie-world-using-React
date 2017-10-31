import React, { Component } from 'react'
import { Icon, Image, Item, Grid,Card} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import DetailButtonLast from './detail-button-last.jsx'
import DetailButtonNext from './detail-button-next.jsx'
const img_base_url = "http://image.tmdb.org/t/p/w185/";

class DetailView extends Component{
  constructor(){
    super()
    this.state = {
    };
  }

  render() {
    console.log(img_base_url + this.props.location.state.current.path);
  return (
    <div>
    <h3/>
    <Grid columns={3} textAlign='center' verticalAlign="middle">
      <Grid.Column width={2}>
        <DetailButtonLast idx = {this.props.location.state.current.idx} allMovies = {this.props.location.state.allMovies}/>
      </Grid.Column>
      <Grid.Column width={9}>
          <Card centered fluid color='teal'>
            <Image size='medium' centered src={img_base_url + this.props.location.state.current.path} />
            <Card.Content>
              <Card.Header>{this.props.location.state.current.name}</Card.Header>
              <Card.Meta>
                <Icon color='teal' name='star' />
                  Vote : {this.props.location.state.current.vote}{" .  "}
                <Icon color='teal' name='users' />
                  Popularity : {this.props.location.state.current.popularity}
              </Card.Meta>
              <Card.Description>{this.props.location.state.current.overview}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              Released on: {this.props.location.state.current.release_date}
            </Card.Content>
          </Card>
      </Grid.Column>
      <Grid.Column width={2}>
        <DetailButtonNext idx = {this.props.location.state.current.idx} allMovies = {this.props.location.state.allMovies}/>
      </Grid.Column>
    </Grid>
    </div>
  )
  }
}

export default DetailView

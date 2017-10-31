import React, { Component }  from 'react'
import { Menu } from 'semantic-ui-react'
import PropTypes from 'prop-types';

class GalleryMenu extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu color='teal' widths={9} >

        <Menu.Item
          name='Action'
          active={activeItem === 'Action'}
          onClick={(e, { name }) => {
            this.setState({ activeItem: name });
            this.props.setGenreChange(name)
        }}
        >
          Action
        </Menu.Item>

        <Menu.Item
          name='Animation'
          active={activeItem === 'Animation'}
          onClick={(e, { name }) => {
            this.setState({ activeItem: name });
            this.props.setGenreChange(name)
        }}
        >
          Animation
        </Menu.Item>

        <Menu.Item
          name='Comedy'
          active={activeItem === 'Comedy'}
          onClick={(e, { name }) => {
            this.setState({ activeItem: name });
            this.props.setGenreChange(name)
        }}
        >
          Comedy
        </Menu.Item>

        <Menu.Item
          name='Documentary'
          active={activeItem === 'Documentary'}
          onClick={(e, { name }) => {
            this.setState({ activeItem: name });
            this.props.setGenreChange(name)
        }}
        >
          Documentary
        </Menu.Item>

        <Menu.Item
          name='Drama'
          active={activeItem === 'Drama'}
          onClick={(e, { name }) =>{
            this.setState({ activeItem: name });
            this.props.setGenreChange(name)
        }}
        >
          Drama
        </Menu.Item>

        <Menu.Item
          name='Fantasy'
          active={activeItem === 'Fantasy'}
          onClick={(e, { name }) => {
            this.setState({ activeItem: name });
            this.props.setGenreChange(name)
        }}
        >
          Fantasy
        </Menu.Item>

        <Menu.Item
          name='Music'
          active={activeItem === 'Music'}
          onClick={(e, { name }) => {
            this.setState({ activeItem: name });
            this.props.setGenreChange(name)
        }}
        >
          Music
        </Menu.Item>

        <Menu.Item
          name='Romance'
          active={activeItem === 'Romance'}
          onClick={(e, { name }) => {
            this.setState({ activeItem: name });
            this.props.setGenreChange(name)
        }}
        >
          Romance
        </Menu.Item>

        <Menu.Item
          name='Science Fiction'
          active={activeItem === 'Science Fiction'}
          onClick={(e, { name }) => {
            this.setState({ activeItem: name });
            this.props.setGenreChange(name)
        }}
        >
          Science Fiction
        </Menu.Item>
      </Menu>
    )
  }
}

GalleryMenu.propTypes = {
  setGenreChange: React.PropTypes.func
};

export default GalleryMenu

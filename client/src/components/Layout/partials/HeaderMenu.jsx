import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router'

export default class HeaderMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: 'Home'
    }

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }) {
    this.setState({
      activeItem: name
    })
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu pointing>
        <Menu.Item name='Home' as={Link} to="/home" active={activeItem === 'Home'} onClick={this.handleItemClick} />
        <Menu.Item name='Todos' active={activeItem === 'Todos'} onClick={this.handleItemClick} />
      </Menu>
    )
  }
}

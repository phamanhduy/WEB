import React, { Component } from 'react';
import {
  Container,
  Menu,
  Grid,
  Search,
  Icon
} from 'semantic-ui-react';

import 'semantic-ui-css/semantic.css';
import './style.css';

export default class Header extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { activeItem: 'bell outline' };
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state;
    return (
      <div id='header-top'>
      <Menu fixed='top'>
        <Container>
        <Grid className='search-home-top-left'>
            <Grid.Column width={8}>
              <Search placeholder='Bạn muốn học gì?' />
            </Grid.Column>
          </Grid>
          <Grid className='search-home-top-right'>
            <Menu>
              <Menu.Item name='bell outline' active={activeItem === 'bell outline'} onClick={this.handleItemClick}>
                <Icon name='bell outline' />
              </Menu.Item>

              <Menu.Item
                name='comment outline'
                active={activeItem === 'comment outline'}
                onClick={this.handleItemClick}
              >
                <Icon name='comment outline' />
              </Menu.Item>

              <Menu.Item
                name='question circle outline'
                active={activeItem === 'question circle outline'}
                onClick={this.handleItemClick}
              >
                <Icon name='question circle outline' />
              </Menu.Item>
            </Menu>
          </Grid>
        </Container>
      </Menu>
    </div>
    );
  }
}

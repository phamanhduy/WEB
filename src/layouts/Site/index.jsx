import React, { Component } from 'react';
import 'semantic-ui-css/semantic.css';
import Header from '../../views/Site/Parts/Header.jsx';

export default class Site extends Component {
  render() {
    return (
      <div>
          <Header />
          {this.props.children}
      </div>
    );
  }
}

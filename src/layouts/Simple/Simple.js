import { Component } from 'react';
import 'semantic-ui-css/semantic.css';

export default class Simple extends Component {
  render() {
    return (this.props.children);
  }
}

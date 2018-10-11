/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { Tooltip } from 'reactstrap';

export default class MenuItemWithTooltip extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    return (
      <div>
        <div
          id={this.props.target}>{this.props.children}
        </div>
        <Tooltip
          placement="bottom"
          isOpen={this.state.tooltipOpen}
          target={this.props.target}
          toggle={this.toggle}
          delay={0}
        >
          {this.props.tip}
        </Tooltip>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';

class HomePage extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-md-12">
            <span>Homepage</span>
          </div>
        </div>
        <div className="clearfix"></div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  rehydrated: state.app.rehydrated,
  user: get(state, ['auth', 'user'], {})
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

import React, { Component } from 'react';
import { Link } from 'react-router';

export default class ErrorPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="clearfix">
              <h1 className="display-3 mr-5">Đã có lỗi xảy ra !</h1>
              <h4 className="pt-3">
                <Link to={'/'} className="btn btn-outline-primary"> Thử lại <i
                  className="fa fa-arrow-circle-o-right"/> </Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

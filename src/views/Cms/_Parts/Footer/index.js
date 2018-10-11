import React from 'react';
import packagejson from '../../../../../package.json';

const Footer = () => (
  <footer className="app-footer">
    <small><strong>{packagejson.name} &nbsp;</strong></small>
    <span className="badge badge-pill badge-primary">v{packagejson.version}</span>
    &nbsp;
    <small>
      Powered by &nbsp;
      <a href={`mailto:${packagejson.email}`}>{packagejson.author}</a>
      &copy; 2017 All right services.
    </small>
    <small className="float-right">
      {/* <i className='fa fa-spinner fa-spin text-primary'></i> */}
    </small>
  </footer>
);
export default Footer;

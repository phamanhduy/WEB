import React from 'react';
// import { IndexLink } from 'react-router';

const Sidebar = () => (
  <div className="sidebar ">
    <nav className="sidebar-nav">
      <ul className="nav">
        <li className="nav-item">
          <a href="/" className="nav-link">
            <i className="fa fa-home"/>
            <span>Trang chủ</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

export default Sidebar;

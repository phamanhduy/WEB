import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dropdown, DropdownMenu, DropdownItem } from 'reactstrap';
import { get } from 'lodash';
import Avatar from 'react-avatar';
import { Link, IndexLink } from 'react-router';

import { getFewContent } from '../../../../helpers/string.helper';
import * as loginActions from '../../Login/_loginActions';
import MenuItemWithTooltip from './_components/MenuItemWithTooltip';

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle(e) {
    if (e) e.preventDefault();
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  mobileSidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }

  componentDidMount() {
  }

  render() {
    const userFullName = getFewContent(get(this.props.user, ['data', 'email'], ''));
    return (
      this.props.isConnectedToServer ?
        <header className="app-header navbar">
          <button className="navbar-toggler mobile-sidebar-toggler d-lg-none"
                  onClick={this.mobileSidebarToggle}
                  type="button">&#9776;</button>
          <IndexLink to="/" className="navbar-brand"></IndexLink>
          <ul className="nav navbar-nav d-md-down-none mr-auto">
            <IndexLink to="/admin" className="px-3 nav-link nav-item">
              <MenuItemWithTooltip target="home" tip="Home">
                <i className="fa fa-2x fa-home"/>
              </MenuItemWithTooltip>
            </IndexLink>
            <Link to={'/admin/about'} className="px-3 nav-link nav-item"
                >
              <MenuItemWithTooltip target="about" tip="About">
                <i className="fa fa-2x fa-info"/>
              </MenuItemWithTooltip>
            </Link>
          </ul>
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item">
              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <a onClick={this.toggle} className="nav-link dropdown-toggle nav-link"
                   data-toggle="dropdown" href=""
                   role="button" aria-haspopup="true" aria-expanded={this.state.dropdownOpen}>
                  <Avatar className="img-avatar"
                          name={userFullName}
                          size={35}
                          round={true}
                  />
                  <span className="d-md-down-none">{userFullName}</span>
                </a>
                <DropdownMenu className="dropdown-menu-right">
                  <a onClick={() => this.props.logout()} href="#">
                    <DropdownItem>
                      <i className="fa fa-lock"/>
                      Đăng xuất
                    </DropdownItem>
                  </a>
                </DropdownMenu>
              </Dropdown>
            </li>
            <li className="nav-item d-md-down-none">
              <button
                className="nav-link navbar-toggler aside-menu-toggler"
                onClick={(e) => {
                  e.preventDefault();
                  this.props.toggleAside(!this.props.asideIsOpen);
                }}
              >
                &#9776;
              </button>
            </li>
          </ul>
        </header>
        :
        <header className="app-header navbar bg-warning">
          <div className="container">
            <div className="col-md-12 text-center text-gray-dark">
              Không có kết nối đến máy chủ, vui lòng kiểm tra lại
            </div>
          </div>
        </header>
    );
  }
}

const mapStateToProps = state => ({
  user: get(state, ['auth', 'user'], {}),
  isConnectedToServer: state.app.isConnectedToServer
});
const mapDispatchToProps = {
  logout: loginActions.logout
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);

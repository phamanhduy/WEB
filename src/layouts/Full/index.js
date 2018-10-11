import React from 'react';
import { compose, withProps, lifecycle } from 'recompose';
import Breadcrumbs from 'react-breadcrumbs';
import { connect } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import { get } from 'lodash';

import Header from '../../views/Cms/_Parts/Header/index';
import Sidebar from '../../views/Cms/_Parts/Sidebar/index';
import Aside from '../../views/Cms/_Parts/Aside/index';
import Footer from '../../views/Cms/_Parts/Footer/index';
import Notifications from '../../components/Notifications/Notifications';
import * as actions from './_fullActions';

// // CoreUI Icons Set

const Full = ({
                user,
                rehydrated,
                notification,
                children,
                routes,
                params,
                toggleAside,
                toggleSidebar,
                toggleSidebarMinimize,
                asideIsOpen,
                sidebarIsOpen,
                sidebarIsMinimize
              }) => {
  const isLogin = get(user, ['isLogin'], true);
  Object.keys(params).forEach((key) => {
    if (params[key] === null || params[key] === undefined) {
      params[key] = '';
    }
  });

  require('../../../public/css/style.css'); // eslint-disable-line
  require('../../../public/css/font-awesome.min.css'); // eslint-disable-line
  require('../../../public/css/simple-line-icons.css'); // eslint-disable-line
  require('../../../public/css/react-redux-toastr.min.css'); // eslint-disable-line

  return (
    rehydrated && isLogin
      ?
      <div className="app">
        <Notifications
          ignore={get(notification, 'ignore', true)}
          title={
            get(notification, ['data', 'title'], '')}
          options={get(notification, ['data', 'options'], {})}/>
        <Header
          sidebarIsMinimize={sidebarIsMinimize}
          sidebarIsOpen={sidebarIsOpen}
          asideIsOpen={asideIsOpen}
          toggleAside={toggleAside}
          toggleSidebar={toggleSidebar}
          toggleSidebarMinimize={toggleSidebarMinimize}
        />
        <div className="app-body">
          <Sidebar user={user}/>
          <main className="main">
            <Breadcrumbs
              wrapperElement="ol"
              wrapperClass="breadcrumb"
              itemClass="breadcrumb-item"
              separator=""
              routes={routes}
              params={params}
            />
            <div className="container-fluid">
              {children}
            </div>
          </main>
          <Aside/>
          <ReduxToastr timeOut={2000}
                       preventDuplicates/>
        </div>
        <Footer/>
      </div>
      :
      <span className="loader"></span>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  notification: state.app.notification,
  toastMessage: state.app.toastMessage,
  rehydrated: state.app.rehydrated,
  asideIsOpen: actions.getAsideIsOpen(state),
  sidebarIsOpen: actions.getSidebarIsOpen(state),
  sidebarIsMinimize: actions.getSidebarIsMinimize(state)
});
const mapDispatchToProps = {
  toastMessage: actions.toastMessage,
  toggleAside: actions.toggleAside,
  toggleSidebar: actions.toggleSidebar,
  toggleSidebarMinimize: actions.toggleSidebarMinimize
};

export default compose(
  withProps(props => ({
    ...props,
    foo: 'baz'
  })),
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
    },
  })
)(Full);

import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle, withProps } from 'recompose';
import * as fullActions from '../../../layouts/Full/_fullActions';
import Switches from '../../../components/Switches/Switches';
import packagejson from '../../../../package.json';

const About = ({
                 asideIsOpen,
                 sidebarIsOpen,
                 sidebarIsMinimize,
                 toggleAside,
                 toggleSidebar,
                 toggleSidebarMinimize
               }) => (
  <div className="container-fluid">
    <div className="animated fadeIn">
      <div className="col-md-12">
        <div className="card">
          <div className="card-block">
            <div className="text-center col-md-12">
              <h1>{packagejson.name}</h1>
              <h3 className="badge badge-pill badge-primary">v{packagejson.version}</h3>
              <p>{packagejson.description}</p>
              <br/>
              <small>
                Powered by &nbsp;
                <a href={`mailto:${packagejson.email}`}>{packagejson.author}</a>
                &copy; 2017 All right services.
              </small>
            </div>
            <hr/>
            <div className="clearfix"></div>
            <div className="col-sm-12 col-xl-4 col-md-4 col-lg-4 text-left">
              <h6><i className="fa icon-settings"/> Options</h6>
              <hr/>
              <form action="" method="post" className="form-horizontal">
                <div className="form-group row">
                  <label className="col-md-6 form-control-label"
                         htmlFor="hf-email">Sidebar open?</label>
                  <div className="col-md-6">
                    <Switches
                      value={sidebarIsOpen}
                      onChange={() => toggleSidebar(!sidebarIsOpen)}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-md-6 form-control-label"
                         htmlFor="hf-email">Sidebar compact?</label>
                  <div className="col-md-6">
                    <Switches
                      value={sidebarIsMinimize}
                      onChange={() => toggleSidebarMinimize(!sidebarIsMinimize)}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-md-6 form-control-label"
                         htmlFor="hf-email">Aside open?</label>
                  <div className="col-md-6">
                    <Switches
                      value={asideIsOpen}
                      onChange={() => toggleAside(!asideIsOpen)}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  rehydrated: fullActions.getRehydrated(state),
  asideIsOpen: fullActions.getAsideIsOpen(state),
  sidebarIsOpen: fullActions.getSidebarIsOpen(state),
  sidebarIsMinimize: fullActions.getSidebarIsMinimize(state)
});

const mapDispatchToProps = {
  toggleAside: fullActions.toggleAside,
  toggleSidebar: fullActions.toggleSidebar,
  toggleSidebarMinimize: fullActions.toggleSidebarMinimize
};

export default compose(
  withProps(props => ({ ...props, foo: 'baz' })),
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  lifecycle({
    componentDidMount() {
    }
  })
)(About);

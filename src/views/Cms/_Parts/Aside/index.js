import React from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import * as fullActions from '../../../../layouts/Full/_fullActions';

const Aside = ({ asideActiveTab, changeAsideTab }) => (
  <aside className="aside-menu">
    <Nav tabs>
      <NavItem>
        <NavLink className={classnames({ active: asideActiveTab === 1 })}
                 onClick={() => {
                   changeAsideTab(1);
                 }}>
          <i className="icon-list"></i>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className={classnames({ active: asideActiveTab === 2 })}
                 onClick={() => {
                   changeAsideTab(2);
                 }}>

          <i className="icon-speech"></i>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className={classnames({ active: asideActiveTab === 3 })}
                 onClick={() => {
                   changeAsideTab(3);
                 }}>
          <i className="fa fa-search"></i>
        </NavLink>
      </NavItem>
    </Nav>
    <TabContent activeTab={asideActiveTab}>
      <TabPane tabId={1}>
        {asideActiveTab === 1 ?
          <span>asideActiveTab 1</span>
          : null
        }
      </TabPane>
      <TabPane tabId={2} className="p-3">
        {
          asideActiveTab === 2 ?
            <span>asideActiveTab 2</span>
            : null
        }
      </TabPane>
      <TabPane tabId={3} className="p-3">
        {
          asideActiveTab === 3 ?
            <span>asideActiveTab 3</span>
            : null
        }
      </TabPane>
    </TabContent>
  </aside>
);

const mapStateToProps = state => ({
  user: get(state, ['auth', 'user'], {}),
  asideActiveTab: fullActions.getAsideActiveTab(state)
});

const mapDispatchToProps = dispatch => ({
  changeAsideTab: (tab) => {
    dispatch(fullActions.changeAsideTab(tab));
  }
});
const AsideContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Aside);
export default AsideContainer;

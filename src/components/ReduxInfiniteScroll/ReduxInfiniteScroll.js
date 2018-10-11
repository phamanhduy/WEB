/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { PropTypes } from 'prop-types';
// import ImmutablePropTypes from 'react-immutable-proptypes';

import { topPosition, leftPosition } from './Utilities/DOMPositionUtils';

export default class ReduxInfiniteScroll extends React.Component {

  constructor(props) {
    super(props);
    this.scrollFunction = this.scrollListener.bind(this);
  }

  componentDidMount() {
    this.attachScrollListener();
  }

  componentDidUpdate() {
    this.attachScrollListener();
  }

  _findElement() {
    return this.props.elementIsScrollable ? ReactDOM.findDOMNode(this) : window;
  }

  attachScrollListener() {
    if (!this.props.hasMore || this.props.loadingMore) return;
    const el = this._findElement();
    el.addEventListener('scroll', this.scrollFunction, true);
    el.addEventListener('resize', this.scrollFunction, true);
    this.scrollListener();
  }

  _elScrollListener() {
    const el = ReactDOM.findDOMNode(this);

    if (this.props.horizontal) {
      const leftScrollPos = el.scrollLeft;
      const totalContainerWidth = el.scrollWidth;
      const containerFixedWidth = el.offsetWidth;
      const rightScrollPos = leftScrollPos + containerFixedWidth;

      return (totalContainerWidth - rightScrollPos);
    }

    const topScrollPos = el.scrollTop;
    const totalContainerHeight = el.scrollHeight;
    const containerFixedHeight = el.offsetHeight;
    const bottomScrollPos = topScrollPos + containerFixedHeight;

    return (totalContainerHeight - bottomScrollPos);
  }

  _windowScrollListener() {
    const el = ReactDOM.findDOMNode(this);

    if (this.props.horizontal) {
      const windowScrollLeft = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
      const elTotalWidth = leftPosition(el) + el.offsetWidth;
      const currentRightPosition = elTotalWidth - windowScrollLeft - window.innerWidth;

      return currentRightPosition;
    }

    const windowScrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    const elTotalHeight = topPosition(el) + el.offsetHeight;
    const currentBottomPosition = elTotalHeight - windowScrollTop - window.innerHeight;

    return currentBottomPosition;
  }

  scrollListener() {
    //  This is to prevent the upcoming logic from toggling a load more before
    //  any data has been passed to the component
    if (this._totalItemsSize() <= 0) return;

    const bottomPosition = this.props.elementIsScrollable ? this._elScrollListener() : this._windowScrollListener();
    // console.log('bottomPosition/threshold :', bottomPosition, '/', this.props.threshold);
    if (bottomPosition < Number(this.props.threshold)) {

      this.detachScrollListener();
      this.props.loadMore();
    }
  }

  detachScrollListener() {
    const el = this._findElement();
    el.removeEventListener('scroll', this.scrollFunction, true);
    el.removeEventListener('resize', this.scrollFunction, true);
  }

  _renderOptions() {
    const allItems = this.props.children.concat(this.props.items);

    return allItems;
  }

  _totalItemsSize() {
    let totalSize;
    totalSize += (this.props.children.size) ? this.props.children.size : this.props.children.length;
    totalSize += (this.props.items.size) ? this.props.items.size : this.props.items.length;
    return totalSize;
  }

  componentWillUnmount() {
    this.detachScrollListener();
  }

  renderLoader() {
    return (this.props.loadingMore && this.props.showLoader) ? this.props.loader : undefined;
  }

  _assignHolderClass() {
    let additionalClass;
    additionalClass = (typeof this.props.className === 'function') ? this.props.className() : this.props.className;

    return 'redux-infinite-scroll ' + additionalClass;
  }

  _renderWithTransitions() {
    const allItems = this.props.children.concat(this.props.items);


    console.log('animating with tran');
    return (
      <ReactCSSTransitionGroup transitionName={this.props.transitionName}
                               transitionEnter={this.props.transitionEnter}
                               transitionEnterTimeout={this.props.transitionEnterTimeout}
                               transitionLeave={this.props.transitionLeave}
                               transitionLeaveTimeout={this.props.transitionLeaveTimeout}
                               transitionAppear={this.props.transitionAppear}
                               transitionAppearTimeout={this.props.transitionAppearTimeout}
      >
        {allItems}
      </ReactCSSTransitionGroup>
    )
  }

  render() {
    const Holder = this.props.holderType;

    return (
      <Holder className={ this._assignHolderClass() }
              style={{height: this.props.containerHeight, overflow: 'scroll'}}>
        {this.props.animateItems ? this._renderWithTransitions() : this._renderOptions()}
        {this.renderLoader()}
      </Holder>
    )
  }
}

ReduxInfiniteScroll.propTypes = {
  elementIsScrollable: PropTypes.bool,
  containerHeight: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  threshold: PropTypes.number,
  horizontal: PropTypes.bool,
  hasMore: PropTypes.bool,
  loadingMore: PropTypes.bool,
  loader: PropTypes.any,
  showLoader: PropTypes.bool,
  loadMore: PropTypes.func.isRequired,
  items: PropTypes.oneOfType([
    // ImmutablePropTypes.list,
    PropTypes.array
  ]),
  children: PropTypes.oneOfType([
    // ImmutablePropTypes.list,
    PropTypes.array
  ]),
  holderType: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ]),
  animateItems: PropTypes.bool,
  transitionName: PropTypes.string,
  transitionEnter: PropTypes.bool,
  transitionEnterTimeout: PropTypes.number,
  transitionLeave: PropTypes.bool,
  transitionLeaveTimeout: PropTypes.number,
  transitionAppear: PropTypes.bool,
  transitionAppearTimeout: PropTypes.number,
};

ReduxInfiniteScroll.defaultProps = {
  className: '',
  elementIsScrollable: true,
  containerHeight: '100%',
  threshold: 100,
  horizontal: false,
  hasMore: true,
  loadingMore: false,
  loader: "loading",
  showLoader: true,
  holderType: 'div',
  children: [],
  items: [],
  animateItems: false,
  transitionName: 'redux-infinite-scroll',
  transitionEnter: true,
  transitionEnterTimeout: 2000,
  transitionLeave: true,
  transitionLeaveTimeout: 1000,
  transitionAppear: true,
  transitionAppearTimeout: 2000
};

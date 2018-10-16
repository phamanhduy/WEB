import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import ReduxInfiniteScroll from '../ReduxInfiniteScroll/ReduxInfiniteScroll'

export default class InfiniteLoaderList extends Component {

  render() {
    return (
      <div>
        {this.props.thead ? this.props.thead : null}
        <ReduxInfiniteScroll
          holderType={this.props.holderType || 'ul'}
          className={this.props.className || 'icons-list'}
          containerHeight={this.props.containerHeight || '400px'}
          items={this.props.items}
          loader={this.props.loader}
          loadMore={this.props.loadMoreAction}
          loadingMore={this.props.isFetching}
          threshold={1}
          hasMore={this.props.fetchAble}
        />
      </div>
    )
  }
}

InfiniteLoaderList.propTypes = {
  loadMoreAction: PropTypes.func,
  items: PropTypes.array
}

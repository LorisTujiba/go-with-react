import React, { Component } from 'react';
import { Grid, Jumbotron, Row, Col, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { lazyFetchPosts } from '../actions/index';
import InfiniteScroll from 'react-infinite-scroller';

import _ from 'lodash';
import Header from '../components/Header';

class Home extends Component {

  constructor(props){
    super(props);

    this.state = {
      posts : [],
      hasMoreItems : true,
      currentOffset : 0,
      nextOffset : 0
    }
  }

  loadItems(page){
      this.props.lazyFetchPosts(this.state.currentOffset)
        this.setState({
          currentOffset: this.state.currentOffset+5
        })
  }

  render() {
    const loader = <div>Loading...</div>
    var items = [];
    _.map(this.props.posts, post => {
      console.log("kita",post)
      items.push(
        <Panel key={post.id} header={post.title}>
          {post.body}
        </Panel>
      );
    });

    return (
      <div>
        <Header marginBottom={"-20px"} />
        <Jumbotron>
          <Grid>
            <h1>Hiya!</h1>
            <p>This is a simple application that uses golang as webservices and react js as the front end.</p>
          </Grid>
        </Jumbotron>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadItems.bind(this)}
          hasMore={this.state.hasMoreItems}
          loader={loader}
        >
          {items}
        </InfiniteScroll>
      </div>
    );
  }

}

function mapStateToPost(state){
  return {
    posts : state.posts
  }
}

export default connect(mapStateToPost,{ lazyFetchPosts })(Home);

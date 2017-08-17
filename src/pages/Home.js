import React, { Component } from 'react';
import { Grid, Jumbotron, Row, Col, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import LazyLoad from 'react-lazyload';

import _ from 'lodash';
import Header from '../components/Header';

class Home extends Component {

  componentWillMount() {
    this.props.fetchPosts()
  }

  renderPosts() {
    return(
      _.map(this.props.posts, post =>{
        return(
            <LazyLoad height={200}>
              <Panel header={post.title} footer={post.username}>
                {post.body}
              </Panel>
            </LazyLoad>
        )
      })
    )
  }

  render() {
    return (
      <div>
        <Header marginBottom={"-20px"} />
        <Jumbotron>
          <Grid>
            <h1>Hiya!</h1>
            <p>This is a simple application that uses golang as webservices and react js as the front end.</p>
          </Grid>
        </Jumbotron>
        {
          this.renderPosts()
        }
      </div>
    );
  }

}

function mapStateToPost(state){
  return {
    posts : state.posts
  }
}

export default connect(mapStateToPost,{ fetchPosts })(Home);

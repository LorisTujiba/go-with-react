import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel } from 'react-bootstrap';
import Header from '../components/Header';
import _ from "lodash";
import { fetchPosts } from '../actions/index';

class PostsMaster extends Component {

  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts(){
    return(
      _.map(this.props.posts, post =>{
        return(
          <Panel key={post.id} header={post.title} footer={post.username}>
            <p>{post.body}</p>
            <em>#{post.tag}</em>
          </Panel>
        )
      })
    )
  }

  render() {
    return (
      <div>
        <Header />
        {
          this.renderPosts()
        }
      </div>
    );
  }

}

function mapStateToPost(state){
  return{
    posts : state.posts
  }
}

export default connect(mapStateToPost,{ fetchPosts })(PostsMaster);

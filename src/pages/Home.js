import React, { Component } from 'react';
import { Grid, Jumbotron, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { lazyFetchPosts } from '../actions/index';
import _ from 'lodash';
import Header from '../components/Header';
import LazyLoad from 'react-lazyload';

class Home extends Component {

  constructor(props){
    super(props);

    this.state = {
      posts : [],
      offset : 0,
      message : ''
    }

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentWillMount() {
    this.props.lazyFetchPosts(this.state.offset);
  }

  componentDidMount() {
      window.addEventListener("scroll", this.handleScroll);
    }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight && this.props.posts.next_data) {
      this.setState({
        offset : this.state.offset + 5
      });
      this.props.lazyFetchPosts(this.state.offset)
    }
  }

  renderPosts(){
    return(
      _.map(this.props.posts.posts, post => {
        return(
          <LazyLoad height={300} key={post.id} >
            <Panel bsStyle="success" header={post.title} footer={post.username}>
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
        <Grid>
          {
            this.renderPosts()
          }
        </Grid>
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
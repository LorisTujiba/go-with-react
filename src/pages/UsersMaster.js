import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/index';
import { Panel, Grid } from 'react-bootstrap';
import _ from 'lodash';
import Header from '../components/Header';

class UsersMaster extends Component {

  componentWillMount() {
    this.props.fetchUsers()
  }

  renderUsers(){
    return(
      _.map(this.props.users, user =>{
        return(
          <Panel key={user.id} header={user.username} bsStyle="info">
            password : {user.password}
          </Panel>
        )
      })
    )
  }

  render() {
    return (
      <div>
        <Header />
        <Grid>
          { this.renderUsers()}
        </Grid>
      </div>
    );
  }

}

function mapStateToProps(state){
  return{
    users : state.users
  }
}

export default connect(mapStateToProps,{ fetchUsers })(UsersMaster);

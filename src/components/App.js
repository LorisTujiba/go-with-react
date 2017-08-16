import React, { Component } from 'react';
import { Grid, Col, Row, PageHeader } from 'react-bootstrap';
import Header from './Header';

class App extends Component {

  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col>
            <PageHeader>Go with React app</PageHeader>
          </Col>
        </Row>
      </Grid>
    );
  }

}

export default App;

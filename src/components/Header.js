import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

class Header extends Component {

  render() {
    return (
      <Navbar style={{marginBottom : this.props.marginBottom}} fluid collapseOnSelect>
        <Navbar.Header>
          <LinkContainer to="/">
            <Navbar.Brand>
              Go with React
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <IndexLinkContainer to="/">
              <NavItem eventKey={1}>Home</NavItem>
            </IndexLinkContainer>
            <NavDropdown eventKey={2} title="Masters" id="basic-nav-dropdown">
              <LinkContainer to="/users">
                <MenuItem eventKey={2.1}>Users</MenuItem>
              </LinkContainer>
              <LinkContainer to="/posts">
                <MenuItem eventKey={2.2}>Posts</MenuItem>
              </LinkContainer>
            </NavDropdown>
            <NavDropdown eventKey={2} title="Insert" id="basic-nav-dropdown">
              <LinkContainer to="/users">
                <MenuItem eventKey={2.1}>User</MenuItem>
              </LinkContainer>
              <LinkContainer to="/posts">
                <MenuItem eventKey={2.2}>Post</MenuItem>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }

}

export default Header;

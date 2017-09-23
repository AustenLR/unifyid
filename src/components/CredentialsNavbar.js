import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import LogoImg from '../unifyid.png';

class CredentialsNavbar extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      activeKey: '1'
    };
  }

  handleSelect(selectedKey) {
    this.setState({ activeKey: selectedKey.toString() });
    if (selectedKey.toString() === '1') {
      this.props.handleCategoryClick('own_credentials');
    } else if (selectedKey.toString() === '2') {
      this.props.handleCategoryClick('shared_with_others');
    } else {
      this.props.handleCategoryClick('shared_with_me');
    }
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <img src={LogoImg} />
          </Navbar.Brand>
        </Navbar.Header>
        <Nav
          bsStyle="pills"
          activeKey={this.state.activeKey}
          onSelect={this.handleSelect}
        >
          <NavItem eventKey="1">My Logins</NavItem>
          <NavItem eventKey="2">My Shared Logins</NavItem>
          <NavItem eventKey="3">Shared With Me</NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default CredentialsNavbar;
